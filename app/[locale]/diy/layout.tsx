import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hazlo Tú Mismo - Code Cognition Studio',
  description: 'Explora las herramientas de IA disponibles y decide si prefieres hacerlo tú mismo o trabajar con expertos.',
  openGraph: {
    title: 'Hazlo Tú Mismo - Code Cognition Studio',
    description: 'Explora las herramientas de IA disponibles y decide si prefieres hacerlo tú mismo.',
    type: 'website',
  },
};

export default function DIYLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
