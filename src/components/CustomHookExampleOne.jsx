import React from 'react'
import useFetch from './custom-hooks/useFetch'

function CustomHookExampleOne() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1', {})

    if (loading) {
        return <h3>Loading ...</h3>
    }

    console.log(data)
    return (
        <div>
            {Object.keys.data.map((d, i) => (
                <h3 key={i}>{d.title}</h3>
            ))}
        </div>
    )
}

export default CustomHookExampleOne