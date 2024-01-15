"use client"
import React from 'react'
import { useCounterStore } from './ZusCounter/zusStore'

const Orders = () => {

    const {count} = useCounterStore()
    return (

        <a href="#" className="absolute bottom-10 right-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p>Orders</p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{count}</h5>
        </a>
    )
}

export default Orders