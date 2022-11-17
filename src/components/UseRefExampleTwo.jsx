import React, { useRef, useState, useEffect } from 'react'

function UseRefExampleTwo() {
    const [name, setName] = useState("")
    const renders = useRef(1)
    const prevName = useRef('')

    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    },[name])

    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h2>Prev Name State: {prevName.current}</h2>
            <input className='form-control mb-3'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default UseRefExampleTwo