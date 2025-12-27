import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  console.log('_document.tsx');
  return (
    <Html lang='pt-BR'>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
