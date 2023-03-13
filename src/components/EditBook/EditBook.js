import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBookQuery } from '../../features/api/apiSlice';
import Loading from '../UI/Loading';
import Form from './Form';

const EditBook = () => {
    // integration of react-router-dom hooks here
    const { bookId } = useParams();

    // integration of rtk query hooks here
    const { data: book, isLoading, isError } = useGetBookQuery(bookId);

    // deciding what to render here
    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && isError) {
        content = <p className='text-center text-red font-semibold'>Failed To Load The Book!</p>;
    }

    if (!isLoading && !isError && !book.id) {
        content = <p className='text-center text-red font-semibold'>No Book Found!</p>;
    }

    if (!isLoading && !isError && book.id) {
        content = (
            <div className='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
                <h4 className='mb-8 text-xl font-bold text-center'>Edit Book</h4>
                <Form book={book} />
            </div>
        );
    }

    // rendering the edit book form here
    return (
        <main className='py-6 2xl:px-6'>
            <div className='container'>
                {content}
            </div>
        </main>
    );
};

export default EditBook;