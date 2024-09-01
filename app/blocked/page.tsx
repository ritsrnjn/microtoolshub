'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BlockedPage = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      setIsButtonDisabled(false);
    }
  }, [timeLeft]);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-4">Access Blocked</h1>
        <p className="text-gray-700 text-center mb-6">
          We&apos;re sorry, but you don&apos;t have permission to access this page. If you believe this is an error, please contact the administrator.
        </p>
        <div className="flex flex-col items-center">
          <button 
            className={`px-4 py-2 bg-blue-500 text-white rounded transition-colors ${
              isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
            onClick={handleGoHome}
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? `Wait (${timeLeft}s)` : 'Go to Home'}
          </button>
          {isButtonDisabled && (
            <p className="mt-2 text-sm text-gray-500">
              You can go to the home page in {timeLeft} seconds
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockedPage;