'use client';

// chakra-ui
import { Flex, Link, Box, Image, Heading } from '@chakra-ui/react';

// local components
import redlineCircle from '@/public/redline-circle.png';

export default function Logo({ shouldLink = true }) {
  const text = 'Redline Labs';
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
          <LogoContent text={text} />
        </Link>
      ) : (
        <LogoContent text={text} />
      )}
    </>
  );
}

export const LogoContent = ({ text }: { text: string }) => {
  return (
    <Flex
      maxW={'fit-content'}
      minW={'fit-content'}
      borderRadius={'1rem'}
      _hover={{
        bg: 'orange.200',
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
