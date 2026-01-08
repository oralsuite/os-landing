# Frontend - OralSuite

Frontend construido con Next.js 14+ (App Router) y TypeScript.

## Arquitectura

```
frontend/
├── landing/      # Sitio de marketing (oralsuite.com) - Puerto 3200
└── dashboard/    # Aplicación principal (app.oralsuite.com) - Puerto 3100
```

## Tecnologías

- **Next.js 14+**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **Zustand**: Estado global (simple y ligero)
- **Socket.io-client**: Chat en tiempo real
- **React Hook Form**: Manejo de formularios
- **Zod**: Validación de schemas

## Landing vs Dashboard

### Landing (Puerto 3200)
- Sitio de marketing público
- SEO optimizado
- Páginas estáticas/SSG
- Sin autenticación requerida
- Contenido: Home, Features, Pricing, Contact

### Dashboard (Puerto 3100)
- Aplicación principal
- Requiere autenticación
- Vistas diferentes por rol
- CRUD de órdenes
- Chat en tiempo real
- Gestión de pacientes

## Estructura Común

Ambos proyectos siguen la estructura de Next.js App Router:

```
[proyecto]/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/                # App Router (páginas)
│   ├── components/         # Componentes React
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilidades
│   └── types/              # TypeScript types
├── tailwind.config.js
└── next.config.js
```

## Iniciar Desarrollo

### 1. Crear proyectos
```bash
# Landing
pnpm create next-app landing --typescript --tailwind --app --src-dir

# Dashboard
pnpm create next-app dashboard --typescript --tailwind --app --src-dir
```

### 2. Configurar puertos

```javascript
// landing/next.config.js
module.exports = {
  // Puerto 3200 para landing
}

// dashboard/next.config.js
module.exports = {
  // Puerto 3100 para dashboard
}
```

### 3. Instalar dependencias adicionales (Dashboard)
```bash
cd dashboard
pnpm add zustand socket.io-client react-hook-form @hookform/resolvers zod
pnpm add @tanstack/react-query axios
pnpm add lucide-react  # Iconos
```

### 4. Iniciar
```bash
# En terminales separadas
cd landing && pnpm dev -- -p 3200
cd dashboard && pnpm dev -- -p 3100
```

## Convenciones

### Nombres de archivos
- **Componentes**: `PascalCase.tsx` → `OrderCard.tsx`
- **Hooks**: `camelCase.ts` → `useAuth.ts`
- **Utils**: `kebab-case.ts` → `format-date.ts`
- **Types**: `kebab-case.types.ts` → `order.types.ts`

### Estructura de componentes
```
components/
├── ui/          # Componentes base reutilizables (Button, Input, Card)
├── layout/      # Componentes de layout (Sidebar, Header)
├── features/    # Componentes por dominio (orders/, chat/, patients/)
└── providers/   # Context providers (AuthProvider, SocketProvider)
```

### Organización de imports
```typescript
// 1. React/Next
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// 2. Librerías externas
import { useQuery } from '@tanstack/react-query';

// 3. Componentes internos
import { Button } from '@/components/ui/Button';

// 4. Hooks, utils, types
import { useAuth } from '@/hooks/useAuth';
import { formatDate } from '@/lib/utils/format-date';
import type { Order } from '@/types/order.types';
```

## Dependencias Comunes

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "typescript": "^5.x",
    "tailwindcss": "^3.x"
  }
}
```

## Variables de Entorno

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_WS_URL=http://localhost:3003
```
