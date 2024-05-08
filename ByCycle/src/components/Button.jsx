import React from "react";

// eslint-disable-next-line react/prop-types
function Button({ label, customclass }) {
  return (
    <button
      className={`${customclass} bg-black text-white rounded-3xl py-2.5 px-5 border border-white hover:bg-white hover:text-black hover:border-black hover:border hover:border-solid`}
    >
      {label}
    </button>
  );
}

export default Button;
