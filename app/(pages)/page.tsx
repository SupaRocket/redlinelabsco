'use client';

// images
import redlineCircle from '@/public/redline-circle.png';

// chakra-ui
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const borderColor = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('black', 'white');
  const buttonColor = useColorModeValue('white', 'black');
  const buttonHoverBg = useColorModeValue('orange.400', 'gray.800');
  const buttonHoverColor = useColorModeValue('black', 'white');
  const iconColor = useColorModeValue('green.300', 'green.400');

  return (
    <Box
      w={'100vw'}
      minH={'95vh'}
      bgSize={'cover'}
      bgPosition={'center'}
      bgRepeat={'no-repeat'}
    >
      <Box p={{ base: '1.5rem' }} pt={'13rem'} textAlign={'center'} m={'auto'}>
        <Heading size={'md'} fontWeight={500}>
          Where unmet needs
        </Heading>
        <Heading size={'md'} fontWeight={500}>
          find their future
        </Heading>
        <Flex
          align={'center'}
          gap={'1rem'}
          justify={'center'}
          textTransform={'uppercase'}
          mb={'2rem'}
        >
          <Heading fontSize={{ base: '3rem', md: '8rem' }}>Redline</Heading>
          <Image
            src={redlineCircle.src}
            alt='Redline logo'
            w={{ base: '3rem', md: '6rem' }}
            h={{ base: '3rem', md: '6rem' }}
          />
          <Heading fontSize={{ base: '3rem', md: '8rem' }}>it.</Heading>
        </Flex>
        <Button
          bg={buttonBg}
          color={buttonColor}
          size={'lg'}
          borderRadius={'full'}
          border={'2px solid'}
          borderColor={borderColor}
          _hover={{
            bg: buttonHoverBg,
            color: buttonHoverColor,
          }}
          leftIcon={
            <Flex color={iconColor}>
              <Sparkles size={24} />
            </Flex>
          }
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
