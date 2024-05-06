import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[24px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
    gray_800: "border-gray-800 border border-solid text-black-900",
    gray_500_01: "border-gray-500_01 border border-solid",
    gray_200: "border-gray-200 border border-solid",
  },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = {
  sm: "h-[40px] px-[11px]",
  md: "h-[48px] px-8 text-base",
  xs: "h-[32px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "black_900",
  onClick,
  ...restProps
}) => {
  return (
    <button
    onClick={onClick}
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
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700", "gray_800", "gray_500_01", "gray_200", "black_900"]),
};

export { Button };
