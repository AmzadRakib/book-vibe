import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, tags, author, bookName, category, rating } = book
    return (
        <Link to={`/books/${bookId}`}>
            <div className="max-w-sm rounded-xl border p-4 shadow-md hover:shadow-lg transition duration-300 ">
                <div className="flex justify-center mb-4 bg-slate-400 rounded-lg py-8">
                    <img
                        src={image}
                        alt="Book Cover"
                        className="h-48 object-contain"
                    />
                </div>

                <div className="flex gap-5 justify-center mb-3 ">
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-green-100 text-green-600 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-lg font-bold mb-1">{bookName}</h3>
                <p className="text-gray-600 text-sm mb-2">By : {author}</p>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">{category}</span>
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">{rating}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-500 fill-current"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.175 3.608a1 1 0 00.95.69h3.801c.969 0 1.371 1.24.588 1.81l-3.075 2.236a1 1 0 00-.364 1.118l1.175 3.609c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.074 2.236c-.783.57-1.838-.197-1.539-1.118l1.176-3.609a1 1 0 00-.364-1.118L3.124 9.035c-.783-.57-.38-1.81.588-1.81h3.801a1 1 0 00.95-.69l1.175-3.608z" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
