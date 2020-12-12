import React from 'react'
import './Todo.scss'

interface Props {
  completed: boolean
  text: string
  id: string
  createdAt: Date
  onLeftClickHandler: any
  onRightClickHandler: any
}

const Todo = ({ completed, text, id, createdAt, onLeftClickHandler, onRightClickHandler }: Props) => {
  return (
    <li
      className={`todo ${completed && 'todo__completed'}`}
      onClick={() => onLeftClickHandler(id)}
      onContextMenu={() => onRightClickHandler(id)}>
      {text}
    </li>
  )
}

export default Todo
