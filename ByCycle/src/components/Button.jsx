
const Button = ({ innerText, className = "" }) => {
  return (
    <button
      type="submit" className={`${className} bg-[#232323] text-white min-w-[119px] h-[48px] px-8 font-semibold rounded-[24px] hover:text-black hover:bg-white hover:border-black border border-solid transition-all`}
    >
      {`${innerText}`}
    </button>
  );
};

export default Button;
