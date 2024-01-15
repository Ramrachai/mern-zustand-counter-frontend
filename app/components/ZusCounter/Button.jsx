"use client"
import React from 'react'
import {useCounterStore} from "./zusStore"

const Button = ({ label }) => {

    const {count, increase, decrease} = useCounterStore()


    function handleClick(){
        console.log("button clicked")
        if(label.toLowerCase() == "increase") {
            increase()
            console.log("increased")
        } else if (label.toLowerCase() == "decrease"){
            console.log("decreased")
            decrease()
        }
    }

    return (
        <button onClick={handleClick} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
            {label}
        </button>
    )
}

export default Button