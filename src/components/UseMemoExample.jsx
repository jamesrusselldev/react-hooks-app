import React, { useMemo, useState, useEffect, useRef } from 'react'

function UseMemoExample() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const sqrt = useMemo(()=> getSqrt(number), [number])

    const renders = useRef(1)
    useEffect(() => {
        renders.current = renders.current + 1
    })

    const handleClick = () => {
        setInc((prevState) => {
            return prevState + 1
        })
    }
    return (
        <div>
            <h1>RENDERS: {renders.current}</h1>
            <input type="number" className='form-control mb-5'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button className='btn btn-primary'
                onClick={handleClick}
            > Re Render </button>
            <h2>Squareroot of number is {sqrt}</h2>
        </div>
    )
}

function getSqrt(number) {
    for (let i = 0; i <= 10000; i++) {
        return Math.sqrt(number)
    }
}

export default UseMemoExample