import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

export const thunkSlice = createSlice({
    name: 'thunkCounter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const thunkActions = thunkSlice.actions

export default thunkSlice.reducer



// thunk code below 👇


// Define a thunk that dispatches those action creators
export const delayIncrement = () => async (dispatch) => {

    const waitFor = () => new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor();

    dispatch(thunkActions.increment())
}

export const delayDecrement = () => async (dispatch) => {
    const waitFor = () => new Promise(resolve => setTimeout(resolve, 1000));
    await waitFor();

    dispatch(thunkActions.decrement())
}