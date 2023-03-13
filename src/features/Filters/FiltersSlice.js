import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    filterBy: 'All',
    searchBy: '',
};

// initiating filters slice here
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterBooks: (state, action) => {
            state.filterBy = action.payload;
        },
        searchBooks: (state, action) => {
            state.searchBy = action.payload;
        },
    }
});

export default filtersSlice.reducer;
export const { filterBooks, searchBooks } = filtersSlice.actions;