
import { create } from 'zustand'

const api_url = "https://mern-zustand-counter-backend.vercel.app/counter"

export const useCounterStore = create((set, get) => ({
    count: 0,
    userInput: 0,
    increase: async () => {
        const userInput = parseInt(get().userInput);

        const clientData = {
            count: userInput > 1 ? Number(userInput) : 1,
            operation: "inc"
        }
        console.log("clientData=", clientData)

        set({count: get().count + clientData.count})

        const data = await sendData(clientData)
        console.log(data)
        // set({ count: await data.count })
    },
    decrease: async () => {
        const userInput = parseInt(get().userInput);
        const clientData = {
            count: userInput > 1 ? userInput : 1,
            operation: "dec"
        }
        set({count: get().count - clientData.count})
        const data = await sendData(clientData)
        console.log(data)
        // set({ count: await data.count })
    },
    setUserInput: (newInput) => set({ userInput: newInput }),
}));


const sendData = async (clientData) => {
    const res = await fetch(api_url, {
        method: "post",
        body: JSON.stringify(clientData),
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = res.json()
    return data
}