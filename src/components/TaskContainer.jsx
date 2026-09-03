import React from 'react'
import Task from './Task'

const TaskContainer = ({ tasks, toggleTask, deleteTask, editTask }) => {

  const remainingTasks = tasks.filter(task => !task.completed).length

  return (
    <div className='w-full flex flex-col gap-5 overflow-y-auto'>
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl">
          TASKS
        </h2>

        <span className="text-gray-400">
          {remainingTasks} remaining
        </span>
      </div>
      {tasks.length === 0 ? (
        <div className="
    text-center
    text-gray-400
    py-10
    border-2
    border-dashed
    border-gray-600
    rounded-2xl
  ">
          <p className="text-lg">No tasks yet 🎉</p>
          <p className="text-sm mt-1">
            Add something to get started
          </p>
        </div>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            completed={task.completed}
            title={task.title}
            isImp={task.important}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskContainer