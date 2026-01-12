/**
 * PALETA DE COLORES OFICIAL - ccognitions
 *
 * Esta paleta define los colores aprobados para mantener una UI empresarial
 * sobria y profesional. NO usar colores brillantes o saturados.
 *
 * Última actualización: 2026-01-12
 */

export const colors = {
  /**
   * PRIMARIOS - Grises neutros
   * Uso: Textos, fondos, bordes principales
   */
  primary: {
    bg: 'bg-gray-50',           // Fondo principal de páginas
    card: 'bg-white',           // Fondo de tarjetas
    text: 'text-gray-900',      // Texto principal
    subtext: 'text-gray-700',   // Texto secundario
    muted: 'text-gray-600',     // Texto terciario/hints
    border: 'border-gray-200',  // Bordes sutiles
    divider: 'border-gray-300', // Divisores visibles
  },

  /**
   * ACENTOS - Grises oscuros y slate
   * Uso: Headers, CTAs, elementos destacados
   */
  accent: {
    dark: {
      bg: 'bg-gray-900',        // Fondos oscuros principales
      bgAlt: 'bg-slate-800',    // Fondos oscuros alternativos
      text: 'text-white',       // Texto sobre fondos oscuros
      textMuted: 'text-gray-300', // Texto secundario sobre oscuro
      border: 'border-gray-700', // Bordes en fondos oscuros
    },
    medium: {
      bg: 'bg-gray-800',        // Fondos intermedios
      bgAlt: 'bg-slate-700',    // Alternativa slate
      highlight: 'bg-gray-700', // Elementos destacados
    },
  },

  /**
   * ESTADOS - Colores funcionales (usar con moderación)
   * IMPORTANTE: Solo usar estos colores para estados específicos,
   * NO para decoración general
   */
  states: {
    hover: {
      gray: 'hover:bg-gray-100',
      dark: 'hover:bg-gray-800',
      text: 'hover:text-gray-900',
    },
    focus: {
      ring: 'focus:ring-gray-400',
      border: 'focus:border-gray-500',
    },
    disabled: {
      bg: 'bg-gray-100',
      text: 'text-gray-400',
      border: 'border-gray-200',
    },
  },

  /**
   * GRADIENTES APROBADOS
   * Solo usar estos gradientes específicos
   */
  gradients: {
    darkHeader: 'bg-gradient-to-r from-slate-800 to-slate-700',
    darkCard: 'bg-gradient-to-br from-gray-900 to-gray-800',
    subtleLight: 'bg-gradient-to-br from-gray-50 to-gray-100',
  },

  /**
   * SOMBRAS
   * Sombras aprobadas para mantener consistencia
   */
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },
} as const;

/**
 * COLORES PROHIBIDOS
 *
 * ❌ NO USAR los siguientes colores brillantes:
 * - red-500, red-600 (rojo brillante)
 * - blue-500, blue-600 (azul brillante)
 * - green-500, green-600, green-700 (verde brillante)
 * - purple-500, purple-600 (púrpura brillante)
 * - orange-500, orange-600 (naranja brillante)
 * - yellow-* (amarillos)
 * - pink-* (rosas)
 * - indigo-* (índigos brillantes)
 *
 * ✅ SOLO USAR:
 * - gray-* (todo el rango)
 * - slate-700, slate-800 (para acentos oscuros)
 *
 * Si necesitas un color de acento, consulta primero antes de agregarlo.
 */

/**
 * GUÍA DE USO
 *
 * 1. FONDOS:
 *    - Páginas: colors.primary.bg (bg-gray-50)
 *    - Tarjetas: colors.primary.card (bg-white)
 *    - Oscuros: colors.accent.dark.bg (bg-gray-900)
 *
 * 2. TEXTOS:
 *    - Principal: colors.primary.text (text-gray-900)
 *    - Secundario: colors.primary.subtext (text-gray-700)
 *    - Hints: colors.primary.muted (text-gray-600)
 *
 * 3. BORDES:
 *    - Sutiles: colors.primary.border (border-gray-200)
 *    - Visibles: colors.primary.divider (border-gray-300)
 *
 * 4. HEADERS/CTAs:
 *    - colors.gradients.darkHeader
 *    - colors.accent.dark.bg
 *
 * 5. HOVER STATES:
 *    - colors.states.hover.gray
 *    - colors.states.hover.text
 */

export default colors;
