import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the SVG favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Optional fallback for older browsers */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
