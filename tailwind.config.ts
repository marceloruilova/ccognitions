import type { Config } from 'tailwindcss'

/**
 * CONFIGURACIÓN DE TAILWIND - ccognitions
 *
 * Paleta de colores empresarial sobria y profesional.
 * Ver lib/colors.ts para constantes reutilizables y guías de uso.
 */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Paleta empresarial oficial
        brand: {
          // Grises primarios (ampliamente usados)
          'gray-50': '#f9fafb',
          'gray-100': '#f3f4f6',
          'gray-200': '#e5e7eb',
          'gray-300': '#d1d5db',
          'gray-400': '#9ca3af',
          'gray-500': '#6b7280',
          'gray-600': '#4b5563',
          'gray-700': '#374151',
          'gray-800': '#1f2937',
          'gray-900': '#111827',
          // Slate para acentos oscuros (uso limitado)
          'slate-700': '#334155',
          'slate-800': '#1e293b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    // Asegurar que las clases principales siempre estén disponibles
    'bg-gray-50',
    'bg-gray-100',
    'bg-gray-900',
    'bg-slate-800',
    'text-gray-900',
    'text-gray-700',
    'text-gray-600',
    'border-gray-200',
    'border-gray-300',
    // Blog dynamic gradient & accent classes
    'from-violet-600', 'to-indigo-600', 'from-violet-50', 'to-indigo-50', 'text-violet-700',
    'from-blue-600', 'to-cyan-600', 'from-blue-50', 'to-cyan-50', 'text-blue-700',
    'from-emerald-600', 'to-teal-600', 'from-emerald-50', 'to-teal-50', 'text-emerald-700',
  ],
}
export default config
