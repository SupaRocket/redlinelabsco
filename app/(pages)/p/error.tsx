'use client'; // Error boundaries must be Client Components

import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box>
      {/* Hero */}
      <Box pt={{ base: '2rem', md: '2rem' }}>
        <Flex
          align={'center'}
          gap={'0.5rem'}
          justify={'space-between'}
          w={'100%'}
          direction={{ base: 'column', md: 'row' }}
          minH={{ base: '50vh', md: '65vh' }}
        >
          <Box maxW={'550px'} p={'3rem'}>
            <Heading
              fontSize={{ base: '2.5rem' }}
              fontWeight={500}
              mb={{ base: '1rem' }}
              maxW={{ base: '100%' }}
            >
              Something went wrong
            </Heading>
            <Text fontSize={{ base: '1.1rem' }} mb={'1rem'}>
              An error occurred. Please try again later.
            </Text>
            <Link href='/'>
              <Button colorScheme={'orange'}>Go home</Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
