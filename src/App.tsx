import React from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <h1>todos</h1>
      <TodoList />
      <small className='todo__small'>
        Left click to toggle completed. <br /> Right click to delete todo.
      </small>
    </div>
  )
}

export default App
