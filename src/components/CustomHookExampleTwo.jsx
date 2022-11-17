import { useRef } from "react"
import useLocalStorage from "./custom-hooks/useLocalStorage"

function CustomHookExampleTwo() {
    const inputRef = useRef()
    const [task, setTask] = useLocalStorage('task', '')

    //Set local storage to array
    // YOU CANNOT SET AN ARRAY IN A LOCAL STORAGE
    const [tasks, setTasks] = useLocalStorage('tasks', [])


    const onSubmit = (e) => {
        e.preventDefault()

        const taskObject = {
            task: task,
            completedValue: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObject])
        setTask('')
        inputRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit} className='w-50'>
            <div className="mb-3">
                <label htmlFor="task" className="form-label">Task</label>
                <input
                    ref={inputRef}
                    className='form-control'
                    id="task"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary"> SUBMIT </button>
            {
                tasks.map((i) => (
                    <h3 key={i.date}>{i.task}</h3>
                ))
        }
        </form>
    )
}

export default CustomHookExampleTwo