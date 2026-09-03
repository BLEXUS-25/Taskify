import React, { useState } from 'react'
import { Plus } from 'lucide-react';

const AddTask = ({ addTask }) => {

    const [title, setTitle] = useState('')
    const [isImportant, setIsImportant] = useState(false)

    const handleAddTask = () => {
        if (title.trim() === '') {
            return
        }
        addTask(title, isImportant)
        setTitle('')
        setIsImportant(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask()
        }
    }

    return (
        <div className="p-3 mt-4 flex flex-col gap-4">

            <div className="relative">
                <Plus
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    size={20}
                />

                <input
                    className="bg-gray-300 rounded-2xl p-3 pl-10 w-full text-gray-700 outline-none "
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Add a new task..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className='flex flex-col lg:flex-row gap-4'>
                <button
                    className={`
            flex-1
            py-2
            rounded-2xl
            border-2
            transition-all
            duration-300

            ${isImportant
                            ? 'text-white bg-red-500 border-red-300 shadow-[0_0_15px_rgba(252,0,0,0.7)]'
                            : 'text-red-300 bg-red-500/0 border-red-300 shadow-[0_0_10px_rgba(252,0,0,0.5)]'
                        }
          `}
                    onClick={() => setIsImportant(!isImportant)}>
                    Mark as Important
                </button>
                <button className='flex-1 text-green-100 border-green-300 border-2 py-2 rounded-2xl bg-green-500/40  shadow-[0_0_10px_rgba(0,252,0,0.5)]'
                    onClick={handleAddTask}>
                    Add Task
                </button>
            </div>

        </div>
    )
}

export default AddTask