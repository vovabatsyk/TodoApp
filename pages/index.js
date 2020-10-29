import Head from 'next/head'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import { table, getMinifiedRecords } from '../pages/api/utils/Airtable'
import { TodosContext } from '../contexts/TodosContext'
import { useEffect, useContext } from 'react'
import auth0 from './api/utils/auth0'
import TodoForm from '../components/TodoForm'

export default function Home({ initialTodos, user }) {
  const { todos, setTodos } = useContext(TodosContext)
  useEffect(() => {
    setTodos(initialTodos)
  }, [])

  return (
    <div className='px-4'>
      <Head>
        <title>ToDo Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar user={user} />
      <main>
        {user && (
          <>
            <h1 className='text-center text-red-900 text-3xl p-5'>ToDo App</h1>
            <TodoForm />
            <ul>
              {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
            </ul>
          </>
        )}
        {!user && <p>You should log in to save your TODOs</p>}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req)
  let todos = []

  try {
    if (session?.user) {
      todos = await table
        .select({
          filterByFormula: `userId = '${session.user.sub}'`,
        })
        .firstPage()
    }
    return {
      props: {
        initialTodos: getMinifiedRecords(todos),
        user: session?.user || null,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        err: 'Something went wrong',
      },
    }
  }
}
