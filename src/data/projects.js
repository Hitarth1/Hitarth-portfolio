/**
 * ====================================================
 * PROJECTS — edit/add/remove your projects here
 * ====================================================
 *
 * NEW FIELDS:
 *   image     → URL or path to a project screenshot/icon (optional)
 *               Drop project images in /public/projects/ and reference as '/projects/name.png'
 *               OR use direct URLs (e.g., Play Store icons)
 *   accent    → optional hex color used as the card's signature tint
 *               (e.g., '#0033A0' for YES Bank blue, '#FF6B00' for OnTheList orange)
 *   metric    → a single headline number / impact stat shown big on the card
 *               (e.g., '400K users' or '+25% completion')
 */

export const projects = [
  {
    domain: 'Fintech · Mobile Banking',
    title: 'IRIS by YES Bank',
    desc: 'React Native mobile banking app serving 400,000+ active users. Owned credit card onboarding, dashboard flows, and bill payment modules — lifting completion rates 25%.',
    tags: ['React Native', 'Redux', 'Firebase', 'Fintech'],
    linkAndroid: 'https://play.google.com/store/apps/details?id=in.irisbyyes.app&hl=en_IN',
    linkIOS: 'https://apps.apple.com/in/app/iris-by-yes-bank-mobile-app/id1575064171',
    image: 'https://play-lh.googleusercontent.com/llFM2SeE9RmExQL-Iva6KR61wttqIy0PSvoBFLUpiM-HNNEffXnKESnpbxdGXPvGnA=w2560-h1440-rw',
    images:['https://play-lh.googleusercontent.com/llFM2SeE9RmExQL-Iva6KR61wttqIy0PSvoBFLUpiM-HNNEffXnKESnpbxdGXPvGnA=w2560-h1440-rw', 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/86/e7/7d/86e77d38-ce26-35b2-9d8d-8d46d844645d/3.png/230x498bb.webp'],
    accent: '#0033A0',
    metric: '400K+ users',
    year: '2024',
    featured: true,
    isWeb: false,
  },
  {
    domain: 'E-commerce · Hong Kong',
    title: 'OnTheList',
    desc: 'End-to-end ordering UI for a Hong Kong e-commerce platform. Real-time product interfaces via WebSocket, 35% latency reduction, Lighthouse score lifted from 58 to 82.',
    tags: ['React.js', 'React Native', 'GraphQL', 'Node.js', 'WebSocket', 'OTA updates'],
    link: 'https://www.onthelist.com/',
    linkAndroid: 'https://play.google.com/store/apps/details?id=com.otl',
    linkIOS: 'https://apps.apple.com/de/app/onthelist-hk/id6444730637',
    image: '/projects/OTL.png',
    accent: '#FF6B00',
    metric: 'Lighthouse 58→82',
    year: '2023',
    featured: false,
  },
  {
    domain: 'Education · Web App',
    title: 'Birlingo',
    desc: 'Cross-platform language learning app built with React Native and React.js. Memoised location detection, smooth navigation flows, and modular component architecture.',
    tags: ['React Native', 'iOS', 'Android', 'React.js', 'Offline support'],
    link: 'https://www.birlingo.de/',
    linkAndroid: 'https://play.google.com/store/search?q=birlingo&c=apps',
    linkIOS: 'https://apps.apple.com/de/app/birlingo-sprachkurse/id1533513433',
    image: '/projects/Birlingo.png',
    accent: '#5B6FE8',
    metric: 'Cross-platform',
    year: '2022',
    featured: false,
  },
  {
    domain: 'Healthcare · Mobile App',
    title: 'SOC — Patient Care',
    desc: 'Healthcare delivery app built with React Native. Payment gateway integration, in-app purchases with webhook support for real-time transaction processing.',
    tags: ['React Native', 'Payments', 'Healthcare'],
    linkAndroid: 'https://play.google.com/store/search?q=symphony%20of%20the%20cells&c=apps',
    linkIOS: 'https://apps.apple.com/de/app/symphony-of-the-cells/id1581782553',
    images: ['/projects/SOC-1.png', '/projects/SOC-2.png'],
    accent: '#E63946',
    metric: 'Real-time payments',
    year: '2022',
    featured: true,
  },
  {
    domain: 'Enterprise · F&B Industry',
    title: 'PwC — Global F&B Platform',
    desc: 'Scalable enterprise web app for a global food & beverage leader. React + TypeScript, RTK-based state, high-traffic workflows, Azure DevOps CI/CD.',
    tags: ['React', 'TypeScript', 'RTK', 'Azure DevOps'],
    link: '',
    image: '',
    accent: '#D04A02',
    metric: '−30% dev effort',
    year: '2025',
    featured: false,
  },
  // ============================================================
  // 👇 ADD NEW PROJECTS HERE — just copy the structure above
  // ============================================================
];
