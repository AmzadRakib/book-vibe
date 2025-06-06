import React from "react";
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-200 p-6 md:p-12 rounded-lg">
            {/* Left side: Text content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-7">
                <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-black">
                    Books to freshen up your bookshelf
                </h1>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Get Started
                </button>
            </div>

            {/* Right side: Banner image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
                <img
                    src={BannerImg}
                    alt="Banner"
                    className="max-w-full h-auto rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default Banner;

