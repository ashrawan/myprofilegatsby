import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
}

export default function SEO({
  title = "Shrawan Adhikari - Software Engineer",
  description = "Experienced Software Engineer with expertise in Java, Spring Boot, Microservices, Security, and Cloud Technologies. View my portfolio and projects.",
  name = "Shrawan Adhikari",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical URLs */}
      <link rel="canonical" href="https://shrawan.dev" />
      <link rel="alternate" href="https://adhikarishrawan.com.np" />
    </Helmet>
  );
}
