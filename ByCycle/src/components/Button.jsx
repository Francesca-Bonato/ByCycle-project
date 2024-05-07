import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    gray_500_02: "border-gray-500_02 border border-solid text-black-900",
  },
  fill: {
    black_900: "bg-black-900 text-white-A700",
    black_900_01: "bg-black-900_01",
  },
};
const sizes = {
  sm: "h-[48px] px-8 text-base",
  xs: "h-[32px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "black_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_500_02", "black_900", "black_900_01"]),
};

export { Button };
