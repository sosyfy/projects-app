const navbarSlice = (set , get) => ({
    open: true,
    toggleNav: (state) => set((state)=>({...state ,open : !state.open})),
    isOpen: false,
    toggleMobile: (state) => set((state)=>({...state, isOpen : !state.isOpen})),
})

export default  navbarSlice