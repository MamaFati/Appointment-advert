const ServiceCard = ({
  image,
  title,
  description1,
  description2,
  className,
  ImgClass,
  textClass,
}) => {
  return (
    <div
      className={`bg-white mt-10 p-6 w-[80%] m-auto   transition-transform transform hover:scale-105    ${className}`}
    >
      <div>
        <img src={image} alt={title} className={` ${ImgClass}`} />
      </div>
      <div className={`${textClass}`}>
        <h3 className="text-5xl   text-grey-800 mb-3">{title}</h3>
        <p className="text-gray-700 mb-3">{description1}</p>
        <p className="text-gray-700">{description2}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
