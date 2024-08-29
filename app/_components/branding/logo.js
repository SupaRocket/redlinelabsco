'use client';

// chakra-ui
import {
  Flex,
  Heading,
  Link,
  Box,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

// local components
import redlineCircle from '@/public/redline-circle.png';

export default function Logo({ shouldLink = true }) {
  const text = 'Redline Labs';
  const color = useColorModeValue('orange.700', 'orange.100');

  return (
    <>
      {shouldLink ? (
        <Link
          pt={'0.2rem'}
          mr={'1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}
        >
          <LogoContent color={color} text={text} />
        </Link>
      ) : (
        <LogoContent color={color} text={text} />
      )}
    </>
  );
}

export const LogoContent = ({ color, text, p }) => {
  const bg = useColorModeValue('orange.300', 'orange.900');

  return (
    <Flex
      maxW={'fit-content'}
      minW={'fit-content'}
      borderRadius={'1rem'}
      _hover={{
        bg: bg,
      }}
      align={'center'}
      p={'0.3rem 0.75rem 0.3rem 0.3rem'}
    >
      <Box w={'1.5rem'} h={'1.5rem'} mr={'0.5rem'}>
        <Image src={redlineCircle.src} alt='Redline logo' />
      </Box>
      <Heading fontWeight={700} whiteSpace={'nowrap'} size={'md'}>
        {text}
      </Heading>
    </Flex>
  );
};
