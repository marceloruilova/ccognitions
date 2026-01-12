# Librería de Utilidades - ccognitions

## `colors.ts` - Paleta de Colores Oficial

Este archivo define la paleta de colores aprobada para el proyecto.

### Uso

```tsx
import colors from '@/lib/colors';

// Ejemplo 1: Card con colores oficiales
<div className={`${colors.primary.card} ${colors.primary.border} ${colors.shadows.md}`}>
  <h2 className={colors.primary.text}>Título</h2>
  <p className={colors.primary.subtext}>Descripción</p>
</div>

// Ejemplo 2: Header oscuro
<header className={colors.gradients.darkHeader}>
  <h1 className={colors.accent.dark.text}>Título Principal</h1>
</header>
```

### Estructura

- **primary**: Colores principales (grises claros)
- **accent**: Colores de acento (grises/slate oscuros)
- **states**: Estados interactivos (hover, focus, disabled)
- **gradients**: Gradientes aprobados
- **shadows**: Sombras estándar

### Reglas

❌ **NO USAR** colores fuera de este archivo sin consultar
✅ **SIEMPRE** consultar `DESIGN_SYSTEM.md` antes de agregar estilos

---

## `utils.ts` - Utilidades de Tailwind

Exporta la función `cn()` para combinar clases de Tailwind de manera segura.

### Uso

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
)}>
  Contenido
</div>
```

---

Para más información sobre el sistema de diseño, consulta: [`DESIGN_SYSTEM.md`](../DESIGN_SYSTEM.md)
