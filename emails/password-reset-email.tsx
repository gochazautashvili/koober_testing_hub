import { Html, Head, Body, Container, Section, Heading, Text, Hr, Button } from '@react-email/components';

import { email_theme } from '@/constants/themes';

interface IProps {
  userName: string;
  userEmail: string;
  resetLink: string;
  expirationTime: string;
}

export default function PasswordResetEmail({ userName, userEmail, resetLink, expirationTime }: IProps) {
  const organizationUrl = 'https://koobercoders.com';
  const organizationName = 'Koober Coders';

  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Courier+New:wght@400;700&display=swap');
          `}
        </style>
      </Head>
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
              პაროლის აღდგენა
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
              [უსაფრთხოების შეტყობინება]
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
            {/* Terminal Header */}
            <div
              style={{
                marginBottom: email_theme.spacing.xl,
                borderRadius: `${email_theme.borders.radius.sm} ${email_theme.borders.radius.sm} 0 0`,
                border: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
                backgroundColor: email_theme.colors.background.dark,
                padding: email_theme.spacing.lg,
              }}
            >
              <table>
                <tr>
                  <td style={{ paddingRight: email_theme.spacing.sm }}>
                    <div
                      style={{
                        display: 'inline-block',
                        width: email_theme.spacing.md,
                        height: email_theme.spacing.md,
                        borderRadius: email_theme.borders.radius.full,
                        backgroundColor: email_theme.colors.warning,
                      }}
                    ></div>
                  </td>
                  <td style={{ paddingRight: email_theme.spacing.sm }}>
                    <div
                      style={{
                        display: 'inline-block',
                        width: email_theme.spacing.md,
                        height: email_theme.spacing.md,
                        borderRadius: email_theme.borders.radius.full,
                        backgroundColor: email_theme.colors.warning,
                      }}
                    ></div>
                  </td>
                  <td style={{ paddingRight: email_theme.spacing.lg }}>
                    <div
                      style={{
                        display: 'inline-block',
                        width: email_theme.spacing.md,
                        height: email_theme.spacing.md,
                        borderRadius: email_theme.borders.radius.full,
                        backgroundColor: email_theme.colors.success,
                      }}
                    ></div>
                  </td>
                  <td>
                    <Text
                      style={{
                        margin: '0',
                        fontSize: email_theme.typography.sizes.sm,
                        color: email_theme.colors.primary,
                        fontFamily: email_theme.typography.fontFamily,
                      }}
                    >
                      უსაფრთხოების შეტყობინება
                    </Text>
                  </td>
                </tr>
              </table>

              <Text
                style={{
                  margin: `${email_theme.spacing.sm} 0 ${email_theme.spacing.xs} 0`,
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                }}
              >
                &gt; პაროლის აღდგენის მოთხოვნა...
              </Text>
              <Text
                style={{
                  margin: `${email_theme.spacing.xs} 0`,
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  opacity: email_theme.opacity.high,
                }}
              >
                &gt; სტატუსი: [დამოწმებული]
              </Text>
              <Text
                style={{
                  margin: `${email_theme.spacing.xs} 0 0 0`,
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  opacity: email_theme.opacity.high,
                }}
              >
                &gt; მიმღები: {userName}
              </Text>
            </div>

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
              გამარჯობა, <span style={{ fontWeight: 'bold' }}>{userName}</span>!
            </Text>

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
              მოგვევლინა მოთხოვნა თქვენი ანგარიშის პაროლის აღსადგენად{' '}
              <span style={{ fontWeight: 'bold' }}>{organizationName}</span>-ის სისტემაში.
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
              პაროლის შესაცვლელად გამოიყენეთ ქვემოთ მოცემული ლინკი.
            </Text>

            {/* Reset Link Section */}
            <div
              style={{
                margin: `${email_theme.spacing.xxl} 0`,
                padding: email_theme.spacing.xl,
                borderRadius: email_theme.borders.radius.sm,
                border: `${email_theme.borders.width.thick} solid ${email_theme.colors.primary}`,
                backgroundColor: email_theme.colors.background.dark,
                textAlign: 'center',
              }}
            >
              <Text
                style={{
                  margin: `0 0 ${email_theme.spacing.lg} 0`,
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                }}
              >
                [აღდგენის ლინკი]
              </Text>

              <Button
                href={resetLink}
                style={{
                  display: 'inline-block',
                  padding: `${email_theme.spacing.lg} ${email_theme.spacing.xxl}`,
                  borderRadius: email_theme.borders.radius.sm,
                  border: `${email_theme.borders.width.thick} solid ${email_theme.colors.primary}`,
                  backgroundColor: email_theme.colors.background.secondary,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  fontSize: email_theme.typography.sizes.base,
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  margin: `${email_theme.spacing.lg} 0`,
                }}
              >
                [პაროლის შეცვლა]
              </Button>

              <Text
                style={{
                  margin: `${email_theme.spacing.lg} 0 0 0`,
                  fontSize: email_theme.typography.sizes.xs,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  opacity: email_theme.opacity.low,
                }}
              >
                [ლინკი ვალიდურია: {expirationTime}]
              </Text>
            </div>

            {/* Account Details */}
            <div
              style={{
                margin: `${email_theme.spacing.xxl} 0`,
                padding: email_theme.spacing.xl,
                borderRadius: email_theme.borders.radius.sm,
                border: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
                backgroundColor: email_theme.colors.background.secondary,
              }}
            >
              <Text
                style={{
                  margin: `0 0 ${email_theme.spacing.lg} 0`,
                  fontSize: email_theme.typography.sizes.sm,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                }}
              >
                [ანგარიშის დეტალები]
              </Text>

              <table style={{ width: '100%', fontFamily: email_theme.typography.fontFamily }}>
                <tr>
                  <td
                    style={{
                      width: '140px',
                      paddingBottom: email_theme.spacing.md,
                      fontSize: email_theme.typography.sizes.sm,
                      fontWeight: 'bold',
                      color: email_theme.colors.primary,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    მომხმარებელი:
                  </td>
                  <td
                    style={{
                      paddingBottom: email_theme.spacing.md,
                      fontSize: email_theme.typography.sizes.sm,
                      color: email_theme.colors.primary,
                      opacity: email_theme.opacity.high,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    {userName}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: '140px',
                      paddingBottom: email_theme.spacing.md,
                      fontSize: email_theme.typography.sizes.sm,
                      fontWeight: 'bold',
                      color: email_theme.colors.primary,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    ელ-ფოსტა:
                  </td>
                  <td
                    style={{
                      paddingBottom: email_theme.spacing.md,
                      fontSize: email_theme.typography.sizes.sm,
                      color: email_theme.colors.primary,
                      opacity: email_theme.opacity.high,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    {userEmail}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: '140px',
                      fontSize: email_theme.typography.sizes.sm,
                      fontWeight: 'bold',
                      color: email_theme.colors.primary,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    ვალიდურობა:
                  </td>
                  <td
                    style={{
                      fontSize: email_theme.typography.sizes.sm,
                      color: email_theme.colors.warning,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    {expirationTime}
                  </td>
                </tr>
              </table>
            </div>

            <Hr
              style={{
                border: 'none',
                borderTop: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
                margin: `${email_theme.spacing.xxl} 0`,
              }}
            />

            <Text
              style={{
                marginBottom: email_theme.spacing.lg,
                fontSize: email_theme.typography.sizes.sm,
                lineHeight: email_theme.typography.lineHeight.normal,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.high,
              }}
            >
              <span style={{ fontWeight: 'bold', color: email_theme.colors.warning }}>უსაფრთხოების შენიშვნა:</span> თუ
              თქვენ არ მოითხოვეთ პაროლის აღდგენა, არ გამოიყენოთ ლინკი და დაუკავშირდით ადმინისტრატორს.
            </Text>

            <Text
              style={{
                marginBottom: email_theme.spacing.xl,
                fontSize: email_theme.typography.sizes.sm,
                lineHeight: email_theme.typography.lineHeight.normal,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.high,
              }}
            >
              პაროლის წარმატებით შეცვლის შემდეგ, ეს ლინკი ავტომატურად გაუქმდება.
            </Text>

            <Text
              style={{
                marginTop: email_theme.spacing.xxl,
                fontSize: email_theme.typography.sizes.xs,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.veryLow,
              }}
            >
              ეს არის ავტომატური შეტყობინება. გთხოვთ არ უპასუხოთ ამ ელ-ფოსტას.
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
              [გაგზავნილია: {organizationName}]
            </Text>
            {organizationUrl && (
              <Text
                style={{
                  margin: `0 0 ${email_theme.spacing.sm} 0`,
                  fontSize: email_theme.typography.sizes.xs,
                  fontFamily: email_theme.typography.fontFamily,
                }}
              >
                <a
                  href={organizationUrl}
                  style={{
                    color: email_theme.colors.primary,
                    textDecoration: 'none',
                  }}
                >
                  {organizationUrl}
                </a>
              </Text>
            )}
            <Text
              style={{
                margin: `${email_theme.spacing.lg} 0 0 0`,
                fontSize: email_theme.typography.sizes.xs,
                color: email_theme.colors.primary,
                fontFamily: email_theme.typography.fontFamily,
                opacity: email_theme.opacity.minimal,
              }}
            >
              [უსაფრთხოების შენიშვნა: ეს მოთხოვნა იქნა გააქტიურებული თქვენი IP მისამართიდან]
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
