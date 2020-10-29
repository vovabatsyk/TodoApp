import '../styles/globals.css'
import '../styles/index.css'
import { TodosProvider } from '../contexts/TodosContext'

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <div className='container mx-auto max-w-xl'>
        <Component {...pageProps} />
      </div>
    </TodosProvider>
  )
}

export default MyApp
