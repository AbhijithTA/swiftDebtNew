import { Link } from "react-router-dom";
import video from "../../assets/Video/HeroVideo.mp4";

const HeroSectionComponent = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full space-y-6 px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg font-poppins">
          Efficient debt recovery as swift as it could be.
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-2">
          Debt Collection - No Win No Fee
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-md md:text-lg font-light max-w-3xl">
          All debt recovery cases are undertaken on a “No Win No Fee” basis
          where we only charge a commission against monies recovered.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link to="/services">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg">
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#27405A] py-10 text-white flex flex-col justify-between items-center space-y-6 md:space-y-0 px-8 rounded-lg shadow-lg">
        {/* Call Back Request Section */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 px-6 py-8 bg-gradient-to-r from-blue-900 to-blue-400 rounded-lg shadow-lg">
          {/* Request A Call Back Section */}
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:items-start">
            <Link to="/contactUs">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide border border-white rounded-lg px-4 py-2 text-center md:text-left">
                REQUEST A CALL BACK
              </h3>
            </Link>
            <p className="text-gray-200 text-sm md:text-base lg:text-lg mt-1 md:mt-0 leading-relaxed w-full md:w-2/3 lg:w-1/2 font-medium">
              We are a Claims Recovery and Financial Management Services company
              based in Dubai, UAE. Our support team is ready to assist you in
              UAE,KSA,Bahrain and Oman.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        {/* <div className="text-center px-6 mt-5">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            Equally critical is that we:
          </h3>
          <ul className="text-gray-300 text-sm md:text-base mt-2 space-y-2">
            <li>
              ✔️ Act with responsibility and professionalism to protect your
              reputation.
            </li>
            <li>✔️ Educate your customers to respect your credit terms.</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSectionComponent;
