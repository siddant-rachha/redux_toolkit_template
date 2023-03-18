import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "a",
}

export const alphabetSlice = createSlice({
    name: 'alphabet',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = String.fromCharCode(state.value.charCodeAt() + 1);
        },
        decrement: (state) => {
            state.value = String.fromCharCode(state.value.charCodeAt() - 1);
        },
        incrementByAmount: (state, action) => {
            state.value = String.fromCharCode(state.value.charCodeAt() + 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const alphabetActions = alphabetSlice.actions

export default alphabetSlice.reducer