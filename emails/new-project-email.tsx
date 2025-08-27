import { formatDate } from 'date-fns';

import { Html, Head, Body, Container, Section, Heading, Text, Hr, Button } from '@react-email/components';
import { member_role, Project } from '../generated/prisma';
import { email_theme } from '@/constants/themes';
import { env } from '@/helpers/env';

interface IProps {
  project: Project;
  createdBy: string;
  members: Array<{
    username: string;
    email: string;
    role: member_role;
  }>;
}

const role_labels: Record<member_role, string> = { lead: 'ლიდერი', member: 'მემბერი', viewer: 'დამკვირვებელი' };

export default function NewProjectEmail({ project, createdBy, members }: IProps) {
  const projectUrl = `${env.APP_URL}/projects/${project.id}`;
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
            {/* Logo Circle */}
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
              ახალი პროექტი დაემატა
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
              [სისტემის შეტყობინება]
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
                        backgroundColor: email_theme.colors.danger,
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
                      ახალი პროექტის შეტყობინება
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
                &gt; პროექტის ინიციალიზაცია...
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
                &gt; სტატუსი: [აქტიური]
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
                &gt; შემქმნელი: {createdBy}
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
              გამარჯობა! 👋
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
              გაცნობებთ, რომ <span style={{ fontWeight: 'bold' }}>{organizationName}</span>-ში ახალი პროექტი დაემატა და
              თქვენ ამ პროექტში მონაწილეობა გექნებათ.
            </Text>

            {/* Project Info Display */}
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
                [პროექტის ინფორმაცია]
              </Text>
              <div
                style={{
                  margin: `${email_theme.spacing.lg} 0`,
                  fontSize: email_theme.typography.sizes.xl,
                  fontWeight: 'bold',
                  fontFamily: email_theme.typography.fontFamily,
                  color: email_theme.colors.primary,
                }}
              >
                {project.name}
              </div>
              {project.description && (
                <Text
                  style={{
                    margin: `${email_theme.spacing.md} 0`,
                    fontSize: email_theme.typography.sizes.base,
                    color: email_theme.colors.primary,
                    fontFamily: email_theme.typography.fontFamily,
                    opacity: email_theme.opacity.high,
                  }}
                >
                  {project.description}
                </Text>
              )}
              <Text
                style={{
                  margin: `${email_theme.spacing.lg} 0 0 0`,
                  fontSize: email_theme.typography.sizes.xs,
                  color: email_theme.colors.primary,
                  fontFamily: email_theme.typography.fontFamily,
                  opacity: email_theme.opacity.low,
                }}
              >
                [პროექტი შექმნილია]
              </Text>
            </div>

            {/* Project Details Table */}
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
                [პროექტის დეტალები]
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
                    პროექტის სახელი:
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
                    {project.name}
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
                    ტიპი:
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
                    {project.type}
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
                    სტატუსი:
                  </td>
                  <td
                    style={{
                      paddingBottom: email_theme.spacing.md,
                      fontSize: email_theme.typography.sizes.sm,
                      color: email_theme.colors.success,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    {project.status}
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
                    დაწყების თარიღი:
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
                    {formatDate(project.start_date, 'yyyy-MM-dd')}
                  </td>
                </tr>
                {project.end_date && (
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
                      დასრულების თარიღი:
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
                      {formatDate(project.end_date, 'yyyy-MM-dd')}
                    </td>
                  </tr>
                )}
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
                    შემქმნელი:
                  </td>
                  <td
                    style={{
                      fontSize: email_theme.typography.sizes.sm,
                      color: email_theme.colors.primary,
                      opacity: email_theme.opacity.high,
                      fontFamily: email_theme.typography.fontFamily,
                    }}
                  >
                    {createdBy}
                  </td>
                </tr>
              </table>
            </div>

            {/* Team Members Section */}
            {members && members.length > 0 && (
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
                  [გუნდის წევრები]
                </Text>

                {members.map((member, index) => (
                  <div
                    key={index}
                    style={{
                      padding: email_theme.spacing.md,
                      marginBottom: email_theme.spacing.sm,
                      borderRadius: email_theme.borders.radius.sm,
                      border: `${email_theme.borders.width.thin} solid ${email_theme.colors.primary}`,
                      backgroundColor: email_theme.colors.background.dark,
                    }}
                  >
                    <table style={{ width: '100%' }}>
                      <tr>
                        <td
                          style={{
                            width: '80px',
                            fontSize: email_theme.typography.sizes.sm,
                            fontWeight: 'bold',
                            color: email_theme.colors.primary,
                            fontFamily: email_theme.typography.fontFamily,
                          }}
                        >
                          სახელი:
                        </td>
                        <td
                          style={{
                            fontSize: email_theme.typography.sizes.sm,
                            color: email_theme.colors.primary,
                            opacity: email_theme.opacity.high,
                            fontFamily: email_theme.typography.fontFamily,
                          }}
                        >
                          {member.username}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
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
                            fontSize: email_theme.typography.sizes.sm,
                            color: email_theme.colors.primary,
                            opacity: email_theme.opacity.high,
                            fontFamily: email_theme.typography.fontFamily,
                          }}
                        >
                          {member.email}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: email_theme.typography.sizes.sm,
                            fontWeight: 'bold',
                            color: email_theme.colors.primary,
                            fontFamily: email_theme.typography.fontFamily,
                          }}
                        >
                          როლი:
                        </td>
                        <td
                          style={{
                            fontSize: email_theme.typography.sizes.sm,
                            color: email_theme.colors.primary,
                            opacity: email_theme.opacity.high,
                            fontFamily: email_theme.typography.fontFamily,
                          }}
                        >
                          {role_labels[member.role]}
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
              </div>
            )}

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
              პროექტი უკვე აქტიურია და მზად არის მუშაობისთვის. შეგიძლიათ ნახოთ დეტალები და დაიწყოთ თანამშრომლობა გუნდთან
              ერთად.
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
              თუ გაქვთ შეკითხვები პროექტთან დაკავშირებით, მიმართეთ პროექტის მენეჯერს ან ადმინისტრატორს.
            </Text>

            {projectUrl && (
              <div style={{ margin: `${email_theme.spacing.xxl} 0`, textAlign: 'center' }}>
                <Button
                  href={projectUrl}
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
                  [პროექტის ნახვა]
                </Button>
              </div>
            )}

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
              [კონფიდენციალობა: ეს ინფორმაცია გამოყენებისთვის განკუთვნილია მხოლოდ ღებულისთვის]
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
