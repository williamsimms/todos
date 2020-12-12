import React from 'react'
import './Todo.scss'

interface Props {
  completed: boolean
  text: string
  id: string
  createdAt: Date
  onLeftClickHandler: () => void
  onRightClickHandler: () => void
}

const Todo = ({ completed, text, id, createdAt, onLeftClickHandler, onRightClickHandler }: Props) => {
  return (
    <li
      className={`todo ${completed && 'todo__completed'}`}
      onClick={onLeftClickHandler}
      onAuxClick={onRightClickHandler}>
      {text}
    </li>
  )
}

export default Todo
