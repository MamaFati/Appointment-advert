const BottomUi = (text, className) => {
  return (
    <div className={`w-[300px] h-10 p-5 m-auto shadow-md ${className}`}>
      <button>{text}</button>
    </div>
  );
};
export default BottomUi;
