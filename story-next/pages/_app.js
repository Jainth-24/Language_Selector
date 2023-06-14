import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Header from "../components/Header";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  header: Header,
};

storyblokInit({
  accessToken: "ZYjahz10mNueUApX4KOu6Qtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}


export default MyApp;
