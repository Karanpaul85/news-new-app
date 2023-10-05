import Head from "next/head";
const Layout = (props) => {
  return (
    <>
      <Head>
        <link rel="shortcut  icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Websitefreelancing news app" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="786" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta name="theme-color" content="#07007a" />
        <title>Welcome to Breaking News</title>
        <meta
          name="keywords"
          content="Hindi news, हिंदी न्यूज़ , Hindi Samachar, हिंदी समाचार, Latest News in Hindi, Breaking News in Hindi, ताजा ख़बरें, KP News"
        />
      </Head>
      <div>{props.children}</div>
    </>
  );
};
export default Layout;
