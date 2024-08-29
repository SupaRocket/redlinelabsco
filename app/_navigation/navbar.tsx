'use client';

// hooks
import { useEffect, useState } from 'react';
import { useIsMobile } from '../_lib/hooks/useWindowSize';

// chakra-ui
import { Flex, Box, useColorModeValue, Button } from '@chakra-ui/react';

// local components
import Logo from '../_components/branding/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import ColorModeToggle from '@/app/_components/interactive/colorModeToggle';

export default function Navbar() {
  const isMobile = useIsMobile();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const bg = useColorModeValue('transparent', 'transparent');
  const borderColor = useColorModeValue('orange.700', 'orange.900');

  return (
    <>
      <Box
        zIndex={1000}
        position={'fixed'}
        h={'fit-content'}
        top={'0'}
        w={'100%'}
      >
        <Flex
          zIndex={1000}
          background={bg}
          backdropFilter={'blur(5px) saturate(100%)'}
          w={'100%'}
          p={'1rem'}
        >
          <Flex w={'100%'} align={'center'} justify={{ base: 'space-between' }}>
            <Logo />
            {!isClient ? (
              <Button isLoading={true}></Button>
            ) : isMobile ? (
              <>
                {/* <MobileNav /> */}
                <ColorModeToggle />
              </>
            ) : (
              <>
                {/* <DesktopNav /> */}
                <ColorModeToggle />
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
