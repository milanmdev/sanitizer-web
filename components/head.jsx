import Head from "next/head";

export function HeadModule() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Comatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Web Sanitizer</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
    </>
  );
}
