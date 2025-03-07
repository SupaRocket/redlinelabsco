'use client';

import { useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { LoadingState } from './LoadingState';

export default function ExampleVendors() {
  const [verifications, setVerifications] = useState([
    {
      id: '1',
      vendorName: 'Sarah Johnson - Real Estate Broker',
      licenseNumber: 'RE-2024-001',
      type: 'Real Estate',
      status: 'completed',
      result: 'valid',
      verifiedAt: '2024-03-15T10:30:00Z',
      nextVerification: '2024-12-31T10:30:00Z',
      icon: 'building',
      isVerifying: false
    },
    {
      id: '2',
      vendorName: 'Elite Construction Co.',
      licenseNumber: 'GC-2024-102',
      type: 'Construction',
      status: 'pending',
      result: 'pending',
      verifiedAt: '2024-03-10T14:00:00Z',
      nextVerification: '2024-11-30T14:00:00Z',
      icon: 'tool',
      isVerifying: false
    },
    {
      id: '3',
      vendorName: 'Southwest Plumbing Services',
      licenseNumber: 'PL-2024-045',
      type: 'Plumbing',
      status: 'completed',
      result: 'valid',
      verifiedAt: '2024-03-12T15:45:00Z',
      nextVerification: '2024-10-31T15:45:00Z',
      icon: 'tool',
      isVerifying: false
    },
    {
      id: '4',
      vendorName: 'Certified Home Inspections',
      licenseNumber: 'HI-2024-078',
      type: 'Inspection',
      status: 'completed',
      result: 'expired',
      verifiedAt: '2024-02-28T09:15:00Z',
      nextVerification: '2024-03-15T09:15:00Z',
      icon: 'home',
      isVerifying: false
    }
  ]);

  const [isVerifying, setIsVerifying] = useState(false);
  const [currentVerification, setCurrentVerification] = useState(null);
  const [verificationComplete, setVerificationComplete] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const getStatusLabel = (verification) => {
    if (verification.result === 'valid') return 'Valid';
    if (verification.result === 'expired') return 'Expired';
    return 'Pending';
  };

  const getStatusColor = (verification) => {
    if (verification.result === 'valid') return 'text-green-600';
    if (verification.result === 'expired') return 'text-red-600';
    return 'text-yellow-600';
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'building':
        return (
          <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="6" x2="12" y2="6.01"></line>
            <line x1="12" y1="10" x2="12" y2="10.01"></line>
            <line x1="12" y1="14" x2="12" y2="14.01"></line>
            <line x1="12" y1="18" x2="12" y2="18.01"></line>
          </svg>
        );
      case 'tool':
        return (
          <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        );
      case 'home':
        return (
          <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
    }
  };

  const handleVerify = (verification) => {
    setCurrentVerification(verification);
    setIsVerifying(true);
    setVerificationComplete(false);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationComplete(true);
      
      // Update the verification status
      setVerifications(prevVerifications => 
        prevVerifications.map(v => 
          v.id === verification.id 
            ? { ...v, status: 'completed', result: 'valid', verifiedAt: new Date().toISOString() } 
            : v
        )
      );
    }, 3000);
  };

  const closeModal = () => {
    setIsVerifying(false);
    setVerificationComplete(false);
    setCurrentVerification(null);
  };

  return (
    <div className="example-vendors-section">
      <div className="container">
        <div className="example-vendors-content">
          <h2 className="example-vendors-heading text-center mb-2">See ValidSync in Action</h2>
          <p className="example-vendors-description text-center mb-8">
            Experience our verification system with these example vendors
          </p>
          
          <div className="vendors-grid">
            {verifications.map(verification => (
              <div key={verification.id} className="vendor-card">
                <div className="vendor-header">
                  <div className="vendor-icon-container">
                    {getIcon(verification.icon)}
                  </div>
                  <div className="vendor-info">
                    <h3 className="vendor-name">{verification.vendorName}</h3>
                    <p className="vendor-license">License: {verification.licenseNumber}</p>
                  </div>
                  <span className={`vendor-status ${getStatusColor(verification)}`}>
                    {getStatusLabel(verification)}
                  </span>
                </div>
                
                <div className="vendor-details">
                  <div className="vendor-detail">
                    <span className="vendor-detail-label">Last Verified</span>
                    <span className="vendor-detail-value">{formatDate(verification.verifiedAt)}</span>
                  </div>
                  <div className="vendor-detail">
                    <span className="vendor-detail-label">Expiration Date</span>
                    <span className="vendor-detail-value">{formatDate(verification.nextVerification)}</span>
                  </div>
                </div>
                
                <button 
                  className="verify-button"
                  onClick={() => handleVerify(verification)}
                >
                  Verify License
                </button>
              </div>
            ))}
          </div>
          
          {/* Verification overlay modal */}
          {isVerifying && currentVerification && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-backdrop">
              <div className="bg-white rounded-lg p-6 max-w-xs w-full modal-content-animate">
                <div className="mb-4">
                  <p className="text-xs text-gray-500">Verifying license for:</p>
                  <p className="font-medium text-sm">{currentVerification.vendorName}</p>
                  <p className="text-xs text-gray-500">License Number: {currentVerification.licenseNumber}</p>
                </div>
                <LoadingState 
                  message="Checking license status..." 
                  className="py-2"
                />
              </div>
            </div>
          )}
          
          {/* Verification complete modal */}
          {verificationComplete && currentVerification && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-backdrop">
              <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center max-w-xs w-full modal-content-animate">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 mb-2">
                  <svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                
                <h3 className="text-sm font-medium text-center">License Verified</h3>
                <p className="text-xs text-center text-gray-600 mt-1">This license is valid and in good standing</p>
                
                <button
                  className="mt-4 px-4 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 