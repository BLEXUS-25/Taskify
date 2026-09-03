import React, { useState } from 'react'

import { Trash2, Pencil, Check, X } from 'lucide-react'

const Task = ({
  title,
  isImp,
  id,
  completed,
  toggleTask,
  deleteTask,
  editTask
}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(title)

  const handleEdit = () => {
    if (editTitle.trim() === '') {
      return
    }

    editTask(id, editTitle.trim())
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(title)
    setIsEditing(false)
  }

  return (
    <div
      className={`
        border-2
        text-white
        px-5 py-3
        rounded-2xl
        flex items-center gap-3
        transition-all duration-300

        ${isImp
          ? 'border-red-400 bg-red-900/30 shadow-[0_0_12px_rgba(252,0,0,0.5)]'
          : 'border-white bg-blue-900/30'
        }

        ${completed ? 'opacity-50' : ''}
      `}
    >

      {/* Checkbox */}
      <input
        className="
          w-6 h-6
          shrink-0
          appearance-none
          rounded-md
          border-2 border-gray-400
          bg-transparent
          cursor-pointer
          transition-all duration-200
          checked:bg-blue-500
          checked:border-blue-500
          checked:after:content-['✓']
          checked:after:text-white
          checked:after:flex
          checked:after:items-center
          checked:after:justify-center
          checked:after:h-full
          peer
        "
        type="checkbox"
        name="task"
        id={`task-${id}`}
        checked={completed}
        onChange={() => toggleTask(id)}
      />

      {/* Title / Edit input */}
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleEdit()
            }

            if (e.key === 'Escape') {
              handleCancel()
            }
          }}
          autoFocus
          className="
            flex-1
            bg-gray-700
            text-white
            px-3 py-1
            rounded-lg
            outline-none
            border
            border-gray-500
            focus:border-blue-400
          "
        />
      ) : (
        <label
          htmlFor={`task-${id}`}
          className="
            cursor-pointer
            flex-1
            peer-checked:line-through
            peer-checked:text-gray-400
          "
        >
          {title}
        </label>
      )}

      {/* Buttons */}
      <div className="ml-auto flex gap-3">

        {isEditing ? (
          <>
            {/* Save */}
            <button
              onClick={handleEdit}
              className="
                text-green-300
                hover:text-green-500
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <Check size={20} />
            </button>

            {/* Cancel */}
            <button
              onClick={handleCancel}
              className="
                text-gray-300
                hover:text-gray-500
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <X size={20} />
            </button>
          </>
        ) : (
          <>
            {/* Edit */}
            <button
              onClick={() => setIsEditing(true)}
              className="
                text-green-300
                hover:text-green-500
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <Pencil size={20} />
            </button>

            {/* Delete */}
            <button
              onClick={() => deleteTask(id)}
              className="
                text-red-300
                hover:text-red-500
                hover:scale-110
                transition-all
                duration-200
              "
            >
              <Trash2 size={20} />
            </button>
          </>
        )}

      </div>

    </div>
  )
}

export default Task