import { Request, Response } from 'express';
import { simulateDelayUtil } from './utils/simulate-delay.util';

const MOCK_HIGHLIGHT = {
  notices: [
    {
      id: 1,
      isMain: true,
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80',
      title: 'Angular 18 Released with Enhanced SSR Support',
      description:
        'La nueva versión de Angular mejora el soporte para Server-Side Rendering, optimizando el rendimiento y la experiencia de usuario.',
      date: '2025-06-28',
    },
    {
      id: 2,
      isMain: false,
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      title: 'Next.js introduce Partial Hydration',
      description:
        'Next.js ahora soporta hidratación parcial, permitiendo aplicaciones más rápidas y eficientes en SSR.',
      date: '2025-06-28',
    },
    {
      id: 3,
      isMain: false,
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Mejores prácticas de SEO en SSR para 2025',
      description:
        'Descubre las últimas estrategias de SEO aplicadas a proyectos con renderizado en servidor.',
      date: '2025-06-28',
    },
    {
      id: 4,
      isMain: false,
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      title: 'Comparativa: Angular SSR vs Next.js',
      description:
        'Analizamos las diferencias clave entre SSR en Angular y Next.js para proyectos frontend modernos.',
      date: '2025-06-28',
    },
    {
      id: 5,
      isMain: false,
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      title: 'Tendencias en frameworks SSR para frontend',
      description:
        'Un repaso a los frameworks más populares y sus ventajas en el desarrollo frontend con SSR.',
      date: '2025-06-28',
    },
  ],
  blogs: [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      title: 'Cómo migrar tu app Angular a SSR en 2025',
      date: '2025-06-28',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      title: 'SSR y rendimiento: métricas clave a monitorear',
      date: '2025-06-28',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      title: 'Next.js vs Angular Universal: ¿Cuál elegir?',
      date: '2025-06-28',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Mejorando el SEO con SSR y meta tags dinámicos',
      date: '2025-06-28',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      title: 'Errores comunes al implementar SSR en frontend',
      date: '2025-06-28',
    },
    {
      id: 6,
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80',
      title: 'Tendencias de SSR en el ecosistema JavaScript',
      date: '2025-06-28',
    },
  ],
};

export const getHighlight = async (req: Request, res: Response) => {
  await simulateDelayUtil();
  res.json(MOCK_HIGHLIGHT);
};
