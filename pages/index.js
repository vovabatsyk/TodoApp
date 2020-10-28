import Head from 'next/head'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import { table, getMinifiedRecords } from '../pages/api/utils/Airtable'

export default function Home({ initialTodos }) {
  return (
    <div>
      <Head>
        <title>ToDo Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main>
        <h1 className='text-center text-red-900 text-3xl p-5'>ToDo App</h1>
        <ul>
          {initialTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const todos = await table.select({}).firstPage()
    return {
      props: {
        initialTodos: getMinifiedRecords(todos),
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
