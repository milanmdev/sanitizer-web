import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { useEffect } from "react";

import { FooterModule } from "../components/footer";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gray-900">
          <Main />
          <NextScript />
        </body>
        {/* Footer */}
        <FooterModule />
      </Html>
    );
  }
}

export default CustomDocument;
