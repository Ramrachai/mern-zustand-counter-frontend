"use client"
import React, { useState } from 'react'
import { useCounterStore } from './zusStore'

const Input = () => {
    const [num, setNum] = useState(0)
    const {userInput, setUserInput} = useCounterStore()

    function handleChange(e) {
        setNum(e.target.value)
        setUserInput(e.target.value)

        console.log("local state=", num)
        console.log("global state=", userInput)
    }

    return (
        <input
            onChange={handleChange}
            value={num}
            type="number"
            id="number-input"
            className="max-w-[400px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Increase or decrease by"
        />
    )
}

export default Input