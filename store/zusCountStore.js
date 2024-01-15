import { create } from "zustand"


const zusCountStore = create((set, get) => ({
    count: 0,
    increase: (n) => set((state) => ({ count: state.count + Number(n) })),
    decrease: (n) => set(state => ({ count: state.count - Number(n) }))
}))


export default zusCountStore