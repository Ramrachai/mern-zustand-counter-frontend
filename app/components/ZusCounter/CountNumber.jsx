"use client"

import React, { useEffect } from 'react'
import { useCounterStore } from './zusStore'

const api_url = "https://mern-zustand-counter-backend.vercel.app/counter"


const CountNumber = () => {
    const { count } = useCounterStore()
    console.log(count)

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => useCounterStore.setState({ count: data.count }))
    }, [])

    return (
        <span className="font-bold text-3xl px-5 text-red-400">{count}</span>
    )
}

export default CountNumber