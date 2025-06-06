import React from "react";

const Demo = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
            <div className="max-w-5xl w-full bg-white shadow-md rounded-xl p-6 md:flex md:gap-6">

                {/* Book Image */}
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src={image} // update with correct image path
                        alt="Book Cover"
                        className="rounded-xl object-contain h-80"
                    />
                </div>

                {/* Book Info */}
                <div className="md:w-2/3 mt-6 md:mt-0 space-y-3">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p className="text-gray-700">By : <span className="font-medium">{author}</span></p>
                    <p className="text-gray-600 font-semibold border-b pb-2">{category}</p>

                    <div>
                        <p className="font-semibold mb-1">Review :</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {review}
                        </p>
                    </div>

                    <div className="mt-3">
                        <p className="font-semibold">Tag</p>
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mt-4 text-sm">
                        <p><strong>Number of Pages:</strong> 281</p>
                        <p><strong>Publisher:</strong> <span className="font-semibold">J.B Lippincott &amp; Co.</span></p>
                        <p><strong>Year of Publishing:</strong> 1960</p>
                        <p><strong>Rating:</strong> 4.8</p>
                    </div>

                    <div className="mt-5 flex gap-4">
                        <button className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
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

export default Demo;
