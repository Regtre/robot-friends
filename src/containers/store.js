import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import searchReducer from '../features/searchRobots/searchSlice'
import {apiRobot} from '../features/api/apiRobot'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        searchRobot: searchReducer,
        [apiRobot.reducerPath]: apiRobot.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiRobot.middleware)
})