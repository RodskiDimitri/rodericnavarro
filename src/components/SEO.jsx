import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  type = 'website'
}) => {
  const { pathname } = useLocation();
  
  // Format the canonical URL to match the deployed GitHub Pages URL
  const baseUrl = 'https://rodskidimitri.github.io/rodericnavarro';
  // Remove trailing slashes for consistency, except for root
  const canonicalPath = pathname === '/' || pathname === '' 
    ? baseUrl + '/' 
    : `${baseUrl}${pathname.endsWith('/') ? pathname.slice(0, -1) : pathname}`;
    
  // Default image URL
  const ogImageUrl = `${baseUrl}/favicon.png`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalPath} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:site_name" content="Roderic Navarro" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalPath} />
      <meta property="og:image" content={ogImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SEO;
