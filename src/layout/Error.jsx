import React from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img src="https://img.icons8.com/deco-glyph/80/close-window.png" alt="close-window" />
            <h2 className='text-3xl font-semibold'>Error 404</h2>
            <p className='text-xl regular text-gray-600 py-2'>It looks like something went wrong.</p>
            <p className='text-center'>Don't worry, our team is already on it. Please try refreshing the <br /> page or come back later.</p>
            <Link to={'/'}>
                <button
                    className='border border-gray-500 text-black px-4 py-2 mt-4 cursor-pointer rounded-sm flex items-center
                           transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:border-black group'
                >
                    <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/shadow/24/back.png"
                        alt="back"
                        className='transition-transform duration-300 ease-in-out group-hover:-translate-x-1'
                    />
                    <span className='pl-1'>BACK HOME</span>
                </button>
            </Link>
        </div>
    );
};

export default Error;
