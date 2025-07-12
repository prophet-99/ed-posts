import { Request, Response } from 'express';
import { simulateDelayUtil } from './utils/simulate-delay.util';

const MOCK_BLOG = [
  {
    id: 1,
    title: '¿Por qué el SSR es clave en el desarrollo frontend moderno?',
    date: '2025-07-05',
    author: 'Jane Dev',
    coverImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    coverCaption:
      'El SSR potencia la velocidad y el SEO en aplicaciones web modernas.',
    content: [
      {
        type: 'paragraph',
        text: 'El Server-Side Rendering (SSR) ha revolucionado la forma en que las aplicaciones frontend entregan contenido a los usuarios. Gracias al SSR, los motores de búsqueda pueden indexar mejor los sitios y los usuarios experimentan tiempos de carga más rápidos.',
      },
      {
        type: 'paragraph',
        text: 'Frameworks como Angular Universal y Next.js han facilitado la adopción de SSR, permitiendo a los desarrolladores crear experiencias ricas y optimizadas para SEO sin sacrificar la interactividad.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        caption:
          'SSR permite que el contenido esté disponible antes de que JavaScript se ejecute en el navegador.',
      },
      {
        type: 'paragraph',
        text: 'Adoptar SSR no solo mejora el SEO, sino que también incrementa la accesibilidad y la percepción de rendimiento, factores clave para el éxito de cualquier proyecto web en 2025.',
      },
    ],
  },
  {
    id: 2,
    title: 'Comparativa: Angular Universal vs Next.js para SSR',
    date: '2025-06-20',
    author: 'Carlos Front',
    coverImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    coverCaption:
      'Angular Universal y Next.js lideran el SSR en el ecosistema frontend.',
    content: [
      {
        type: 'paragraph',
        text: 'Angular Universal y Next.js son dos de las soluciones más populares para implementar SSR en aplicaciones web modernas. Cada una tiene ventajas y desafíos particulares.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        caption:
          'Ambos frameworks permiten mejorar el SEO y la experiencia de usuario.',
      },
      {
        type: 'paragraph',
        text: 'Mientras Angular Universal se integra perfectamente con el ecosistema Angular, Next.js destaca por su flexibilidad y facilidad de uso en proyectos React.',
      },
    ],
  },
  {
    id: 3,
    title: 'Tendencias de SSR en el ecosistema JavaScript',
    date: '2025-05-30',
    author: 'Lucía SSR',
    coverImage:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    coverCaption:
      'El SSR sigue evolucionando con nuevas herramientas y enfoques.',
    content: [
      {
        type: 'paragraph',
        text: 'El ecosistema JavaScript no deja de innovar en el ámbito del SSR. Nuevos frameworks y técnicas emergen cada año para optimizar el rendimiento y la experiencia de usuario.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        caption:
          'Las tendencias apuntan a una mayor integración entre SSR y tecnologías de frontend modernas.',
      },
      {
        type: 'paragraph',
        text: 'La adopción de SSR es ya una práctica estándar en proyectos que buscan destacar en SEO y velocidad.',
      },
    ],
  },
  {
    id: 4,
    title: 'Mejores prácticas de SEO con SSR en 2025',
    date: '2025-05-10',
    author: 'Ana SEO',
    coverImage:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    coverCaption:
      'El SEO moderno se apoya en el SSR para mejorar la indexación y visibilidad.',
    content: [
      {
        type: 'paragraph',
        text: 'El SEO ha evolucionado y el SSR es ahora una de las mejores prácticas para asegurar que los motores de búsqueda indexen correctamente el contenido.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
        caption:
          'El contenido renderizado en servidor es más accesible para los motores de búsqueda.',
      },
      {
        type: 'paragraph',
        text: 'Implementar meta tags dinámicos y estructurar los datos correctamente es esencial para destacar en los resultados de búsqueda.',
      },
    ],
  },
  {
    id: 5,
    title: 'SSR y accesibilidad: creando experiencias inclusivas',
    date: '2025-04-22',
    author: 'Miguel Accesible',
    coverImage:
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=800&q=80',
    coverCaption:
      'SSR ayuda a que las aplicaciones sean más accesibles para todos los usuarios.',
    content: [
      {
        type: 'paragraph',
        text: 'La accesibilidad es un pilar fundamental en el desarrollo web moderno. El SSR contribuye a que el contenido esté disponible para tecnologías asistivas desde el primer renderizado.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        caption:
          'El contenido accesible mejora la experiencia de todos los usuarios.',
      },
      {
        type: 'paragraph',
        text: 'Adoptar SSR junto con buenas prácticas de accesibilidad garantiza aplicaciones inclusivas y eficientes.',
      },
    ],
  },
  {
    id: 6,
    title: 'Errores comunes al implementar SSR en frontend',
    date: '2025-03-15',
    author: 'Laura DevOps',
    coverImage:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    coverCaption:
      'Evita los errores más frecuentes al trabajar con SSR en proyectos frontend.',
    content: [
      {
        type: 'paragraph',
        text: 'Implementar SSR puede ser desafiante. Entre los errores más comunes están la mala gestión del estado, la falta de manejo de rutas dinámicas y la omisión de optimizaciones para SEO.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        caption:
          'Evitar errores comunes acelera el desarrollo y mejora la calidad del producto.',
      },
      {
        type: 'paragraph',
        text: 'Conocer estos errores y cómo solucionarlos es clave para un SSR exitoso en 2025.',
      },
    ],
  },
];

export const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await simulateDelayUtil();

  const blog = MOCK_BLOG.find((b) => b.id === Number(id));
  if (blog) {
    res.status(200).json(blog);
    return;
  }
  res.status(404).json({ message: 'Blog not found' });
};

export const getBlogIds = async (req: Request, res: Response) => {
  await simulateDelayUtil();
  const blogIds = MOCK_BLOG.map((b) => b.id.toString());

  res.status(200).json(blogIds);
};
