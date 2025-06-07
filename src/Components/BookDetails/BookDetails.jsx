import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDB';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)

    const { bookName, author, image, category, tags, review, publisher, yearOfPublishing, rating, totalPages } = book

    const handleMarkAsRead = (id) => {

        addToStoredReadList(id)

    }

    return (
        <div className="  flex flex-col items-center justify-center px-4 py-10">
            <div className="max-w-5xl w-full bg-white shadow-md rounded-xl p-6 md:flex md:gap-6">

                {/* Book Image */}
                <div className="md:w-1/3 flex justify-center bg-slate-200 items-center">
                    <img
                        src={image} // update with correct image path
                        alt="Book Cover"
                        className="rounded-xl object-contain h-96"
                    />
                </div>

                {/* Book Info */}
                <div className="md:w-2/3 mt-6 md:mt-0 space-y-3">
                    <h2 className="text-2xl font-bold text-black">{bookName}</h2>
                    <p className="text-gray-700 border-b pb-2">By : <span className="font-medium">{author}</span></p>
                    <p className="text-gray-600 font-semibold border-b pb-2">{category}</p>

                    <div>
                        <p className="font-bold text-black mb-1">Review :</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {review}
                        </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-b pb-2">
                        <p className="font-bold text-black">Tag</p>
                        <div className="flex gap-5 justify-center items-center mb-3 ">
                            {tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-green-100 text-green-800 font-bold px-2.5 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-28">

                        <div className='text-gray-500 space-y-3'>
                            <p>Number of Page:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>

                        <div className='text-black space-y-3'>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>

                    <div className="mt-5 flex gap-4">
                        <button
                            onClick={() => handleMarkAsRead(bookId)}
                            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Read
                        </button>
                        <button className="px-5 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;