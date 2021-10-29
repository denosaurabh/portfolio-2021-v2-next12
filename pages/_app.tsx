// import { NextSeo } from 'next-seo';

import { globalStyles } from '@styled';
import Page from '@layouts/page.client';
// import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  globalStyles();

  //   <Page>
  // <NextSeo {...SEO} />
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );

  //  </Page>
}

export default MyApp;
