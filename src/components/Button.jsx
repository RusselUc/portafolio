import React from "react";

const Button = ({text, icon, href, target}) => {
  return (
    <a
        className="mt-8 flex items-center justify-center gap-4 rounded-xl bg-gray-900 p-3 dark:bg-gray-600"
        href={href}
        target={target}
        >
      <span className="text-white dark:text-gray-300">{text}</span>
      <span className="flex items-center justify-center text-white dark:text-gray-300">
        <ion-icon name={icon}></ion-icon>
      </span>
    </a>
  );
};

export default Button;
