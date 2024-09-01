import React from 'react';

const BlockedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-4">Access Blocked</h1>
        <p className="text-gray-700 text-center mb-6">
          We're sorry, but you don't have permission to access this page. If you believe this is an error, please contact the administrator.
        </p>
        <div className="flex justify-center">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockedPage;