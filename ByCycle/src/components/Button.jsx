const Button = ({ innerText, className = "" }) => {
  return (
    <button className={`${className} bg-black text-white min-w-[119px] h-[48px] px-8 font-semibold rounded-[24px]`}>
      {`${innerText}`}
    </button>
  );
};

export { Button };
