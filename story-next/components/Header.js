import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => {
    console.log({ blok });
  return (
    <h2 className="text-2xxl mb-10" {...storyblokEditable(blok)}>
      {blok.header}
    </h2>
  );
};

export default Header;
