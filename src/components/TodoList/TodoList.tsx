import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Todo from '../Todo/Todo'
import './TodoList.scss'

const TodoList = () => {
  const [todos, setTodos] = useState([{}])
  const [todoInput, setTodoInput] = useState('')

  useEffect(() => {
    const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')!) : []
    setTodos(todos)
  }, [])

  const onLeftClickHandler = () => {}

  const onRightClickHandler = () => {}

  const onSubmit = (e: any) => {
    e.preventDefault()

    const todo = {
      id: uuid(),
      text: todoInput.trim(),
      createdAt: new Date(),
      completed: false,
    }

    if (todoInput.trim().length > 0) {
      setTodos((todos: any) => [...todos, todo])
    }

    setTodoInput('')
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  return (
    <>
      <form className='todo__form' onSubmit={onSubmit}>
        <input
          className='todo__form__input'
          type='text'
          placeholder='Enter your todo'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>

      <ul className='todolist'>
        {todos.map((todo: any) => (
          <Todo
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
            createdAt={todo.createdAt}
            onLeftClickHandler={onLeftClickHandler}
            onRightClickHandler={onRightClickHandler}
          />
        ))}
      </ul>
    </>
  )
}

export default TodoList
