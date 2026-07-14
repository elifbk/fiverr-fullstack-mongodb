import React, { type FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full border-t p-5 border-zinc-200 shadow-sm">
      <p className="max text-center text-zinc-800">
        © Fiverr International Ltd. {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
