import { createContext, useState } from 'react'

const TodosContext = createContext()

const TodosProvider = ({ children }) => {
  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        refreshTodos,
        updateTodo,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}

export {TodosProvider, TodosContext}
