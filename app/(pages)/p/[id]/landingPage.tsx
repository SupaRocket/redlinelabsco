'use client';

// hooks
import { useEffect, useState, useRef } from 'react';

// fillout
import { FilloutStandardEmbed } from '@fillout/react';
import '@fillout/react/style.css';
import { Widget } from '@typeform/embed-react';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  FormControl,
  Input,
} from '@chakra-ui/react';
import {
  BadgeDollarSign,
  CheckCircle,
  FastForward,
  FilePenLine,
  ScanEye,
} from 'lucide-react';

interface PageData {
  properties: {
    Headline: { rich_text: { plain_text: string }[] };
    'Bullet Point 1': { rich_text: { plain_text: string }[] };
    'Bullet Point 2': { rich_text: { plain_text: string }[] };
    'Bullet Point 3': { rich_text: { plain_text: string }[] };
    'Bullet Point 4': { rich_text: { plain_text: string }[] };
    'CTA Text': { rich_text: { plain_text: string }[] };
    'CTA Button Text': { rich_text: { plain_text: string }[] };
    form_id: { rich_text: { plain_text: string }[] };
    'Bullet Section Description': { rich_text: { plain_text: string }[] };
    'Bullet Section Title': { rich_text: { plain_text: string }[] };
    'Hero Image': { files: { file: { url: string } }[] };
    'Bullet Section Image': { files: { file: { url: string } }[] };
    include_form: { checkbox: boolean };
  };
}

export default function LandingPage({ id }: { id: string }) {
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [email, setEmail] = useState('');

  const [pageData, setPageData] = useState<PageData | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      const res = await fetch('/api/notion/unmet-needs', {
        method: 'POST',
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      setPageData(data.response);
    };

    !pageData && fetchPage();
  }, [setPageData]);

  const collectEmail = async (email: string) => {
    setIsLoadingForm(true);
    const res = await fetch('/api/notion/collect-email', {
      method: 'POST',
      body: JSON.stringify({ id, email }),
    });
    const data = await res.json();

    if (data.error) {
      console.error(data.error);
      setIsLoadingForm(false);
    }

    if (data.response) {
      setEmail('');
      setIsLoadingForm(false);
      setSubmittedEmail(true);
    }
  };

  return (
    <Box>
      {pageData ? (
        <>
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
                  {pageData.properties['Headline'].rich_text[0].plain_text}
                </Heading>
                <Text fontSize={{ base: '1.1rem' }}>
                  {pageData.properties['CTA Text'].rich_text[0].plain_text}
                </Text>
                <FormControl>
                  {submittedEmail ? (
                    <Flex
                      gap={'1rem'}
                      align={'center'}
                      mt={'1rem'}
                      bg={'green.100'}
                      p={'1rem'}
                      borderRadius={'0.25rem'}
                    >
                      <Box color={'green.500'}>
                        <CheckCircle />
                      </Box>

                      <Text>
                        Thanks! We got your email. We'll be in touch soon.
                      </Text>
                    </Flex>
                  ) : (
                    <Flex gap={'1rem'} align={'center'} mt={'2rem'}>
                      <Input
                        type={'email'}
                        placeholder={'Enter your email'}
                        maxW={'250px'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button
                        colorScheme={'orange'}
                        onClick={() => collectEmail(email)}
                        isLoading={isLoadingForm}
                      >
                        {
                          pageData.properties['CTA Button Text'].rich_text[0]
                            .plain_text
                        }
                      </Button>
                    </Flex>
                  )}
                </FormControl>
              </Box>
              <Box
                bg={`url(${pageData.properties['Hero Image'].files[0].file.url})`}
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

          {/* Form Embed */}
          {pageData.properties.include_form.checkbox && (
            <Box borderBottom={'1px solid'} borderColor={'gray.500'}>
              <Widget
                id={pageData.properties.form_id.rich_text[0].plain_text}
                width={'100%'}
                height={'80vh'}
                hideHeaders
                hideFooter
                disableScroll
              />
            </Box>
          )}

          {/* Bullet Section */}
          <Container maxW={'1500px'} p={{ base: '2rem', md: '6rem' }}>
            <Flex
              w={'100%'}
              justify={'space-between'}
              gap={'2rem'}
              direction={{ base: 'column', md: 'row' }}
            >
              <Box maxW={'450px'}>
                <Heading mb={'1.5rem'} size={'xl'} fontWeight={500}>
                  {
                    pageData.properties['Bullet Section Title'].rich_text[0]
                      .plain_text
                  }
                </Heading>
                <Text fontSize={'1.1rem'}>
                  {
                    pageData.properties['Bullet Section Description']
                      .rich_text[0].plain_text
                  }
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
                    <Text>
                      {
                        pageData.properties['Bullet Point 1'].rich_text[0]
                          .plain_text
                      }
                    </Text>
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
                    <Text>
                      {
                        pageData.properties['Bullet Point 2'].rich_text[0]
                          .plain_text
                      }
                    </Text>
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
                    <Text>
                      {
                        pageData.properties['Bullet Point 3'].rich_text[0]
                          .plain_text
                      }
                    </Text>
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
                    <Text>
                      {
                        pageData.properties['Bullet Point 4'].rich_text[0]
                          .plain_text
                      }
                    </Text>
                  </Flex>
                </Box>
                <FormControl>
                  {submittedEmail ? (
                    <Flex
                      gap={'1rem'}
                      align={'center'}
                      mt={'1rem'}
                      bg={'green.100'}
                      p={'1rem'}
                      borderRadius={'0.25rem'}
                    >
                      <Box color={'green.500'}>
                        <CheckCircle />
                      </Box>

                      <Text>
                        Thanks! We got your email. We'll be in touch soon.
                      </Text>
                    </Flex>
                  ) : (
                    <Flex gap={'1rem'} align={'center'} mt={'2rem'}>
                      <Input
                        type={'email'}
                        placeholder={'Enter your email'}
                        maxW={'250px'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button
                        colorScheme={'orange'}
                        onClick={() => collectEmail(email)}
                        isLoading={isLoadingForm}
                      >
                        {
                          pageData.properties['CTA Button Text'].rich_text[0]
                            .plain_text
                        }
                      </Button>
                    </Flex>
                  )}
                </FormControl>
              </Box>
              <Box
                bg={`url(${pageData.properties['Bullet Section Image'].files[0].file.url})`}
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
        </>
      ) : (
        <Button isLoading />
      )}
    </Box>
  );
}
