'use client';

import { useState } from 'react';
import LicenseVerificationModal from './verification-modal';
import { Building, Hammer, House, Wrench } from 'lucide-react';
import { Box } from '@chakra-ui/react';

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
      isVerifying: false,
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
      icon: 'hammer',
      isVerifying: false,
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
      icon: 'wrench',
      isVerifying: false,
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
      isVerifying: false,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const [isVerifying, setIsVerifying] = useState(false);
  const [currentVerification, setCurrentVerification] =
    useState<Verification | null>(null);
  const [verificationComplete, setVerificationComplete] = useState(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  };

  interface Verification {
    id: string;
    vendorName: string;
    licenseNumber: string;
    type: string;
    status: string;
    result: string;
    verifiedAt: string;
    nextVerification: string;
    icon: string;
    isVerifying: boolean;
  }

  const getStatusLabel = (verification: Verification): string => {
    if (verification.result === 'valid') return 'Valid';
    if (verification.result === 'expired') return 'Expired';
    return 'Pending';
  };

  const getStatusColor = (verification: Verification) => {
    if (verification.result === 'valid') return 'text-green-600';
    if (verification.result === 'expired') return 'text-red-600';
    return 'text-yellow-600';
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'building':
        return <Building size={20} />;
      case 'hammer':
        return <Hammer size={20} />;
      case 'wrench':
        return <Wrench size={20} />;
      case 'home':
        return <House size={20} />;
      default:
        return (
          <svg
            className='w-6 h-6 text-blue-600'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
          </svg>
        );
    }
  };

  const handleVerify = (verification: Verification) => {
    setIsOpen(true);
    setCurrentVerification(verification);
    setIsVerifying(true);
    setVerificationComplete(false);

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationComplete(true);
    }, 3000);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsVerifying(false);
    setVerificationComplete(false);
    setCurrentVerification(null);
  };

  return (
    <Box className='example-vendors-section' mb={12}>
      <div className='container'>
        <div className='example-vendors-content'>
          <h2 className='example-vendors-heading text-center mb-2'>
            See ValidSync in Action
          </h2>
          <p className='example-vendors-description text-center mb-8'>
            Experience our verification system with these example vendors
          </p>

          <div className='vendors-grid'>
            {verifications.map((verification) => (
              <div key={verification.id} className='vendor-card'>
                <div className='vendor-header'>
                  <div className='vendor-icon-container'>
                    {getIcon(verification.icon)}
                  </div>
                  <div className='vendor-info'>
                    <h3 className='vendor-name'>{verification.vendorName}</h3>
                    <p className='vendor-license'>
                      License: {verification.licenseNumber}
                    </p>
                  </div>
                  <span
                    className={`vendor-status ${getStatusColor(verification)}`}
                  >
                    {getStatusLabel(verification)}
                  </span>
                </div>

                <div className='vendor-details'>
                  <div className='vendor-detail'>
                    <span className='vendor-detail-label'>Last Verified</span>
                    <span className='vendor-detail-value'>
                      {formatDate(verification.verifiedAt)}
                    </span>
                  </div>
                  <div className='vendor-detail'>
                    <span className='vendor-detail-label'>Expiration Date</span>
                    <span className='vendor-detail-value'>
                      {formatDate(verification.nextVerification)}
                    </span>
                  </div>
                </div>

                <button
                  className='verify-button'
                  onClick={() => handleVerify(verification)}
                >
                  Verify License
                </button>
              </div>
            ))}
          </div>

          {currentVerification && (
            <LicenseVerificationModal
              isOpen={isOpen}
              onClose={closeModal}
              title={currentVerification?.vendorName || ''}
              licenseNumber={currentVerification?.licenseNumber || ''}
              isVerifying={isVerifying}
              verificatiion={currentVerification}
            />
          )}
        </div>
      </div>
    </Box>
  );
}
