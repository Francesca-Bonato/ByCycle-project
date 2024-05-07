import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-xl font-medium",
  s: "text-base font-normal",
  "2xl": "text-[44px] font-medium md:text-[40px] sm:text-[34px]",
  xl: "text-2xl font-medium md:text-[22px]",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
