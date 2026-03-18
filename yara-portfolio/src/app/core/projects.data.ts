import { Project } from '../shared/models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Custom Angular Component Library',
    description: 'Enterprise Angular 19 design system powering the entire Peaxy product suite.',
    tech: ['Angular 19', 'TypeScript', 'RxJS', 'Angular CDK', 'SCSS'],
    highlights: [
      'Virtual-scroll data tables handling 100k+ rows at sub-16ms render time',
      'Floating scrollbars with custom scroll strategies',
      'Dynamic layout modes with reactive state patterns',
      'Accessible, themeable components following WCAG 2.1',
    ],
    featured: true,
  },
  {
    title: 'Yanal Pro — Mobile Invoicing App',
    description: 'Offline-first mobile app for a trading company with barcode scanning and Arabic PDF export.',
    tech: ['Mobile', 'Offline-first', 'Barcode Scanning', 'Arabic PDF'],
    highlights: [
      'Full offline support with local data sync',
      'Barcode scanning for instant product lookup',
      'Arabic RTL PDF invoice export',
    ],
    featured: true,
  },
  {
    title: 'Google Project — USB Bus Monitor',
    description: 'Electron.js desktop app for real-time USB bus monitoring with live data visualizations.',
    tech: ['Electron.js', 'Node.js', 'Highcharts', 'JavaScript'],
    highlights: [
      'Real-time USB device event monitoring',
      'Live data visualization charts',
      'Built for Google hardware team',
    ],
    featured: true,
  },
  {
    title: 'YZ Shop — E-Commerce Platform',
    description: 'Full-stack e-commerce platform with product catalog, cart, auth, and order management.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    highlights: [
      'Full authentication & authorization',
      'Product catalog with search and filters',
      'Cart and order management system',
    ],
    githubUrl: 'https://github.com/YaraZuhd',
    featured: false,
  },
];
