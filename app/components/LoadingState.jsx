'use client';

import React from 'react';

export function LoadingState({ message = 'Loading...', className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {/* Loader2 from lucide-react - using SVG directly since we don't know if you have lucide installed */}
      <svg 
        className="h-8 w-8 animate-spin text-blue-600"
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      <p className="mt-2 text-sm text-gray-600">{message}</p>
    </div>
  );
}

// Also export as default for backward compatibility
export default LoadingState; 