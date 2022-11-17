import React, { useRef } from 'react'

function UseRefExampleOne() {
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    inputRef.current.value = "Referenced"
  }

  return (
    <div className='form-control w-full max-w-xs'>
      <form onSubmit={onSubmit}>
        <label
          className='label'
          htmlFor='name'>Name</label>
        
        <input
          type='text'
          id='name'
          ref={inputRef}
          className='input input-bordered w-full max-w-xs my-5'
        />

        <button
          type='submit'
          className='btn btn-success'
          onClick={() => inputRef.current.focus()}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UseRefExampleOne