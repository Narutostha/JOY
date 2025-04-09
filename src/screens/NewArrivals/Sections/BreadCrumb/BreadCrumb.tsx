import React from "react";
import { Link } from "react-router-dom";

export const BreadcrumbSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
      <nav className="flex items-center text-sm font-medium text-gray-500">
        <Link to="/" className="flex items-center hover:text-indigo-600 transition-colors duration-300">
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L12 2L21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Home
        </Link>
        <span className="mx-2 text-indigo-400">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <Link to="/shop" className="hover:text-indigo-600 transition-colors duration-300">Shop</Link>
        <span className="mx-2 text-indigo-400">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="text-indigo-700 font-semibold">New Arrivals</span>
      </nav>
    </div>
  );
};

export default BreadcrumbSection;