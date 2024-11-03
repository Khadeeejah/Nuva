import { motion } from "framer-motion";
import image from "../assets/image.png";
import vector from "../assets/vector.png";
import home from "../assets/home.png";
import health from "../assets/health.png";
import motor from "../assets/motor.png";
import travel from "../assets/travel.png";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center"
      style={{
        background: "linear-gradient(168.97deg, #4291FF -24.32%, #BFDFEC 69.19%, #FFFFFF 91.84%)",
        width: "100%",
        height: "100vh",
        borderRadius: "30px 30px 0px 0px",
        opacity: "1",
      }}
    >
      <h1 
  className="font-semibold text-white text-center tracking-widen" 
  style={{
    fontSize: "50px",
    fontWeight: "700",
    lineHeight: "50px",
    textAlign: "center",
    width: "100%",
    maxWidth: "900px",
    height: "auto",
    opacity: "1", 
  }}
>
  Get Your Personalised
</h1>
<span 
  className="font-semibold text-white text-center" 
  style={{
    fontSize: "50px",
    fontWeight: "700",
    lineHeight: "50px",
    textAlign: "center",
    width: "100%",
    maxWidth: "900px",
    height: "auto",
    opacity: "1", 
  }}
>
  Takaful Insurance Plans
</span>




      
      <p
        className="text-white"
        style={{
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30px",
          textAlign: "center",
          width: "458px",
          height: "60px",
          opacity: "1", 
        }}
      >
        Your trusted partner in personalized Takaful solutions
      </p>
      <div className="lg:flex items-center pt-5">
        <a href="#" className="flex items-center py-2 px-6 bg-[#221F20] text-[#FFFFFF] font-semibold rounded-md">
          Contact Us
          <img className="h-3 ml-2" src={vector} alt="Vector" />
        </a>
      </div>
      <div
        className="flex mt-2 justify-center"
        style={{
          width: "220px",
          height: "237px",
          padding: "23px 17px 23px 17px",
          gap: "10px",
          opacity: "0px",
        }}
      >
        <div className="flex space-x-4 justify-center">
          {/* Home Section - Hidden on small screens */}
          <div
            className="hidden md:flex flex-col items-start py-4 px-6 bg-[#FFFFFF] text-[#12BF3D] font-semibold text-left"
            style={{ borderRadius: "16px", width: "280px", height: "280px", marginTop: "70px" }}
          >
            <div className="flex items-center mb-2">
              <img className="h-4 mr-2" src={home} alt="Home" />
              <span>Home</span>
            </div>
            <span className="text-black mt-2 text-l lg:text-lg">
              QIIC Home Insurance
            </span>
            <span className="text-black mt-3 text-xs lg:text-s font-light leading-relaxed">
              Reliable protection for your home and all your valuables.
            </span>
          </div>

          {/* Health Section */}
          <div
            className="flex flex-col items-start py-4 px-6 bg-[#FFFFFF] text-[#D7B400] font-semibold text-left"
            style={{ borderRadius: "16px", width: "280px", height: "280px", marginTop: "70px" }} 
          >
            <div className="flex items-center mb-2">
              <img className="h-4 mr-2" src={health} alt="Health" />
              <span>Health</span>
            </div>
            <span className="text-black mt-2 text-l lg:text-lg">
              General Takaful Health Insurance
            </span>
            <span className="text-black mt-3 text-xs lg:text-s font-light leading-relaxed">
              Health insurance plans designed for your family’s needs.
            </span>
          </div>

          {/* Image Section */}
          <img 
            className="mr-2" 
            src={image} 
            alt="image" 
            style={{ borderRadius: "16px 16px 0px 0px", marginTop: "30px", height: "250px", width: "auto" }}
          />

          {/* Motor Section */}
          <div
            className="flex flex-col items-start py-4 px-6 bg-[#FFFFFF] text-[#851CEE] font-semibold text-left"
            style={{ borderRadius: "16px", width: "280px", height: "280px", marginTop: "70px" }} 
          >
            <div className="flex items-center mb-2">
              <img className="h-4 mr-2" src={motor} alt="Motor" />
              <span>Motor</span>
            </div>
            <span className="text-black mt-2 text-l lg:text-lg">
              Al Khaleej Motor Insurance
            </span>
            <span className="text-black mt-3 text-xs lg:text-s font-light leading-relaxed">
              Comprehensive coverage that keeps you safe on the road.
            </span>
          </div>

          {/* Travel Section - Hidden on small screens */}
          <div
            className="hidden md:flex flex-col items-start py-4 px-6 bg-[#FFFFFF] text-[#1C89EE] font-semibold text-left"
            style={{ borderRadius: "16px", width: "280px", height: "280px", marginTop: "70px" }} 
          >
            <div className="flex items-center mb-2">
              <img className="h-4 mr-2" src={travel} alt="Travel" />
              <span>Travel</span>
            </div>
            <span className="text-black mt-2 text-l lg:text-lg">
              BEEMA Travel Insurance
            </span>
            <span className="text-black mt-3 text-xs lg:text-s font-light leading-relaxed">
              Global travel insurance for your safe and secure journeys.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
