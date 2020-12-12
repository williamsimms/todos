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

  const onLeftClickHandler = (id: string) => {
    const foundTodoIndex = todos.findIndex((todo: any) => {
      return String(todo.id) === id
    })
  }

  const onRightClickHandler = (id: string) => {
    const filteredTodos = todos.filter((todo: any) => {
      return String(todo.id) !== id
    })
    setTodos(filteredTodos)
    localStorage.setItem('todos', JSON.stringify(filteredTodos))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()

    const todo = {
      id: uuid(),
      text: todoInput.trim(),
      createdAt: Date.now(),
      completed: false,
    }

    if (todoInput.trim().length > 0) {
      setTodos((todos: any) => [...todos, todo])
    }
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
    setTodoInput('')
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

        <ul className='todolist'>
          {todos
            .sort((a: any, b: any) => a.createdAt - b.createdAt)
            .map((todo: any) => (
              <Todo
                key={String(todo.id)}
                text={todo.text}
                id={todo.id}
                completed={todo.completed}
                createdAt={todo.createdAt}
                onLeftClickHandler={onLeftClickHandler}
                onRightClickHandler={onRightClickHandler}
              />
            ))}
        </ul>
      </form>
    </>
  )
}

export default TodoList
