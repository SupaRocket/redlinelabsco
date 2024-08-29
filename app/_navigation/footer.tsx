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

export default function Footer() {
  const bg = useColorModeValue('orange.100', 'gray.700');
  const bgAlt = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.900', 'gray.200');
  const altColor = useColorModeValue('orange.700', 'orange.300');

  return (
    <>
      <footer>
        <Box background={bg}>
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
                  <Box w={'1.5rem'} h={'1.5rem'} mr={'0.5rem'}>
                    <Image src={redlineCircle.src} alt='Redline logo' />
                  </Box>
                  <Heading
                    color={color}
                    fontWeight={700}
                    whiteSpace={'nowrap'}
                    size={'md'}
                  >
                    Redline Labs
                  </Heading>
                </Flex>
              </Box>
              <Text>
                <Highlight
                  query={'redlined'}
                  styles={{
                    textDecoration: 'line-through',
                    color: altColor,
                  }}
                >
                  We pressure test unmet needs for potential spinout
                  opportunities, the rest get redlined.
                </Highlight>
              </Text>
            </Stack>
          </Flex>
          <Flex
            w={'100%'}
            background={bgAlt}
            justify={'center'}
            flexDirection={'column'}
            textAlign={'center'}
            p={'1rem 1rem 0.5rem 1rem'}
          >
            <Text fontSize={'0.8rem'}>
              © 2024 Redline Labs, All Rights reserved
            </Text>
          </Flex>
        </Box>
      </footer>
    </>
  );
}
