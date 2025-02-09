import ServicesUi from "../UI/ServicesUi";
import servicesImage from "../assets/Website_NewCrystalHospital_1200x800px.jpg";
function ServiceComponent() {
  return (
    <div>
      <ServicesUi
        className={"flex flex-col gap-6 items-center lg:flex-row"}
        image={servicesImage}
        title="Advanced Care, Personalized for You."
        description1="At New Crystal Health, we offer comprehensive medical solutions all in one place. Our services are designed to meet all your healthcare needs with utmost efficiency and care."
        description2="From general consultations to specialized treatments, our team of dedicated professionals is here to ensure you receive the best possible care. Experience a seamless healthcare journey with us, where your well-being is our top priority."
      />
    </div>
  );
}
export default ServiceComponent;
