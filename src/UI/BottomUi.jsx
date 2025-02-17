const BottomUi = (text, className) => {
  return (
    <div>
      <button
        className={`w-[300px] h-10 p-5 m-auto   rounded-md  ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
export default BottomUi;
