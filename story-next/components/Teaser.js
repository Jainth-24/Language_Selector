import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>{blok.header}</h2>;
};

export default Teaser;
