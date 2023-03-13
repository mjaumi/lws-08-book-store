import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// creating API Slice here with react query
export const apiSlice = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000',
    }),
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
        }),
    }),
});

export const {
    useGetBooksQuery,
} = apiSlice;
