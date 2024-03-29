import React, { useState } from 'react'

function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))
    const setValue = (value) => {
        //Check if it is a function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value;
        //Set to State
        setLocalStorageValue(value)
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage