import Head from 'next/head';
import { memo } from 'react';

const Meta = ({
  title = '',
  description = '',
  canonical = '',
  ogTitle = '',
  ogDescription = '',
  ogImage = '',
  ogUrl = '',
  ogType = '',
  twitterTitle = '',
  twitterDescription = '',
  twitterImage = '',
  twitterCard = '',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonical} />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content={ogUrl} />
      <meta property='og:type' content={ogType} />
      <meta name='twitter:title' content={twitterTitle} />
      <meta name='twitter:description' content={twitterDescription} />
      <meta name='twitter:image' content={twitterImage} />
      <meta name='twitter:card' content={twitterCard} />
    </Head>
  );
};

export default memo(Meta);
