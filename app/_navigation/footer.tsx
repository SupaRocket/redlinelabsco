'use client';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Highlight,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import redlineCircle from '@/public/redline-circle.png';
import Logo from '../_components/branding/logo';

export default function Footer() {
  const bg = useColorModeValue('orange.100', 'gray.700');
  const bgAlt = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.900', 'gray.200');
  const altColor = useColorModeValue('orange.700', 'orange.300');

  return (
      <footer>
        <Box
          background={'gray.300'}
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
                  <Logo shouldLink={false} />
                </Flex>
              </Box>
              <Text>
                We pressure test unmet needs for potential spinout
                opportunities, the rest get redlined.
              </Text>
            </Stack>
          </Flex>
          <Flex
            w={'100%'}
            background={'gray.300'}
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
