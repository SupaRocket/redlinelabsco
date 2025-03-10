'use client';

// components
import {
  Flex,
  Box,
  Text,
  Stack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import Logo from '../_components/branding/logo';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const color = useColorModeValue('gray.900', 'gray.200');

  return (
    <footer>
      <Box
        background={!pathname.includes('valid-sync') ? 'gray.300' : 'gray.100'}
        borderTop={'1px solid'}
        borderColor={'gray.500'}
      >
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          p={{ base: '4rem 2rem 2rem 2rem', md: '7rem 2rem 5rem 2rem' }}
        >
          <Stack maxW={'25rem'} gap={'1rem'}>
            <Box>
              <Flex
                maxW={'fit-content'}
                minW={'fit-content'}
                color={color}
                align={'center'}
              >
                {!pathname.includes('valid-sync') ? (
                  <Logo shouldLink={false} />
                ) : (
                  <Heading size={'md'}>ValidSync</Heading>
                )}
              </Flex>
            </Box>
            {!pathname.includes('valid-sync') ? (
              <Text>
                We pressure test unmet needs for potential spinout
                opportunities, the rest get redlined.
              </Text>
            ) : (
              <Text>Streamlining vendor compliance for modern businesses.</Text>
            )}
          </Stack>
        </Flex>
        <Flex
          w={'100%'}
          background={
            !pathname.includes('valid-sync') ? 'gray.300' : 'gray.100'
          }
          justify={'center'}
          flexDirection={'column'}
          textAlign={'center'}
          p={'1rem 1rem 0.5rem 1rem'}
          borderTop={'1px solid'}
          borderColor={'gray.500'}
        >
          <Text fontSize={'0.8rem'}>
            © 2024 Redline Labs, All Rights reserved
          </Text>
        </Flex>
      </Box>
    </footer>
  );
}
