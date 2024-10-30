import React from 'react';  
import { motion } from 'framer-motion';
import pictures from "../assets/pictures.png";
import rectangle from "../assets/rectangle.png";
import ellipse from "../assets/ellipse.png";

const Spotlight = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center h-screen text-center mb-60 lg:text-left p-4"
      style={{
        height: "100%",
        marginTop: "70px",
        width: "100%",
        gap: "94px",
        flexShrink: 0,
      }}
    >
      <img
        className="w-full lg:w-1/3 h-auto mb-6 lg:mb-0 lg:mr-2"
        src={pictures}
        alt="pictures"
        style={{
          height: "auto",
          maxHeight: "400px",
          width: "100%",
          maxWidth: "500.42px",
          flexShrink: 0,
        }}
      />

<div className="flex flex-col mb-4 lg:mb-0 text-center lg:text-left" 
>
  <div className="flex items-center justify-center lg:justify-start">
    <img className="h-3 mr-2" src={ellipse} alt="ellipse" />
    <span
      className="text-[#1C89EE] lg:text-xl text-sm"  
      style={{
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "27px",
        width: "100%",
        maxWidth: "264px",
        height: "auto",
        textAlign: "left",
        opacity: "1",
      }}
    >
      latest update on Amanah
    </span>
  </div>

  <div className="flex items-center justify-center lg:justify-start"> 
    <span
      className="text-lg lg:text-xl font-bold mt-2 mb-2"
      style={{
        fontSize: "35px",
        fontWeight: "500",
        lineHeight: "42px",
        width: "100%",
        maxWidth: "522px",
        height: "auto",
        opacity: "1",
      }}
    >
      Amanah Spotlight
    </span>
  </div>

  <div className="flex items-center justify-center lg:justify-start mb-2">  
    <img className="h-4 mr-2" src={rectangle} alt="rectangle" />
    <span className="text-sm">QFTH Wave 6 Incubation</span>  
  </div>

  <span
    className="text-sm mt-2"
    style={{
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "22.5px",
      textAlign: "justify",
      width: "100%",
      maxWidth: "469px",
      height: "auto",
    }}
  >
    Amanah has been accepted into Qatar FinTech Hub’s Wave 6 incubation program. This exciting opportunity is
    providing us with unparalleled resources, mentorship, and support, allowing us to further refine our
    AI-powered Takaful solutions and bring our vision to life. We are excited to collaborate with industry
    leaders and leverage this platform to propel Amanah to new heights.
  </span>
  <span
    className="text-[#8C887C] text-sm mt-2"
    style={{
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "19.5px",
      textAlign: "justify",
      width: "100%",
      maxWidth: "469px",
      height: "auto",
    }}
  >
    Qatar 20th Sep, 2024.
  </span>

  <div className="flex items-center justify-center lg:justify-start mb-2 mt-4"> 
    <img className="h-4 mr-2" src={rectangle} alt="rectangle" />
    <span className="text-sm">Idea Camp 10 Acceptance</span>  
  </div>

  <span
    className="text-sm mt-2"
    style={{
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "22.5px",
      textAlign: "justify",
      width: "100%",
      maxWidth: "469px",
      height: "auto",
    }}
  >
    Amanah has been selected to participate in Idea Camp 10 by the Digital Incubation Center (DIC) affiliated to
    the Ministry of Communications and Information Technology (MCIT). This prestigious program will provide us
    with an opportunity to develop and expand our innovative insurance solutions. The platform will enable us to
    engage with industry experts, gain valuable insights, and refine our offerings, further accelerating Amanah’s
    mission to reshape the Takaful landscape.
  </span>
  <span
    className="text-[#8C887C] text-sm mt-2"
    style={{
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "19.5px",
      textAlign: "justify",
      width: "100%",
      maxWidth: "469px",
      height: "auto",
    }}
  >
    Qatar 20th Sep, 2024.
  </span>
  </div>
</div>
  );
};

export default Spotlight;
