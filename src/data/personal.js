/**
 * ====================================================
 * PERSONAL INFO — edit any of your personal details here
 * ====================================================
 */

export const personal = {
  name: 'Hitarth Gupta',
  // The hero will split this and animate the last name with the accent treatment
  firstName: 'Hitarth',
  lastName: 'Gupta',
  brand: 'HITARTH.GUPTA',
  title: 'Senior Frontend Engineer',
  subtitle: 'React.js · React Native · TypeScript · RTK',
  experienceSince: 2020,
  yearsLabel: '5+',
  email: 'hitarthgupta1@gmail.com',
  phone: '',
  phoneRaw: '',
  location: 'Gurugram, India',
  timezone: 'UTC+5:30',

  // Photo — drop your image at public/me.png (or .jpg / .webp)
  photo: '/me.png',

  // CV — drop your resume PDF at public/Hitarth_Gupta_Resume.pdf
  resume: '/Hitarth_Gupta_Resume.pdf',

  // Open to (used in hero + contact)
  openTo: ['Freelance', 'Contract', 'Full-time'],
  availableFor: 'Q2 2026',

  socials: {
    linkedin: 'https://www.linkedin.com/in/hitarthgupta03/',
    github: '',
    twitter: '',
  },
};

export const heroStats = [
  { num: '5+', label: 'Years\nExperience' },
  { num: '400K', label: 'Users\nReached' },
  { num: '12+', label: 'Apps\nShipped' },
];

export const heroTagline = `Five years shipping fintech & e-commerce experiences for **YES Bank**, **PwC**, and Hong Kong's **OnTheList**. Open to **freelance, contract, and full-time** opportunities — anywhere a versatile React engineer can move the needle.`;

export const aboutParagraphs = [
  `I build {{scalable, high-performance interfaces}} for fintech and e-commerce — the kind that need to handle real money, real users, and real edge cases without breaking on Sunday night.`,
  `My specialty is taking a complex domain (banking flows, real-time commerce, multi-platform mobile) and turning it into something that {{feels effortless}} for the end user and clean for the next engineer.`,
  `Currently {{open to freelance, contract, and full-time roles}} — short sprints, long-term partnerships, or a permanent seat on a strong team. Anywhere solid React work makes the difference.`,
];

export const aboutCards = [
  {
    label: 'Core stack',
    big: 'React + React Native',
    sub: '5+ years · production-grade · battle-tested',
  },
  {
    label: 'Recent impact',
    list: [
      ['Render time', '−20%'],
      ['Lighthouse score', '58 → 82'],
      ['Onboarding completion', '+25%'],
      ['API latency', '−35%'],
    ],
  },
  {
    label: 'Open to',
    list: [
      ['Freelance projects', '✓'],
      ['Contract roles', '✓'],
      ['Full-time roles', '✓'],
      ['Remote (global)', '✓'],
    ],
  },
];
