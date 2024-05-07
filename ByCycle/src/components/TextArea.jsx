/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
};
const variants = {
  tarFoundationWhiteW400: "!border-gray-500_01 border border-solid bg-white-A700_01",
};
const sizes = {
  xs: "h-[238px] p-4 text-sm",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarFoundationWhiteW400",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarFoundationWhiteW400"]),
};

export { TextArea };
