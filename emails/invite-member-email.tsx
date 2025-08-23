import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

import { env } from '@/helpers/env';
import { CSSProperties } from 'react';

interface InviteMemberEmailProps {
  projectName?: string;
  invitedByName: string;
  invitedByRole: string;
  recipientRole: string;
  recipientEmail: string;
  personalMessage: string;
  temporaryPassword: string;
}

// Role translations
const roleTranslations: Record<string, string> = {
  admin: 'ადმინისტრატორი',
  developer: 'დეველოპერი',
  tester: 'ტესტერი',
  lead: 'ლიდერი',
  member: 'წევრი',
};

function translateRole(role: string): string {
  return roleTranslations[role] || role;
}

export default function InviteMemberEmail({
  invitedByName,
  invitedByRole,
  recipientEmail,
  temporaryPassword,
  recipientRole,
  projectName,
  personalMessage,
}: InviteMemberEmailProps) {
  const loginUrl = `${env.APP_URL}/auth`;

  return (
    <Html>
      <Head />
      <Preview>თქვენ მოგიწვიეს Koober Coders-ის გუნდში</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            {/* Header */}
            <Section style={header}>
              <div style={logoContainer}>
                <Text style={logo}>KC</Text>
              </div>
              <Heading style={headerTitle}>Koober Coders</Heading>
              <Text style={headerSubtitle}>კეთილი იყოს თქვენი მობრძანება გუნდში!</Text>
            </Section>

            {/* Main Content */}
            <Section style={content}>
              <Text style={paragraph}>გამარჯობა,</Text>

              <Text style={paragraph}>
                {projectName ? (
                  <>
                    <strong>{invitedByName}</strong> ({translateRole(invitedByRole)}) გიწვევთ შეუერთდეთ{' '}
                    <strong>{projectName}</strong> პროექტის გუნდს Koober Coders-ში, როგორც{' '}
                    <strong>{translateRole(recipientRole)}</strong>.
                  </>
                ) : (
                  <>
                    <strong>{invitedByName}</strong> ({translateRole(invitedByRole)}) გიწვევთ შეუერთდეთ Koober Coders-ის
                    ტესტირების ჰაბს, როგორც <strong>{translateRole(recipientRole)}</strong>.
                  </>
                )}
              </Text>

              {personalMessage && (
                <Section style={messageBox}>
                  <Text style={messageTitle}>პირადი შეტყობინება</Text>
                  <Text style={messageText}>{personalMessage}</Text>
                </Section>
              )}

              {/* Credentials Section */}
              <Section style={credentialsBox}>
                <Heading as="h3" style={credentialsTitle}>
                  🔐 თქვენი შესვლის მონაცემები
                </Heading>

                <div style={credentialsInner}>
                  <Text style={label}>ელ-ფოსტა:</Text>
                  <Text style={credential}>{recipientEmail}</Text>

                  <Text style={label}>დროებითი პაროლი:</Text>
                  <Text style={credential}>{temporaryPassword}</Text>

                  <Text style={warning}>⚠️ ეს პაროლი აუცილებლად უნდა შეცვალოთ პირველი შესვლის შემდეგ</Text>
                </div>
              </Section>

              {/* Action Buttons */}
              <Section style={buttonContainer}>
                <Row>
                  <Button style={primaryButton} href={loginUrl}>
                    შესვლის გვერდზე გადასვლა
                  </Button>
                </Row>
              </Section>

              {/* Security Notice */}
              <Section style={securityNotice}>
                <Text style={securityText}>
                  <strong>🔒 უსაფრთხოების შეტყობინება:</strong> ეს მოწვევა ძალაშია 48 საათის განმავლობაში. გთხოვთ,
                  დაადასტუროთ თქვენი ელ-ფოსტა და შეცვალოთ პაროლი რაც შეიძლება მალე.
                </Text>
              </Section>

              <Hr style={divider} />

              {/* Help Section */}
              <Text style={helpText}>
                დახმარება გჭირდებათ? დაგვიკავშირდით{' '}
                <Link href="mailto:support@koobercoders.com" style={link}>
                  support@koobercoders.com
                </Link>
              </Text>

              <Text style={footerText}>
                თუ ეს მოწვევა მოულოდნელი იყო თქვენთვის, გთხოვთ, უგულებელყოთ ეს ელ-ფოსტა ან დაუკავშირდით ჩვენს
                მხარდაჭერის გუნდს.
              </Text>
            </Section>

            {/* Footer */}
            <Section style={footer}>
              <Text style={footerCopyright}>© 2024 Koober Coders. ყველა უფლება დაცულია.</Text>
              <Text style={footerLinks}>
                <Link href="https://koobercoders.com" style={footerLink}>
                  koobercoders.com
                </Link>
                {' | '}
                <Link href="https://koobercoders.com/privacy" style={footerLink}>
                  კონფიდენციალურობის პოლიტიკა
                </Link>
                {' | '}
                <Link href="https://koobercoders.com/terms" style={footerLink}>
                  მომსახურების პირობები
                </Link>
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f5f5f5',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const box = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
};

const header = {
  background: 'linear-gradient(to right, #4ade80, #3b82f6)',
  padding: '32px',
  textAlign: 'center' as const,
};

const logoContainer = {
  display: 'inline-block',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  marginBottom: '16px',
};

const logo = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  lineHeight: '80px',
  margin: '0',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '600',
  margin: '0 0 8px 0',
};

