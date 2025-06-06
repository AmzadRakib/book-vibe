import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('../../../public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mx-auto'>
                {
                    books.map(book => <Book book={book} key={book.bookId} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;