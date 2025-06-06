import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-blue-600">404</h1>
                <p className="text-2xl mt-4 font-semibold text-gray-800">Page Not Found</p>
                <p className="mt-2 text-gray-600">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
