'use client';

import ExampleVendors from './ExampleVendors';
import GetStartedButton from './GetStartedButton';
import './vendors-grid.css';
import './animations.css';
import { Box, Container, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box pt={{ base: '3rem', md: '5rem' }}>
      <Box className='hero' p={'7rem 1rem'} mb={'1rem'}>
        <Container maxW={'container.xl'} p={0}>
          {/* Main Content Grid */}
          <Flex
            align={'center'}
            justify={'space-between'}
            gap={'2rem'}
            direction={{ base: 'column', md: 'row' }}
          >
            {/* Left Column - Text Content */}
            <div className='text-content'>
              <h1 className='heading'>Streamline Your Vendor Compliance</h1>
              <p className='description'>
                Instantly verify and manage licenses with ValidSync. Automate
                your vendor verification process and stay compliant with
                real-time updates.
              </p>

              {/* CTA Section */}
              <Flex
                align={'center'}
                gap={'1rem'}
                mt={'2rem'}
                justify={{ base: 'center', md: 'flex-start' }}
              >
                <GetStartedButton />
                {/* <Button
                  variant={'outline'}
                  leftIcon={<Search size={14} />}
                  cursor={'default'}
                >
                  Search Licenses
                </Button> */}
              </Flex>

              {/* Profile Options */}
              {/* <div className='role-section'>
                <h3 className='role-heading'>Choose Your Role</h3>

                <RealEstateCard />

                <LicensedContractorCard />
              </div> */}
            </div>

            {/* Right Column - Feature Grid */}
            <div className='features-grid'>
              <div className='feature-card'>
                <svg
                  className='feature-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
                <h3 className='feature-title'>Automated Verification</h3>
                <p className='feature-description'>
                  Instantly verify licenses across multiple databases
                </p>
              </div>
              <div className='feature-card'>
                <svg
                  className='feature-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                  <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
                <h3 className='feature-title'>Real-time Updates</h3>
                <p className='feature-description'>
                  Stay informed about license status changes
                </p>
              </div>
              <div className='feature-card'>
                <svg
                  className='feature-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 6 12 12 16 14'></polyline>
                </svg>
                <h3 className='feature-title'>Expiration Alerts</h3>
                <p className='feature-description'>
                  Never miss a license renewal deadline
                </p>
              </div>
              <div className='feature-card'>
                <svg
                  className='feature-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                  <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                  <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
                </svg>
                <h3 className='feature-title'>Vendor Directory</h3>
                <p className='feature-description'>
                  Access verified vendor profiles instantly
                </p>
              </div>
            </div>
          </Flex>
        </Container>
      </Box>

      {/* Example Vendors Section */}
      <ExampleVendors />

      {/* About Section */}
      <Box
        className='about-section'
        borderTop={'1px solid'}
        borderColor={'gray.500'}
      >
        <div className='container'>
          <div className='about-content'>
            <h2 className='about-heading'>About ValidSync</h2>
            <p className='about-description'>
              ValidSync is a compliance tool that helps real estate
              professionals and businesses verify contractors' licenses,
              insurance, and bonds. It ensures compliance, reduces liability
              risks, and automates tracking, so you can manage vendors
              confidently and focus on your core operations.
            </p>
            <div className='about-features'>
              <div className='about-feature'>
                <svg
                  className='about-feature-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                  <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
                <div>
                  <h3 className='about-feature-title'>Ensure Compliance</h3>
                  <p className='about-feature-description'>
                    Verify licenses, insurance, and bonds in one place
                  </p>
                </div>
              </div>
              <div className='about-feature'>
                <svg
                  className='about-feature-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
                <div>
                  <h3 className='about-feature-title'>Reduce Liability</h3>
                  <p className='about-feature-description'>
                    Minimize risks by working with verified contractors
                  </p>
                </div>
              </div>
              <div className='about-feature'>
                <svg
                  className='about-feature-icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>
                  <line x1='8' y1='21' x2='16' y2='21'></line>
                  <line x1='12' y1='17' x2='12' y2='21'></line>
                </svg>
                <div>
                  <h3 className='about-feature-title'>Automate Tracking</h3>
                  <p className='about-feature-description'>
                    Save time with automated verification and monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
