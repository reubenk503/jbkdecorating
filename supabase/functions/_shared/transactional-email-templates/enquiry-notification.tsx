import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'JBK Decorating'

interface EnquiryNotificationProps {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const EnquiryNotificationEmail = ({
  name,
  email,
  phone,
  message,
}: EnquiryNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New quote enquiry from {name ?? 'a website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Quote Enquiry</Heading>
        <Text style={lead}>
          You've received a new enquiry through the {SITE_NAME} website.
        </Text>

        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name ?? '—'}</Text>

          <Hr style={divider} />

          <Text style={label}>Email</Text>
          <Text style={value}>{email ?? '—'}</Text>

          <Hr style={divider} />

          <Text style={label}>Phone</Text>
          <Text style={value}>{phone ?? '—'}</Text>

          <Hr style={divider} />

          <Text style={label}>Project details</Text>
          <Text style={messageText}>{message ?? '—'}</Text>
        </Section>

        <Text style={footer}>
          Reply directly to {email ?? 'the customer'} to follow up.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: EnquiryNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New quote enquiry${data?.name ? ` from ${data.name}` : ''}`,
  to: 'jbkdecorating@outlook.com',
  displayName: 'Enquiry notification',
  previewData: {
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '07123 456789',
    message: 'Looking for a quote to repaint the lounge and hallway.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Georgia, "Times New Roman", serif',
}
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = {
  fontSize: '26px',
  fontWeight: 'bold',
  color: '#1f3a2e',
  margin: '0 0 16px',
}
const lead = {
  fontSize: '15px',
  color: '#55575d',
  lineHeight: '1.6',
  margin: '0 0 24px',
}
const card = {
  backgroundColor: '#faf7f0',
  borderRadius: '8px',
  padding: '20px 24px',
  border: '1px solid #e8e2d0',
}
const label = {
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  color: '#9a8f6f',
  margin: '0 0 4px',
  fontFamily: 'Arial, sans-serif',
}
const value = {
  fontSize: '15px',
  color: '#1f3a2e',
  margin: '0 0 4px',
  fontWeight: 600,
}
const messageText = {
  fontSize: '15px',
  color: '#1f3a2e',
  margin: '0',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
}
const divider = { borderColor: '#e8e2d0', margin: '14px 0' }
const footer = {
  fontSize: '13px',
  color: '#9a8f6f',
  margin: '24px 0 0',
  fontFamily: 'Arial, sans-serif',
}
