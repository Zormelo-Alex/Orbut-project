import React from 'react'
import { useSelector } from 'react-redux';

const PageNotFound = () => {
  const items = useSelector(state => state.items.items);
  console.log(items)
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-6xl font-extrabold text-gray-800">404</div>
      <div className="text-2xl text-gray-600">Page Not Found</div>
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full focus:outline-none focus:ring focus:ring-indigo-300"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default PageNotFound