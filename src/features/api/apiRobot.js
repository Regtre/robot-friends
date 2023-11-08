// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiRobot = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
        { baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/users'
        })
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery } = apiRobot