const headerSubtitle = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '16px',
  margin: '0',
};

const content = {
  padding: '40px 32px',
};

const paragraph = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '24px',
};

const messageBox = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '32px',
};

const messageTitle = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  marginTop: '0',
  marginBottom: '8px',
};

const messageText = {
  color: '#374151',
  fontSize: '16px',
  fontStyle: 'italic',
  margin: '0',
};

const credentialsBox = {
  background: 'linear-gradient(to bottom right, #fef3c7, #fed7aa)',
  border: '1px solid rgba(251, 191, 36, 0.2)',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '32px',
};

const credentialsTitle = {
  color: '#92400e',
  fontSize: '18px',
  fontWeight: '600',
  marginTop: '0',
  marginBottom: '16px',
};

const credentialsInner = {
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: '8px',
  padding: '16px',
};

const label = {
  color: '#92400e',
  fontSize: '14px',
  fontWeight: '600',
  marginTop: '0',
  marginBottom: '4px',
};

const credential = {
  backgroundColor: '#ffffff',
  border: '1px solid rgba(251, 191, 36, 0.3)',
  borderRadius: '4px',
  padding: '12px',
  fontFamily: 'monospace',
  fontSize: '16px',
  color: '#451a03',
  marginTop: '0',
  marginBottom: '16px',
};

const warning = {
  color: '#92400e',
  fontSize: '12px',
  marginTop: '8px',
  marginBottom: '0',
};

const buttonContainer: CSSProperties = {
  marginBottom: '32px',
};

const primaryButton = {
  backgroundColor: '#22c55e',
  borderRadius: '8px',
  color: '#ffffff',
  display: 'block',
  fontSize: '16px',
  fontWeight: '600',
  textAlign: 'center' as const,
  textDecoration: 'none',
  padding: '12px 24px',
};

const securityNotice = {
  backgroundColor: '#fee2e2',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '24px',
};

const securityText = {
  color: '#991b1b',
  fontSize: '14px',
  margin: '0',
};

const divider = {
  borderColor: '#e5e7eb',
  marginTop: '32px',
  marginBottom: '32px',
};

const helpText = {
  color: '#6b7280',
  fontSize: '14px',
  textAlign: 'center' as const,
  marginBottom: '8px',
};

const footerText = {
  color: '#9ca3af',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginBottom: '0',
};

const link = {
  color: '#3b82f6',
  textDecoration: 'underline',
};

const footer = {
  backgroundColor: '#1f2937',
  padding: '24px 32px',
  textAlign: 'center' as const,
};

const footerCopyright = {
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '12px',
  marginTop: '0',
  marginBottom: '8px',
};

const footerLinks = {
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '12px',
  margin: '0',
};

const footerLink = {
  color: '#4ade80',
  textDecoration: 'underline',
};
