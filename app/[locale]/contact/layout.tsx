import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Code Cognition Studio',
  description: 'Contáctanos para discutir tu proyecto. Ofrecemos consultas gratuitas para entender tus necesidades y proponer soluciones.',
  openGraph: {
    title: 'Contacto - Code Cognition Studio',
    description: 'Contáctanos para discutir tu proyecto de software.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
