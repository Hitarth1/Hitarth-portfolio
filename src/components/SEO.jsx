import { Helmet } from 'react-helmet-async';
import { personal } from '../data/personal';

/**
 * Renders dynamic meta tags into <head>.
 * Edit defaults in /src/data/personal.js
 */
export default function SEO({
  title = `${personal.name} — ${personal.title} | React.js & React Native`,
  description = `${personal.title} with ${personal.yearsLabel} years building scalable fintech and e-commerce experiences. Specializing in React.js, React Native, TypeScript, and Redux. Available for freelance projects worldwide.`,
  url = 'https://hitarthgupta.dev/',
  image = 'https://hitarthgupta.dev/og-image.png',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
