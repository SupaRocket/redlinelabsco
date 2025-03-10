'use client';

import { useState, useEffect, createElement } from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from '@chakra-ui/react';

import { CircleCheck, TriangleAlert, CircleX } from 'lucide-react';

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

interface LicenseVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  licenseNumber: string;
  isVerifying: boolean;
  verificatiion: Verification;
}

const LicenseVerificationModal: React.FC<LicenseVerificationModalProps> = ({
  isOpen,
  onClose,
  title,
  licenseNumber,
  isVerifying,
  verificatiion,
}) => {
  if (!isOpen) {
    return null;
  }

  console.log('verificatiion', verificatiion);
  const [verificationDetails, setVerificationDetails] = useState<{
    title: string;
    message: string;
    icon: React.ComponentType | null;
    color: string;
  }>({
    title: '',
    message: '',
    icon: null,
    color: '',
  });

  useEffect(() => {
    verificatiion.result === 'valid'
      ? setVerificationDetails({
          title: 'License Verified Successfully',
          message: 'License is active and in good standing.',
          icon: CircleCheck,
          color: 'green.500',
        })
      : verificatiion.result === 'pending'
      ? setVerificationDetails({
          title: 'License Requires Attention',
          message: 'License renewal due within 30 days.',
          icon: TriangleAlert,
          color: 'yellow.500',
        })
      : setVerificationDetails({
          title: 'License Has Expired',
          message: 'Renewal application required.',
          icon: CircleX,
          color: 'red.500',
        });
  }, [verificatiion.result]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'sm'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> License Verification</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box textAlign={'left'} fontSize={'sm'}>
            <Text fontSize='sm' color='gray.500'>
              Verifying license for:
            </Text>
            <Text fontWeight='medium' color='gray.900' mt={1}>
              {title}
            </Text>
            <Text color='gray.600'>License Number: {licenseNumber}</Text>
          </Box>

          <Box
            rounded='lg'
            p={6}
            bg={
              isVerifying
                ? 'gray.100'
                : verificatiion.result === 'valid'
                ? 'green.50'
                : 'red.50'
            }
            mt={4}
          >
            <VStack spacing={4} textAlign='center'>
              {isVerifying ? (
                <VStack>
                  <Spinner size='sm' color='gray.500' />
                  <Text fontWeight='medium' color='gray.900'>
                    Verifying License...
                  </Text>
                  <Text fontSize='sm' color='gray.500' mt={1}>
                    Checking with New Mexico Regulation and Licensing Department
                  </Text>
                </VStack>
              ) : verificatiion.result ? (
                <VStack>
                  {verificationDetails.icon && (
                    <Box boxSize={'35px'} color={verificationDetails.color}>
                      {verificationDetails.icon &&
                        createElement(verificationDetails.icon)}
                    </Box>
                  )}
                  <Heading size='sm' mt={2}>
                    {verificationDetails.title}
                  </Heading>
                  <Text fontSize={'0.9rem'}>{verificationDetails.message}</Text>
                </VStack>
              ) : null}
            </VStack>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Flex justify='end' gap={3}>
            <Button
              variant='outline'
              onClick={onClose}
              isDisabled={isVerifying}
            >
              Close
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LicenseVerificationModal;
