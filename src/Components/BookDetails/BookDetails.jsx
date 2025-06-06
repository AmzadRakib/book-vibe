import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)

    const { bookId: currentBookId, bookName, author, image } = book

    return (
        <div>
            <h3>Book Id: {id} </h3>
            <img src={image} alt="" />
            <h2 className="text-5xl">{bookName}</h2>
            <h3>{author}</h3>
        </div>
    );
};

export default BookDetails;