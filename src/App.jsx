import React, { useState } from 'react'
import AddTask from './components/AddTask'
import TaskContainer from './components/TaskContainer'

const App = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const addTask = (title, important) => {
    const newTask = {
      id: Date.now(),
      title: title,
      important: important,
      completed: false
    }

    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask]
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  const deleteTask = (id) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== id)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  const editTask = (id, newTitle) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            title: newTitle
          }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  const toggleTask = (id) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  return (
    <div className='w-screen h-screen p-8 lg:p-10 bg-gray-800 overflow-y-auto'>
      <h1 className='text-white text-4xl uppercase text-center tracking-[1rem]'>Taskify</h1>
      <AddTask addTask={addTask} />
      <br />
      <TaskContainer tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  )
}

export default App