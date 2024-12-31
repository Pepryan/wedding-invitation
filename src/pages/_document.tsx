import Document, { Html, Head, Main, NextScript } from 'next/document';
import { weddingConfig } from '@/config/wedding-config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="/wedding-invitation/favicon.ico" />
          <meta
            name="description"
            content={`The wedding invitation of ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:site_name" content="Wedding Invitation" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;