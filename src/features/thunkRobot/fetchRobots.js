// fetchTodoById is the "thunk action creator"
import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchRobots1 = () => async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    dispatch(response)
}

// omit imports and state

export const fetchRobots = createAsyncThunk('robots/fetch', async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
})