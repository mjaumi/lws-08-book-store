import React from 'react';
import BookItem from '../BookItem/BookItem';
import Filters from '../Filters/Filters';

const BookList = () => {

    // rendering the book list component here
    return (
        <main className='py-12 px-6 2xl:px-6 container'>
            <div className='order-2 xl:-order-1'>
                <Filters />
                <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <BookItem />
                </div>
            </div>
        </main>
    );
};

export default BookList;