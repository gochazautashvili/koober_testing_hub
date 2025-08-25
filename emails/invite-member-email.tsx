import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components';

import { env } from '@/helpers/env';
import { email_theme } from '@/constants/themes';

interface InviteMemberEmailProps {
  projectName?: string;
  invitedByName: string;
  invitedByRole: string;
  recipientRole: string;
  recipientEmail: string;
  personalMessage?: string;
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
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Courier+New:wght@400;700&display=swap');
          `}
        </style>
      </Head>
      <Preview>მოწვევა Koober Coders გუნდში</Preview>
      <Body
        style={{
          margin: '0',
          padding: '40px 20px',
          backgroundColor: email_theme.colors.background.primary,
        }}
      >
        <Container
          style={{
            margin: '0 auto',
            maxWidth: '640px',
            overflow: 'hidden',
            borderRadius: email_theme.borders.radius.sm,
            background: `linear-gradient(135deg, ${email_theme.colors.background.secondary}, ${email_theme.colors.background.tertiary})`,
            border: `${email_theme.borders.width.thick} solid ${email_theme.colors.primary}`,
          }}
        >
          {/* Header */}
          <Section
            style={{
              margin: '0',
              padding: email_theme.spacing.xxl,
              textAlign: 'center',
              background: `linear-gradient(135deg, ${email_theme.colors.background.dark}, ${email_theme.colors.background.secondary})`,
              borderBottom: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
            }}
          >
            {/* Logo Circle - Using table for better centering */}
            <table align="center" style={{ margin: `0 auto ${email_theme.spacing.xl}` }}>
              <tr>
                <td
                  align="center"
                  valign="middle"
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: email_theme.borders.radius.full,
                    border: `${email_theme.borders.width.thick} solid ${email_theme.colors.primary}`,
                    backgroundColor: email_theme.colors.background.secondary,
                    textAlign: 'center',
                  }}
                >
                  <Text
                    style={{
                      margin: '0',
                      fontSize: email_theme.typography.sizes.xxl,
                      fontWeight: 'bold',
                      color: email_theme.colors.primary,
                      fontFamily: email_theme.typography.fontFamily,
                      lineHeight: email_theme.typography.lineHeight.tight,
                    }}
                  >
                    KC
                  </Text>
                </td>
              </tr>
            </table>

            <Heading
              style={{
                margin: `0 0 ${email_theme.spacing.sm} 0`,
                fontSize: email_theme.typography.sizes.xl,
                fontWeight: 'bold',
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
              }}
            >
              კეთილი იყოს თქვენი მობრძანება
            </Heading>
            <Text
              style={{
                margin: '0',
                fontSize: email_theme.typography.sizes.sm,
                color: email_theme.colors.primary,
                opacity: email_theme.opacity.medium,
                fontFamily: email_theme.typography.fontFamily,
              }}
            >
              Koober Coders გუნდში მოწვევა
            </Text>
          </Section>

          {/* Content */}
          <Section
            style={{
              margin: '0',
              padding: email_theme.spacing.xxl,
              backgroundColor: email_theme.colors.background.tertiary,
            }}
          >
            <Text
              style={{
                marginBottom: email_theme.spacing.lg,
                fontSize: email_theme.typography.sizes.base,
                lineHeight: email_theme.typography.lineHeight.normal,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.high,
              }}
            >
              გამარჯობა,
            </Text>

            <Text
              style={{
                marginBottom: email_theme.spacing.xl,
                fontSize: email_theme.typography.sizes.base,
                lineHeight: email_theme.typography.lineHeight.normal,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.high,
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{invitedByName}</span> ({translateRole(invitedByRole)}) გიწვევთ
              შეუერთდეთ{' '}
              {projectName ? (
                <>
                  <span style={{ fontWeight: 'bold' }}>{projectName}</span> პროექტის გუნდს
                </>
              ) : (
                <>Koober Coders ტესტირების პლატფორმას</>
              )}
              , როგორც <span style={{ fontWeight: 'bold' }}>{translateRole(recipientRole)}</span>.
            </Text>

            {/* Personal Message */}
            {personalMessage && (
              <div
                style={{
                  margin: `${email_theme.spacing.xl} 0`,
                  padding: email_theme.spacing.lg,
                  borderRadius: email_theme.borders.radius.sm,
                  border: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
                  backgroundColor: email_theme.colors.background.secondary,
                }}
              >
                <Text
                  style={{
                    margin: `0 0 ${email_theme.spacing.sm} 0`,
                    fontSize: email_theme.typography.sizes.xs,
                    color: email_theme.colors.primary,
                    fontFamily: email_theme.typography.fontFamily,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  პირადი შეტყობინება
                </Text>
                <Text
                  style={{
                    margin: '0',
                    fontSize: email_theme.typography.sizes.sm,
                    color: email_theme.colors.primary,
                    fontFamily: email_theme.typography.fontFamily,
                    fontStyle: 'italic',
                    opacity: email_theme.opacity.high,
                  }}
                >
                  {personalMessage}
                </Text>
              </div>
            )}

            {/* Credentials Display */}
            <div
              style={{
                margin: `${email_theme.spacing.xxl} 0`,
                padding: email_theme.spacing.xl,
                borderRadius: email_theme.borders.radius.sm,
                border: `${email_theme.borders.width.thick} solid ${email_theme.colors.warning}`,
                backgroundColor: email_theme.colors.background.dark,
              }}
            >
              <Heading
                as="h3"
                style={{
                  margin: `0 0 ${email_theme.spacing.lg} 0`,
                  fontSize: email_theme.typography.sizes.base,
                  color: email_theme.colors.warning,
                  fontFamily: email_theme.typography.fontFamily,
                  textAlign: 'center',
                }}
              >
                🔐 თქვენი შესვლის მონაცემები
              </Heading>

              <div
                style={{
                  margin: `${email_theme.spacing.lg} 0`,
                  padding: email_theme.spacing.lg,
                  backgroundColor: email_theme.colors.background.secondary,
                  borderRadius: email_theme.borders.radius.sm,
                  border: `${email_theme.borders.width.thin} solid ${email_theme.colors.warning}`,
                }}
              >
                <Text
                  style={{
                    margin: `0 0 ${email_theme.spacing.xs} 0`,
                    fontSize: email_theme.typography.sizes.xs,
                    color: email_theme.colors.warning,
                    fontFamily: email_theme.typography.fontFamily,
                    fontWeight: 'bold',
                  }}
                >
                  ელ-ფოსტა:
                </Text>
                <Text
                  style={{
                    margin: `0 0 ${email_theme.spacing.lg} 0`,
                    fontSize: email_theme.typography.sizes.base,
                    color: email_theme.colors.primary,
                    fontFamily: email_theme.typography.fontFamily,
                    backgroundColor: email_theme.colors.background.dark,
                    padding: email_theme.spacing.sm,
                    borderRadius: '4px',
                  }}
                >
                  {recipientEmail}
                </Text>

                <Text
                  style={{
                    margin: `0 0 ${email_theme.spacing.xs} 0`,
                    fontSize: email_theme.typography.sizes.xs,
                    color: email_theme.colors.warning,
                    fontFamily: email_theme.typography.fontFamily,
                    fontWeight: 'bold',
                  }}
                >
                  დროებითი პაროლი:
                </Text>
                <Text
                  style={{
                    margin: '0',
                    fontSize: email_theme.typography.sizes.base,
                    color: email_theme.colors.primary,
                    fontFamily: email_theme.typography.fontFamily,
                    backgroundColor: email_theme.colors.background.dark,
                    padding: email_theme.spacing.sm,
                    borderRadius: '4px',
                    letterSpacing: '2px',
                  }}
                >
                  {temporaryPassword}
                </Text>
              </div>

              <Text
                style={{
                  margin: `${email_theme.spacing.lg} 0 0 0`,
                  fontSize: email_theme.typography.sizes.xs,
                  color: email_theme.colors.danger,
                  fontFamily: email_theme.typography.fontFamily,
                  textAlign: 'center',
                }}
              >
                ⚠️ გაფრთხილება: პაროლი აუცილებლად შეცვალეთ პირველი შესვლის შემდეგ
              </Text>
            </div>

            {/* Instructions Box */}
            <div
              style={{
                margin: `${email_theme.spacing.xl} 0`,
                padding: email_theme.spacing.lg,
                borderRadius: email_theme.borders.radius.sm,
                border: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
                backgroundColor: email_theme.colors.background.secondary,
              }}
            >
              <Text
                style={{
                  margin: `0 0 ${email_theme.spacing.md} 0`,
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  fontWeight: 'bold',
                }}
              >
                📋 შემდეგი ნაბიჯები:
              </Text>
              <Text
                style={{
                  margin: '0',
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  opacity: email_theme.opacity.high,
                  lineHeight: email_theme.typography.lineHeight.normal,
                }}
              >
                1. დააჭირეთ ქვემოთ მოცემულ ღილაკს
                <br />
                2. შეიყვანეთ თქვენი ელ-ფოსტა და დროებითი პაროლი
                <br />
                3. სისტემა მოგთხოვთ ახალი პაროლის დაყენებას
                <br />
                4. დაყენების შემდეგ მიიღებთ სრულ წვდომას სისტემაზე
              </Text>
            </div>

            {/* Security Info Box */}
            <div
              style={{
                margin: `${email_theme.spacing.xl} 0`,
                padding: email_theme.spacing.lg,
                borderRadius: email_theme.borders.radius.sm,
                border: `${email_theme.borders.width.thin} solid ${email_theme.colors.danger}`,
                backgroundColor: email_theme.colors.background.secondary,
              }}
            >
              <Text
                style={{
                  margin: '0',
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.danger,
                  fontFamily: email_theme.typography.fontFamily,
                  fontWeight: 'bold',
                }}
              >
                🔒 უსაფრთხოების ინფორმაცია
              </Text>
              <Text
                style={{
                  margin: `${email_theme.spacing.sm} 0 0 0`,
                  fontSize: email_theme.typography.sizes.xs,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  opacity: email_theme.opacity.high,
                  lineHeight: email_theme.typography.lineHeight.normal,
                }}
              >
                • მოწვევა ძალაშია მხოლოდ 48 საათის განმავლობაში
                <br />
                • პაროლი უნდა შეიცვალოს პირველივე შესვლისას
                <br />• არ გააზიაროთ ეს მონაცემები სხვებთან
              </Text>
            </div>

            <Hr
              style={{
                border: 'none',
                borderTop: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
                margin: `${email_theme.spacing.xxl} 0`,
              }}
            />

            {/* Login Button */}
            <div style={{ margin: `${email_theme.spacing.xxl} 0`, textAlign: 'center' }}>
              <Button
                href={loginUrl}
                style={{
                  display: 'inline-block',
                  padding: `${email_theme.spacing.md} ${email_theme.spacing.xxl}`,
                  borderRadius: email_theme.borders.radius.sm,
                  border: `${email_theme.borders.width.thick} solid ${email_theme.colors.primary}`,
                  backgroundColor: email_theme.colors.background.dark,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  fontSize: email_theme.typography.sizes.base,
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                სისტემაში შესვლა
              </Button>
            </div>

            <Text
              style={{
                marginTop: email_theme.spacing.xl,
                fontSize: email_theme.typography.sizes.sm,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.high,
                textAlign: 'center',
              }}
            >
              დახმარება გჭირდებათ? მოგვწერეთ:{' '}
              <a
                href="mailto:support@koobercoders.com"
                style={{
                  color: email_theme.colors.primary,
                  textDecoration: 'underline',
                }}
              >
                support@koobercoders.com
              </a>
            </Text>

            <Text
              style={{
                marginTop: email_theme.spacing.sm,
                fontSize: email_theme.typography.sizes.xs,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.minimal,
                textAlign: 'center',
              }}
            >
              თუ ეს მოწვევა მოულოდნელი იყო თქვენთვის, უგულებელყავით ეს შეტყობინება
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              margin: '0',
              padding: `${email_theme.spacing.xl} ${email_theme.spacing.xxl}`,
              textAlign: 'center',
              backgroundColor: email_theme.colors.background.dark,
              borderTop: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
            }}
          >
            <Text
              style={{
                margin: `0 0 ${email_theme.spacing.sm} 0`,
                fontSize: email_theme.typography.sizes.xs,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
              }}
            >
              Koober Coders - Testing Platform
            </Text>
            <Text
              style={{
                margin: `0 0 ${email_theme.spacing.sm} 0`,
                fontSize: email_theme.typography.sizes.xs,
                fontFamily: email_theme.typography.fontFamily,
              }}
            >
              <a
                href="https://koobercoders.com"
                style={{
                  color: email_theme.colors.primary,
                  textDecoration: 'none',
                }}
              >
                koobercoders.com
              </a>
            </Text>
            <Text
              style={{
                margin: `${email_theme.spacing.lg} 0 0 0`,
                fontSize: email_theme.typography.sizes.xs,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.minimal,
              }}
            >
              © 2024 Koober Coders. ყველა უფლება დაცულია.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
