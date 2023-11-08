import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const searchSlice = createSlice({
    name: "searchRobot",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { update } = searchSlice.actions

export default searchSlice.reducer