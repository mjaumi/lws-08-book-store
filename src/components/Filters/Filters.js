import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../../features/Filters/FiltersSlice';

const Filters = () => {
    // integration or react-redux hooks here
    const { filterBy } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    // handler function for dispatching action to filter books
    const filterBooksHandler = filterText => {
        dispatch(filterBooks(filterText));
    }

    // rendering filters component here
    return (
        <div className='flex items-center justify-between mb-12'>
            <h4 className='mt-2 text-xl font-bold'>Book List</h4>

            <div className='flex items-center space-x-4'>
                <button onClick={() => filterBooksHandler('All')} className={`lws-filter-btn ${filterBy === 'All' && 'active-filter'}`}>All</button>
                <button onClick={() => filterBooksHandler('Featured')} className={`lws-filter-btn ${filterBy === 'Featured' && 'active-filter'}`}>Featured</button>
            </div>
        </div>
    );
};

export default Filters;