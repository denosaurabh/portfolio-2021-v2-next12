// import { NextSeo } from 'next-seo';

import { globalStyles } from '@styled';
import Page from '@layouts/page.server';
// import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  globalStyles();

  //   <Page>
  // <NextSeo {...SEO} />
  return <Component {...pageProps} />;

  //  </Page>
}

export default MyApp;
