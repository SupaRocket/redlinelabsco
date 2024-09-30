'use client';

import {
  Box,
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export default function Privacy() {
  return (
    <Container py={'10rem'}>
      <Heading>Privacy Policy</Heading>
      <Heading size={'sm'} mb={'1rem'}>
        Last updated: September 30, 2024
      </Heading>
      <Text mb={'1rem'}>
        Welcome to Redline Labs ("we," "us," or "our"). Your privacy is
        important to us. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you visit our website{' '}
        <Link href='https://redlinelabs.co/' isExternal>
          https://redlinelabs.co/
        </Link>{' '}
        (the "Site") and use our services.
      </Text>
      <Text fontWeight={600} mb={'2rem'}>
        Please read this Privacy Policy carefully. If you do not agree with the
        terms of this Privacy Policy, please do not access the Site.
      </Text>

      {/* 1. Information We Collect */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          1. Information We Collect
        </Heading>
        <Heading size={'sm'} mb={'1rem'}>
          Personal Data
        </Heading>
        <Text mb={'0.5rem'}>
          We may collect personally identifiable information that you
          voluntarily provide to us when you:
        </Text>
        <UnorderedList mb={'1rem'}>
          <ListItem>Register for an account.</ListItem>
          <ListItem>Make a purchase.</ListItem>
          <ListItem>Subscribe to a newsletter.</ListItem>
          <ListItem>Submit a contact form.</ListItem>
        </UnorderedList>
        <Text mb={'0.5rem'}>This information may include:</Text>
        <UnorderedList mb={'1rem'}>
          <ListItem>
            <strong>Contact Information</strong>: Name, email address, mailing
            address, phone number.
          </ListItem>
          <ListItem>
            <strong>Payment Information</strong>: Credit card number, billing
            address.
          </ListItem>
          <ListItem>
            <strong>Account Credentials</strong>: Username, password.
          </ListItem>
        </UnorderedList>
        <Heading size={'sm'} mb={'1rem'}>
          Automatically Collected Data
        </Heading>
        <Text mb={'0.5rem'}>
          When you visit the Site, we may automatically collect information
          about your device, including:
        </Text>
        <UnorderedList mb={'1rem'}>
          <ListItem>IP address.</ListItem>
          <ListItem>Browser type.</ListItem>
          <ListItem>Operating system.</ListItem>
          <ListItem>Access times.</ListItem>
          <ListItem>Pages viewed.</ListItem>
        </UnorderedList>
        <Heading size={'sm'} mb={'1rem'}>
          Cookies and Similar Technologies
        </Heading>
        <Text>
          We use cookies and similar tracking technologies to enhance your
          experience on our Site. Cookies are small data files stored on your
          device. You can control the use of cookies at the individual browser
          level.
        </Text>
      </Box>

      {/* 2. How We Use Your Information */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          2. How We Use Your Information
        </Heading>
        <Text mb={'0.5rem'}>
          We may use the information we collect for various purposes, including:
        </Text>
        <UnorderedList mb={'1rem'}>
          <ListItem>
            <strong>To Provide Services</strong>: Process transactions, manage
            accounts, and provide customer support.
          </ListItem>
          <ListItem>
            <strong>Communication</strong>: Send administrative information,
            updates, and marketing materials.
          </ListItem>
          <ListItem>
            <strong>Personalization</strong>: Tailor content and advertisements.
          </ListItem>
          <ListItem>
            <strong>Analytics</strong>: Monitor and analyze usage and trends to
            improve user experience.
          </ListItem>
          <ListItem>
            <strong>Legal Obligations</strong>: Comply with applicable laws and
            regulations.
          </ListItem>
        </UnorderedList>
      </Box>

      {/* 3. Disclosure of Your Information */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          3. Disclosure of Your Information
        </Heading>
        <Text mb={'1rem'}>
          We may share your information in the following circumstances:
        </Text>
        <Box mb={'1rem'}>
          <Heading size={'sm'} mb={'0.5rem'}>
            Service Providers
          </Heading>
          <Text>
            We may share your information with third-party vendors who perform
            services on our behalf, such as payment processing, data analysis,
            email delivery, hosting services, and customer service.
          </Text>
        </Box>
        <Box mb={'1rem'}>
          <Heading size={'sm'} mb={'0.5rem'}>
            Legal Requirements
          </Heading>
          <Text>
            We may disclose your information if required to do so by law or in
            response to valid requests by public authorities.
          </Text>
        </Box>
        <Box mb={'1rem'}>
          <Heading size={'sm'} mb={'0.5rem'}>
            Business Transfers
          </Heading>
          <Text>
            In the event of a merger, acquisition, or sale of assets, your
            personal information may be transferred to a third party.
          </Text>
        </Box>
        <Box>
          <Heading size={'sm'} mb={'0.5rem'}>
            With Your Consent
          </Heading>
          <Text>
            We may disclose your personal information for any other purpose with
            your consent.
          </Text>
        </Box>
      </Box>

      {/* 4. Third-Party Services */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          4. Third-Party Services
        </Heading>
        <Text>
          Our Site may contain links to third-party websites and services. We
          are not responsible for the privacy practices of such third parties.
          We encourage you to read their privacy policies before providing any
          personal information.
        </Text>
      </Box>

      {/* 5. Security of Your Information */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          5. Security of Your Information
        </Heading>
        <Text>
          We implement reasonable security measures to protect your personal
          information. However, no method of transmission over the internet or
          electronic storage is 100% secure.
        </Text>
      </Box>

      {/* 6. Data Retention */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          6. Data Retention
        </Heading>
        <Text>
          We will retain your personal information only for as long as necessary
          to fulfill the purposes outlined in this Privacy Policy, unless a
          longer retention period is required or permitted by law.
        </Text>
      </Box>

      {/* 7. Your Rights and Choices */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          7. Your Rights and Choices
        </Heading>
        <Heading size={'sm'} mb={'1rem'}>
          Access and Correction
        </Heading>
        <Text mb={'1rem'}>
          You may access, correct, or update your personal information by
          logging into your account or contacting us directly.
        </Text>
        <Heading size={'sm'} mb={'1rem'}>
          Opt-Out of Marketing Communications
        </Heading>
        <Text mb={'1rem'}>
          You may opt out of receiving marketing emails from us by following the
          unsubscribe link or instructions provided in any email we send.
        </Text>
        <Heading size={'sm'} mb={'1rem'}>
          Do Not Track Signals
        </Heading>
        <Text>Our Site does not respond to Do Not Track signals.</Text>
      </Box>

      {/* 8. International Data Transfers */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          8. International Data Transfers
        </Heading>
        <Text>
          Your information may be transferred to—and maintained on—computers
          located outside of your state, province, country, or other
          governmental jurisdiction where data protection laws may differ.
        </Text>
      </Box>

      {/* 9. Children's Privacy */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          9. Children's Privacy
        </Heading>
        <Text>
          Our Site is not intended for individuals under the age of 13. We do
          not knowingly collect personal information from children under 13.
        </Text>
      </Box>

      {/* 10. California Privacy Rights */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          10. California Privacy Rights
        </Heading>
        <Text mb={'1rem'}>
          If you are a California resident, you have specific rights regarding
          your personal information under the California Consumer Privacy Act
          (CCPA):
        </Text>
        <UnorderedList mb={'1rem'}>
          <ListItem>
            <strong>Right to Know</strong>: Request disclosure of specific
            pieces of personal information collected.
          </ListItem>
          <ListItem>
            <strong>Right to Delete</strong>: Request deletion of personal
            information.
          </ListItem>
          <ListItem>
            <strong>Right to Opt-Out</strong>: Opt out of the sale of personal
            information.
          </ListItem>
          <ListItem>
            <strong>Non-Discrimination</strong>: Receive equal service and
            price, even if you exercise your privacy rights.
          </ListItem>
        </UnorderedList>
        <Text>
          To exercise these rights, please contact us at{' '}
          <Link href='mailto:info@redlinelabs.co'>info@redlinelabs.co</Link>.
        </Text>
      </Box>

      {/* 11. European Privacy Rights */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          11. European Privacy Rights
        </Heading>
        <Text mb={'1rem'}>
          If you are a resident of the European Economic Area (EEA), you have
          the following rights under the General Data Protection Regulation
          (GDPR):
        </Text>
        <UnorderedList mb={'1rem'}>
          <ListItem>
            <strong>Right of Access</strong>: Obtain confirmation about whether
            your personal data is being processed.
          </ListItem>
          <ListItem>
            <strong>Right to Rectification</strong>: Correct inaccurate personal
            data.
          </ListItem>
          <ListItem>
            <strong>Right to Erasure</strong>: Request deletion of personal data
            under certain conditions.
          </ListItem>
          <ListItem>
            <strong>Right to Restrict Processing</strong>: Limit the processing
            of your personal data.
          </ListItem>
          <ListItem>
            <strong>Right to Data Portability</strong>: Receive your personal
            data in a structured format.
          </ListItem>
          <ListItem>
            <strong>Right to Object</strong>: Object to the processing of your
            personal data.
          </ListItem>
        </UnorderedList>
        <Text>
          To exercise these rights, please contact us at{' '}
          <Link href='mailto:info@redlinelabs.co'>info@redlinelabs.co</Link>.
        </Text>
      </Box>

      {/* 12. Changes to This Privacy Policy */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          12. Changes to This Privacy Policy
        </Heading>
        <Text>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page with an
          updated "Last updated" date.
        </Text>
      </Box>

      {/* 13. Contact Us */}
      <Box mb={'3rem'}>
        <Heading size={'md'} mb={'1rem'}>
          13. Contact Us
        </Heading>
        <Text mb={'1rem'}>
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </Text>
        <Text>
          <strong>Redline Labs</strong>
        </Text>
        <Text>
          Email:{' '}
          <Link href='mailto:info@redlinelabs.co'>info@redlinelabs.co</Link>
        </Text>
      </Box>

      <Text fontWeight={600}>
        By using our Site, you consent to this Privacy Policy.
      </Text>
    </Container>
  );
}
