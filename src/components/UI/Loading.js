import React from 'react';
import { BallTriangle } from 'react-loading-icons';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <BallTriangle stroke='#5850EC' fill='#5850EC' />
        </div>
    );
};

export default Loading;