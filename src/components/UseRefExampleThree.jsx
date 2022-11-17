import React, { useState } from 'react'
import Todo from './Todo'

function UseRefExampleThree() {
    const [showTodo, setShowTodo] = useState(true)
    return (
        <div>
            {showTodo && <Todo />}
            <button
                onClick={() => setShowTodo(!showTodo)}
                className='btn btn-primary'>
                Toggle Todo
            </button>
        </div>
    )
}

export default UseRefExampleThree