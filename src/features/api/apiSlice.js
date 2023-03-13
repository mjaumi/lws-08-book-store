import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// creating API Slice here with react query
export const apiSlice = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000',
    }),
    tagTypes: ['books'],
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ['books'],
        }),
        addBook: builder.mutation({
            query: data => ({
                url: '/books',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['books'],
        })
    }),
});

export const {
    useGetBooksQuery,
    useAddBookMutation,
} = apiSlice;
