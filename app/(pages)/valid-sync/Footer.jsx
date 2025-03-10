'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3">
              <svg 
                className="w-8 h-8 text-blue-600" 
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
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">ValidSync</h2>
              <p className="text-sm text-gray-600">Streamline compliance, build trust.</p>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} ValidSync, All Rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
} 