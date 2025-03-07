'use client';

import React from 'react';

// Simple utility function to combine class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function LoadingSpinner({ size = 'md', className = '', color = '#2563eb' }) {
  // Convert size names to pixel values
  const sizeMap = {
    sm: 24,
    md: 40,
    lg: 64
  };
  
  const pixelSize = typeof size === 'string' ? sizeMap[size] || 40 : size;

  return (
    <div 
      className={cn('flex items-center justify-center', className)} 
      style={{ width: pixelSize, height: pixelSize }}
    >
      <svg
        className="animate-spin"
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 50 50"
      >
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="80, 200"
          strokeDashoffset="0"
        />
      </svg>
    </div>
  );
}

// Also export as default for backward compatibility
export default LoadingSpinner; 