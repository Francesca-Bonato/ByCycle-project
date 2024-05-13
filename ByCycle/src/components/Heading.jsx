import React from "react";

const sizes = {
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-manrope ${className} ${sizes[size]} xl:text-2xl`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
