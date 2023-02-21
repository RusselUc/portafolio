import React from "react";

const Button = ({ text, icon, href, target, onClick }) => {
  return (
    <a
      className="mt-8 flex items-center justify-center gap-4 rounded-xl bg-[#0079ff] p-3 transition-all duration-500 ease-in hover:shadow-lg hover:shadow-blue-500/80"
      href={href}
      target={target}
      onClick={onClick}
    >
      <span className="font-semibold text-white dark:text-gray-300">
        {text}
      </span>
      <span className="flex items-center justify-center text-white dark:text-gray-300">
        <ion-icon name={icon}></ion-icon>
      </span>
    </a>
  );
};

export default Button;
