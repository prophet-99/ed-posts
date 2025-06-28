import { Request, Response } from 'express';
import { simulateDelayUtil } from './utils/simulate-delay.util';

const MOCK_SERVICES = [
  {
    id: 1,
    title: 'Server-Side Rendering Setup',
    description:
      'Configuración completa de SSR para aplicaciones Angular. Optimización del tiempo de carga inicial y mejora del SEO mediante renderizado en servidor.',
    tags: ['SSR', 'Angular', 'Performance', 'SEO'],
    icon: 'speed',
  },
  {
    id: 2,
    title: 'SEO Optimization with SSR',
    description:
      'Implementación de estrategias SEO avanzadas utilizando Server-Side Rendering. Meta tags dinámicos, structured data y optimización para motores de búsqueda.',
    tags: ['SEO', 'Meta Tags', 'Structured Data', 'Google'],
    icon: 'search',
  },
  {
    id: 3,
    title: 'Performance Monitoring SSR',
    description:
      'Monitoreo y análisis de performance en aplicaciones SSR. Métricas de Core Web Vitals, optimización de tiempo de renderizado y análisis de carga.',
    tags: ['Performance', 'Monitoring', 'Core Web Vitals', 'Analytics'],
    icon: 'analytics',
  },
  {
    id: 4,
    title: 'Hydration Strategies',
    description:
      'Implementación de estrategias de hidratación eficientes en SSR. Lazy loading, progressive hydration y optimización de la experiencia del usuario.',
    tags: ['Hydration', 'Lazy Loading', 'UX', 'Progressive'],
    icon: 'water_drop',
  },
  {
    id: 5,
    title: 'SSR Security & Caching',
    description:
      'Configuración de seguridad y estrategias de caché para aplicaciones SSR. Headers de seguridad, CSP, rate limiting y optimización de caché en servidor.',
    tags: ['Security', 'Caching', 'CSP', 'Rate Limiting'],
    icon: 'security',
  },
];

export const getServices = async (req: Request, res: Response) => {
  await simulateDelayUtil();
  res.json(MOCK_SERVICES);
};
