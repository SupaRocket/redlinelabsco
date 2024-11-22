'use client';

// images
import acc from '@/public/acc.png';

// fillout
import { FilloutStandardEmbed } from '@fillout/react';
import '@fillout/react/style.css';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Image,
} from '@chakra-ui/react';
import {
  BadgeDollarSign,
  FastForward,
  FilePenLine,
  ScanEye,
} from 'lucide-react';

// constants
import { landingPages } from '@/app/_lib/contants/landingPages';

export default function AgricarbonConnect({ id }: { id: string }) {
  const landingPage = landingPages[id as keyof typeof landingPages];
  if (typeof landingPage === 'undefined') {
    throw new Error('Landing page not found');
  }
  return (
    <Box>
      {/* Hero */}
      <Box pt={{ base: '5rem', md: '2rem' }}>
        <Flex
          align={'center'}
          gap={'0.5rem'}
          justify={'space-between'}
          w={'100%'}
          direction={{ base: 'column', md: 'row' }}
          minH={{ base: '50vh', md: '65vh' }}
          borderBottom={'1px solid'}
          borderColor={'gray.500'}
        >
          <Box maxW={'600px'} p={{ base: '2rem', md: '5rem' }}>
            <Heading
              fontSize={{ base: '2rem', md: '2.5rem' }}
              fontWeight={500}
              mb={{ base: '1rem' }}
              maxW={{ base: '100%' }}
            >
              {landingPage.headline}
            </Heading>
            <Text fontSize={{ base: '1.1rem' }}>{landingPage.cta.text}</Text>
            <Box pt={'1rem'}>
              <FilloutStandardEmbed
                filloutId={landingPage.emailCollectionId}
                dynamicResize
              />
            </Box>
          </Box>
          <Box
            bg={`url(${landingPage.image})`}
            bgSize={'cover'}
            bgPos={'center top'}
            h={{ base: '50vh', md: '80vh' }}
            w={'100%'}
            borderLeft={'1px solid'}
            borderColor={'gray.500'}
            flexGrow={1}
          />
        </Flex>
      </Box>

      {/* Image */}
      <Box borderBottom={'1px solid'} borderColor={'gray.500'}>
        <Image src={acc.src} alt={'AgriCarbon Connect'} w={'100%'} h={'auto'} />
      </Box>

      {/* Form Embed */}
      {landingPage.hasForm && (
        <Box borderBottom={'1px solid'} borderColor={'gray.500'}>
          <FilloutStandardEmbed filloutId={id} dynamicResize />
        </Box>
      )}

      {/* The Redline Method */}
      <Container maxW={'1500px'} p={{ base: '2rem', md: '6rem' }}>
        <Flex
          w={'100%'}
          justify={'space-between'}
          gap={'2rem'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box maxW={'450px'}>
            <Heading mb={'1.5rem'} size={'xl'} fontWeight={500}>
              {landingPage.bulletSection.title}
            </Heading>
            <Text fontSize={'1.1rem'}>
              {landingPage.bulletSection.description}
            </Text>
            <Box mt={'2rem'} mb={'3rem'}>
              <Flex
                gap={'0.75rem'}
                borderTop={'1px solid'}
                borderColor={'gray.500'}
                align={'center'}
                p={'0.5rem 0'}
              >
                <Box color={'gray.600'}>
                  <BadgeDollarSign size={20} />
                </Box>
                <Text>{landingPage.bulletSection.points[0]}</Text>
              </Flex>
              <Flex
                gap={'0.75rem'}
                borderTop={'1px solid'}
                borderColor={'gray.500'}
                align={'center'}
                p={'0.5rem 0'}
              >
                <Box color={'gray.600'}>
                  <FastForward size={20} />
                </Box>
                <Text>{landingPage.bulletSection.points[1]}</Text>
              </Flex>
              <Flex
                gap={'0.75rem'}
                borderTop={'1px solid'}
                borderColor={'gray.500'}
                align={'center'}
                p={'0.5rem 0'}
              >
                <Box color={'gray.600'}>
                  <ScanEye size={20} />
                </Box>
                <Text>{landingPage.bulletSection.points[2]}</Text>
              </Flex>
              <Flex
                gap={'0.75rem'}
                borderTop={'1px solid'}
                borderBottom={'1px solid'}
                borderColor={'gray.500'}
                align={'center'}
                p={'0.5rem 0'}
              >
                <Box color={'gray.600'}>
                  <FilePenLine size={20} />
                </Box>
                <Text>{landingPage.bulletSection.points[3]}</Text>
              </Flex>
            </Box>
            <Box>
              <FilloutStandardEmbed
                filloutId={landingPage.emailCollectionId}
                dynamicResize
              />
            </Box>
          </Box>
          <Box
            bg={`url(${landingPage.bulletSection.image})`}
            bgSize={'cover'}
            bgPos={'center'}
            w={{ base: '100%', md: '45vw' }}
            maxW={{ base: '100%', md: '680px' }}
            h={{ base: '90vw', md: '45vw' }}
            maxH={{ base: '90vw', md: '680px' }}
            borderRadius={'0.25rem'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
