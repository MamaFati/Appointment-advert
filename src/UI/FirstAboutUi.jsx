const FirstAboutUI = ({ title, text, className, btn }) => {
  return (
    <div
      className={`w-[95%] lg:w-[300px]  rounded-md  h-60 p-5   ${className}`}
    >
      <h3 className="text-2xl font-semibold mb-5">{title}</h3>
      <p className="text-white font-light">{text}</p>

      {btn && <div className="mt-7">{btn}</div>}
    </div>
  );
};

export default FirstAboutUI;
