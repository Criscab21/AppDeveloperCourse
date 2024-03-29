import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath:"profileApi",
    baseQuery:fetchBaseQuery({baseUrl: "https://app-gestorgastos-default-rtdb.firebaseio.com/"}),
    endpoints:(builder) => ({
        putImaGe: builder.mutation({
            query:({image, localId}) => ({
                url:`/profile/${localId}.json`,
                method:"PUT",
                body:{
                    image: image,
                }
            })
        }),
        getImage: builder.query({
            query:(localId) => `/profile/${localId}.json`                
        })
    })
})

export const {usePutImaGeMutation, useGetImageQuery} = profileApi