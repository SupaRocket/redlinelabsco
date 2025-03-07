'use client';
import React from 'react';

// hooks
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '../_lib/hooks/useWindowSize';

// chakra-ui
import { Flex, Box, Button, Heading } from '@chakra-ui/react';

// local components
import Logo from '../_components/branding/logo';

export default function Navbar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  console.log('pathname', pathname);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Box
        zIndex={1000}
        position={'fixed'}
        h={'fit-content'}
        top={'0'}
        w={'100%'}
        borderBottom={'1px solid'}
        borderColor={'gray.500'}
      >
        <Flex zIndex={1000} background={'white'} w={'100%'} p={'1rem'}>
          <Flex w={'100%'} align={'center'} justify={{ base: 'space-between' }}>
            {!pathname.includes('valid-sync') ? (
              <Logo />
            ) : (
              <Heading size={'md'}>ValidSync</Heading>
            )}
            {!isClient ? (
              <Button isLoading={true}></Button>
            ) : isMobile ? (
              <>{/* <MobileNav /> */}</>
            ) : (
              <>{/* <DesktopNav /> */}</>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
