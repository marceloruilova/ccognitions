# Sistema de Diseño - ccognitions

## Paleta de Colores Empresarial

Este proyecto utiliza una paleta de colores **sobria y profesional** para mantener una imagen empresarial consistente.

---

## ✅ Colores Aprobados

### Grises (Uso Principal)
```
gray-50   → Fondos de página
gray-100  → Fondos de elementos secundarios
gray-200  → Bordes sutiles
gray-300  → Bordes visibles
gray-400  → Estados deshabilitados
gray-500  → Líneas decorativas
gray-600  → Texto terciario
gray-700  → Texto secundario
gray-800  → Acentos oscuros
gray-900  → Texto principal, fondos oscuros
```

### Slate (Acentos Oscuros - Uso Limitado)
```
slate-700 → Headers alternativos
slate-800 → Headers principales, sidebars oscuros
```

---

## ❌ Colores Prohibidos

**NO usar bajo ninguna circunstancia:**

- ❌ `red-*` (rojos brillantes)
- ❌ `blue-500, blue-600, blue-700` (azules brillantes)
- ❌ `green-500, green-600, green-700` (verdes brillantes)
- ❌ `purple-*` (púrpuras brillantes)
- ❌ `orange-*` (naranjas brillantes)
- ❌ `yellow-*` (amarillos)
- ❌ `pink-*` (rosas)
- ❌ `indigo-*` (índigos brillantes)

**Razón:** Estos colores son demasiado llamativos y no se ajustan a la imagen empresarial profesional del proyecto.

---

## 🎨 Patrones de Uso

### 1. Fondos

```tsx
// Fondo de página
className="bg-gray-50"

// Tarjetas y contenedores
className="bg-white border border-gray-200"

// Secciones oscuras (headers, footers)
className="bg-slate-800" // o bg-gray-900

// Elementos destacados en oscuro
className="bg-slate-700" // o bg-gray-800
```

### 2. Textos

```tsx
// Títulos principales
className="text-gray-900"

// Texto de cuerpo
className="text-gray-700"

// Texto secundario/hints
className="text-gray-600"

// Texto sobre fondo oscuro
className="text-white"

// Texto secundario sobre fondo oscuro
className="text-gray-300"
```

### 3. Bordes

```tsx
// Bordes sutiles
className="border border-gray-200"

// Bordes más visibles
className="border border-gray-300"

// Bordes en fondos oscuros
className="border border-gray-700"

// Líneas decorativas (accent bars)
className="bg-gray-800" // para fondos claros
className="bg-gray-500" // para fondos oscuros
```

### 4. Gradientes Aprobados

```tsx
// Header/Hero sections
className="bg-gradient-to-r from-slate-800 to-slate-700"

// Cards oscuros
className="bg-gradient-to-br from-gray-900 to-gray-800"

// Fondos sutiles
className="bg-gradient-to-br from-gray-50 to-gray-100"
```

### 5. Estados Hover

```tsx
// Hover en elementos claros
className="hover:bg-gray-100"

// Hover en texto
className="hover:text-gray-900"

// Hover en elementos oscuros
className="hover:bg-gray-800"
```

---

## 📦 Componentes Comunes

### Tarjeta Estándar
```tsx
<div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Título</h3>
  <p className="text-gray-700">Contenido...</p>
</div>
```

### Header Oscuro
```tsx
<header className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
  <h1 className="text-5xl font-bold mb-4">Título Principal</h1>
  <p className="text-gray-200">Subtítulo</p>
</header>
```

### Botón Primario
```tsx
<button className="bg-white text-gray-900 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all shadow-md">
  Acción Principal
</button>
```

### Tag/Badge
```tsx
<span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold border border-gray-300">
  Etiqueta
</span>
```

### Icono Circular
```tsx
<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-300">
  <span className="text-2xl">🎯</span>
</div>
```

---

## 🔧 Uso del Archivo `lib/colors.ts`

El archivo `lib/colors.ts` exporta constantes reutilizables:

```tsx
import colors from '@/lib/colors';

// Usar las constantes
<div className={colors.primary.bg}>
  <h1 className={colors.primary.text}>Título</h1>
  <p className={colors.primary.subtext}>Texto secundario</p>
</div>
```

---

## 📋 Checklist Antes de Crear Nuevos Componentes

Antes de agregar estilos a un componente, verifica:

- [ ] ¿Estoy usando solo grises (gray-*) y slate (slate-700, slate-800)?
- [ ] ¿Evité colores brillantes como blue-600, green-600, purple-600?
- [ ] ¿Los fondos oscuros usan slate-800 o gray-900?
- [ ] ¿Los textos principales son gray-900 y secundarios gray-700?
- [ ] ¿Los bordes son gray-200 o gray-300?
- [ ] ¿Consulté este documento antes de usar un color nuevo?

---

## 🎯 Filosofía de Diseño

> **"Sobrio, Profesional, Empresarial"**

Este proyecto prioriza:
- ✅ Colores neutros y profesionales
- ✅ Jerarquía visual clara
- ✅ Consistencia en toda la aplicación
- ❌ Colores llamativos o decorativos
- ❌ Exceso de variedad cromática
- ❌ Gradientes multicolor

---

## 📞 Contacto

Si necesitas agregar un nuevo color o patrón, consulta primero con el equipo de diseño.

**Última actualización:** 2026-01-12
