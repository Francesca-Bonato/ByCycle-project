/* eslint-disable react/prop-types */

const shapes = {
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    black_900_01: "bg-black-900_01",
  },
};
const sizes = {
  xs: "h-[32px] px-2",
};

const Footer_SocialBTN = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer bg-black-900_01 rounded-[16px] ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Footer_SocialBTN };
