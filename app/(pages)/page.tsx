'use client';

// images
import workplace from '@/public/workplace.webp';
import rocket from '@/public/rocket.webp';

// recoil
import { useRecoilState } from 'recoil';
import { isFormOpenState } from '../_state/atoms';

// fillout
import { FilloutPopupEmbed } from '@fillout/react';
import '@fillout/react/style.css';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  Button,
  VStack,
  Container,
} from '@chakra-ui/react';
import {
  BadgeDollarSign,
  FastForward,
  FilePenLine,
  ScanEye,
} from 'lucide-react';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useRecoilState(isFormOpenState);
  return (
    <Box>
      {isFormOpen && (
        <FilloutPopupEmbed
          filloutId='dfM5q7usNHus'
          onClose={() => setIsFormOpen(false)}
        />
      )}
      {/* Hero */}
      <Box
        pt={{ base: '8rem', md: '16rem' }}
        minH={{ base: '50vh', md: '65vh' }}
        borderBottom={'1px solid'}
        borderColor={'gray.500'}
        bg={'gray.50'}
      >
        <Container maxW={'1500px'}>
          <Flex
            align={'flex-end'}
            gap={'0.5rem'}
            justify={'space-between'}
            w={'100%'}
            direction={{ base: 'column', md: 'row' }}
          >
            <Heading
              fontSize={{ base: '3rem', md: '5rem' }}
              fontWeight={500}
              lineHeight={1}
              mb={{ base: '1rem', md: '0' }}
              maxW={{ base: '100%', md: '1000px' }}
            >
              <Highlight
                query={'High-Growth Startups'}
                styles={{ color: 'orange.500', whiteSpace: 'normal' }}
              >
                Turning Unmet Needs into High-Growth Startups
              </Highlight>
            </Heading>
            <Box>
              <Text
                fontSize={{ base: '1.1rem', md: '1.4rem' }}
                maxW={{ base: '100%', md: '300px' }}
                minW={{ base: '250px' }}
              >
                We pressure-test the best ideas and spin them out as thriving
                ventures.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* The Redline Method */}
      <Container maxW={'1500px'}>
        <Flex
          w={'100%'}
          justify={'space-between'}
          gap={'2rem'}
          pt={{ base: '3rem', md: '6rem' }}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Box maxW={'450px'}>
            <Heading mb={'1.5rem'} size={'3xl'} fontWeight={500}>
              The Redline Method
            </Heading>
            <Text fontSize={'1.1rem'}>
              At Redline, we identify and validate opportunities in real-time,
              transforming unmet needs into high-potential startups. Our process
              ensures only the strongest ideas make it to market, while the rest
              are redlined.
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
                <Text>Market-Driven Validation</Text>
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
                <Text>Rapid Iteration</Text>
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
                <Text>Focused Resources</Text>
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
                <Text>Redline & Refine</Text>
              </Flex>
            </Box>
            <Button colorScheme={'orange'} onClick={() => setIsFormOpen(true)}>
              Partner with us
            </Button>
          </Box>
          <Box
            bg={`url(${rocket.src})`}
            bgSize={'cover'}
            bgPos={'center'}
            w={{ base: '100%', md: '45vw' }}
            maxW={{ base: '100%', md: '680px' }}
            h={{ base: '90vw', md: '45vw' }}
            maxH={{ base: '90vw', md: '680px' }}
            borderRadius={'0.5rem'}
          />
        </Flex>
      </Container>

      {/* Studio Model */}
      <Container maxW={'1500px'}>
        <Box
          p={{ base: '2rem 0', md: '3rem 0 0 0' }}
          mt={{ base: '2rem', md: 0 }}
        >
          <Flex
            borderTop={'1px solid'}
            borderColor={'gray.500'}
            justify={'space-between'}
            align={'center'}
            p={{ base: '2rem 0', md: '3rem 0' }}
            gap={'2rem'}
          >
            <Flex
              w={'100%'}
              justify={'space-between'}
              direction={{ base: 'column', md: 'row' }}
            >
              <Heading
                fontWeight={500}
                size={'lg'}
                maxW={{ base: '100%', md: '200px' }}
                mb={{ base: '1rem', md: '0' }}
              >
                A Proven Studio Model
              </Heading>
              <Text maxW={'400px'}>
                Leveraging a repeatable, data-driven approach, we streamline
                startup creation. By rigorously testing ideas, we fast-track
                development and focus resources on what works.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        bg={'gray.100'}
        borderTop={'1px solid'}
        borderColor={'gray.500'}
        bgSize={'cover'}
        bgPos={'center'}
        p={{ base: '3rem 0', md: '5rem 3rem' }}
      >
        <Container maxW={'1500px'}>
          <Flex
            justify={'space-between'}
            direction={{ base: 'column-reverse', md: 'row' }}
          >
            <VStack
              maxW={'450px'}
              align={'flex-start'}
              justify={'space-between'}
            >
              <Box></Box>
              <Box>
                <Heading size={'3xl'} fontWeight={500} mb={'1rem'}>
                  Partner With Redline
                </Heading>
                <Text mb={'3rem'}>
                  We&apos;re always on the lookout for new opportunities. If you
                  have an idea you&apos;d like to explore, we&apos;d love to
                  hear from
                </Text>
                <Button
                  colorScheme={'orange'}
                  onClick={() => setIsFormOpen(true)}
                >
                  Get in touch
                </Button>
              </Box>
            </VStack>
            <Box
              bg={`url(${workplace.src})`}
              bgSize={'cover'}
              bgPos={'center'}
              w={{ base: '100%', md: '35vw' }}
              maxW={{ base: '100%', md: '500px' }}
              h={{ base: '80vw', md: '35vw' }}
              maxH={{ base: '80vw', md: '500px' }}
              borderRadius={'0.5rem'}
              mb={{ base: '1rem', md: 0 }}
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
