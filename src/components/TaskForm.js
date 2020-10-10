import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)

    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }
  const handleFilter = e => {
    e.preventDefault();
    setTitle(e.target.value)
  }

  // if (title.length > 0) { nba = nba.filter((i) => {return i.name.match(title);})};

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log("TaskListContext2" + editItem.title)
      console.log("TaskListContext2" + JSON.stringify(TaskListContext.title))
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>        <button className="btn clear-btn" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </form>
  )
}

export default TaskForm
