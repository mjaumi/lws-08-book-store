import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../../features/api/apiSlice';

const Form = () => {
    // integration of rtk query hooks here
    const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

    // integration of react hooks here
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [featured, setFeatured] = useState(false);

    // integration of react-router-dom hook here
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
        }

        if (isError) {
            console.log('An Error Happened');
        }
    }, [isSuccess, navigate, isError]);

    // this function is resetting the form input fields
    const resetForm = () => {
        setName('');
        setAuthor('');
        setThumbnail('');
        setPrice('');
        setRating('');
        setFeatured('');
    }

    // handler function to handle add new book form submission
    const formSubmissionHandler = e => {
        e.preventDefault();

        addBook({
            name,
            author,
            thumbnail,
            price: Number(price),
            rating: Number(rating),
            featured
        });

        resetForm();
    }

    // rendering add new book form component here
    return (
        <form onSubmit={formSubmissionHandler} className='book-form'>
            <div className='space-y-2'>
                <label htmlFor='lws-bookName'>Book Name</label>
                <input onChange={e => setName(e.target.value)} value={name} required className='text-input' type='text' id='lws-bookName' name='name' />
            </div>

            <div className='space-y-2'>
                <label htmlFor='lws-author'>Author</label>
                <input onChange={e => setAuthor(e.target.value)} value={author} required className='text-input' type='text' id='lws-author' name='author' />
            </div>

            <div className='space-y-2'>
                <label htmlFor='lws-thumbnail'>Image Url</label>
                <input onChange={e => setThumbnail(e.target.value)} value={thumbnail} required className='text-input' type='text' id='lws-thumbnail' name='thumbnail' />
            </div>

            <div className='grid grid-cols-2 gap-8 pb-4'>
                <div className='space-y-2'>
                    <label htmlFor='lws-price'>Price</label>
                    <input onChange={e => setPrice(e.target.value)} value={price} required className='text-input' type='number' id='lws-price' name='price' />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='lws-rating'>Rating</label>
                    <input required onChange={e => setRating(e.target.value)} value={rating} className='text-input' type='number' id='lws-rating' name='rating' min='1'
                        max='5' />
                </div>
            </div>

            <div className='flex items-center'>
                <input onChange={e => setFeatured(e.target.checked)} checked={featured} id='lws-featured' type='checkbox' name='featured' className='w-4 h-4' />
                <label htmlFor='lws-featured' className='ml-2 text-sm'> This is a featured book </label>
            </div>

            <button disabled={isLoading} type='submit' className='submit' id='lws-submit'>Add Book</button>
        </form>
    );
};

export default Form;