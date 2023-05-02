import Head from 'next/head';
import LandingPage from './landingPage';
import i18n from "i18next";
export default function Home() {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <link href="/dist/output.css" rel="stylesheet"/>
         <link rel="icon" href="/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
        <link
              href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
              rel="stylesheet"
            />
           <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
      rel="stylesheet"
    /> 
        <script src="https://unpkg.com/i18next/i18next.min.js"></script>
        <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
      defer
    ></script>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1"
    />
      </Head>
      <LandingPage />
    </>
  )
}
