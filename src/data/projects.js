/**
 * ====================================================
 * PROJECTS — add/edit/remove projects here
 * ====================================================
 *
 * To add a new project, just add a new object to this array.
 * The portfolio will automatically render it.
 *
 * FIELDS:
 *   domain  → category shown in small caps above the title (e.g., "Fintech · Mobile Banking")
 *   title   → project name
 *   desc    → short impact-driven description (1-2 sentences)
 *   tags    → array of tech stack labels
 *   link    → public URL (Play Store / web / GitHub). Leave '' if no public link.
 *   year    → optional year shown if you want a chronological feel
 *   featured→ true to show on top, false otherwise
 */

export const projects = [
  {
    domain: 'Fintech · Mobile Banking',
    title: 'IRIS by YES Bank',
    desc: 'React Native mobile banking app serving 400,000+ active users. Owned credit card onboarding, dashboard flows, and bill payment modules — lifting completion rates 25%.',
    tags: ['React Native', 'Redux', 'Firebase', 'Fintech'],
    link: 'https://play.google.com/store/apps/details?id=com.bankingapp.yesmobile&hl=en_IN',
    year: '2024',
    featured: true,
  },
  {
    domain: 'E-commerce · Hong Kong',
    title: 'OnTheList',
    desc: 'End-to-end ordering UI for a Hong Kong e-commerce platform. Real-time product interfaces via WebSocket, 35% latency reduction, Lighthouse score lifted from 58 to 82.',
    tags: ['React.js', 'GraphQL', 'Node.js', 'WebSocket'],
    link: 'https://www.onthelist.com.hk/',
    year: '2023',
    featured: true,
  },
  {
    domain: 'Education · Mobile App',
    title: 'Birlingo',
    desc: 'Cross-platform language learning app built with React Native. Memoised location detection, smooth navigation flows, and modular component architecture.',
    tags: ['React Native', 'iOS', 'Android', 'Maps SDK'],
    link: 'https://play.google.com/store/apps/details?id=com.birlingo&hl=en',
    year: '2022',
    featured: false,
  },
  {
    domain: 'Healthcare · Mobile App',
    title: 'SOC — Patient Care',
    desc: 'Healthcare delivery app built with React Native. Payment gateway integration, in-app purchases with webhook support for real-time transaction processing.',
    tags: ['React Native', 'Payments', 'Healthcare'],
    link: '',
    year: '2022',
    featured: false,
  },
  {
    domain: 'Enterprise · F&B Industry',
    title: 'PwC — Global F&B Platform',
    desc: 'Scalable enterprise web app for a global food & beverage leader. React + TypeScript, RTK-based state, high-traffic workflows, Azure DevOps CI/CD.',
    tags: ['React', 'TypeScript', 'RTK', 'Azure DevOps'],
    link: '',
    year: '2025',
    featured: false,
  },
  // ============================================================
  // 👇 ADD NEW PROJECTS HERE — just copy the structure above
  // ============================================================
  // {
  //   domain: 'Your domain · Your category',
  //   title: 'Project name',
  //   desc: 'One or two sentences describing impact.',
  //   tags: ['Tag1', 'Tag2', 'Tag3'],
  //   link: 'https://link-to-project.com',
  //   year: '2026',
  //   featured: false,
  // },
];
