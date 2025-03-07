import React from 'react';
import { Shield, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Button, Spinner } from '@chakra-ui/react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  licenseNumber: string;
  title: string;
  isVerifying: boolean;
  verificationResult?: {
    status: 'valid' | 'invalid' | 'warning';
    message: string;
    details: string[];
  };
}

export function VerificationModal({
  isOpen,
  onClose,
  licenseNumber,
  title,
  isVerifying,
  verificationResult,
}: VerificationModalProps) {
  if (!isOpen) return null;

  const getStatusIcon = () => {
    if (isVerifying) return <Spinner size='lg' />;

    switch (verificationResult?.status) {
      case 'valid':
        return <CheckCircle className='h-12 w-12 text-green-600' />;
      case 'invalid':
        return <XCircle className='h-12 w-12 text-red-600' />;
      case 'warning':
        return <AlertTriangle className='h-12 w-12 text-yellow-600' />;
      default:
        return <Shield className='h-12 w-12 text-blue-600' />;
    }
  };

  const getStatusColor = () => {
    switch (verificationResult?.status) {
      case 'valid':
        return 'bg-green-50';
      case 'invalid':
        return 'bg-red-50';
      case 'warning':
        return 'bg-yellow-50';
      default:
        return 'bg-blue-50';
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-xl max-w-lg w-full mx-4'>
        <div className='p-6'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-gray-900'>
              License Verification
            </h3>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Close</span>
              <XCircle className='h-6 w-6' />
            </button>
          </div>

          <div className='text-sm text-gray-500 mb-6'>
            <p>Verifying license for:</p>
            <p className='font-medium text-gray-900 mt-1'>{title}</p>
            <p className='text-gray-600'>License Number: {licenseNumber}</p>
          </div>

          <div className={`rounded-lg p-6 ${getStatusColor()}`}>
            <div className='flex flex-col items-center text-center'>
              {getStatusIcon()}

              {isVerifying ? (
                <div className='mt-4'>
                  <p className='font-medium text-gray-900'>
                    Verifying License...
                  </p>
                  <p className='text-sm text-gray-500 mt-1'>
                    Checking with New Mexico Regulation and Licensing Department
                  </p>
                </div>
              ) : verificationResult ? (
                <div className='mt-4'>
                  <p className='font-medium text-gray-900'>
                    {verificationResult.message}
                  </p>
                  {verificationResult.details && (
                    <ul className='mt-2 text-sm text-gray-600 space-y-1'>
                      {verificationResult.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className='px-6 py-4 bg-gray-50 rounded-b-lg'>
          <div className='flex justify-end gap-3'>
            <Button variant='outline' onClick={onClose} disabled={isVerifying}>
              Close
            </Button>
            {verificationResult?.status === 'valid' && (
              <Button onClick={onClose}>Download Report</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
