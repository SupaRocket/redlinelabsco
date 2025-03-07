'use client';

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg 
              className="w-8 h-8 text-blue-600 mr-2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h1 className="text-xl font-bold text-gray-900">ValidSync</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
          </nav>
          
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 