import React from 'react';
import pattern from "../assets/pattern.png";
import amanahwhite from "../assets/amanahwhite.png";
import socials from "../assets/socials.png";
import vector from "../assets/vector.png";
import vector2 from "../assets/vector2.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
    return (
      <footer className="bg-black text-white px-4 md:px-8"
      style={{
        paddingTop:"50px",
      }}>
        <div 
          className="text-center rounded-lg py-8 px-4 md: @media (min-width: 640px) { px-12 } mb-8 mx-auto max-w-screen-lg"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: "100%",
            maxWidth: "1061px",
            height: "auto",
            maxHeight: "400px",
            borderRadius: "20px",
            padding: "86px 33px 86px 33px",
            gap: "10px", 
            marginTop: "-200px",
            position: "relative",
            zIndex: "1",
          }}
        >
            <div className=''style={{
                width: "100%",
                height: "auto",
            }}>
          <h2 className="text-2xl font-semibold "
          style={{
          fontSize: "35px",
          fontWeight: "500",
          lineHeight: "42px",
          textAlign: "center",
          }} >
            Be the first to experience Amanah’s innovative <span className=" text-sm"
          style={{
          fontSize: "35px",
          fontWeight: "700",
          lineHeight: "42px",
          textAlign: "center",
          gap: "8px", 
          }}>Takaful solutions</span>
          </h2>
          </div>
          <span className="" style={{
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "27px",
          textAlign: "center",
          width: "100%",
          maxWidth: "469px",
          height: "auto",
          }}> Sign up now and receive early access to our app.
          </span>
          
          <div className="flex items-center justify-center pt-5">
      <a href="#" className="flex items-center py-2 px-6 bg-[#ECD55D] text-[#1E1E1E] rounded-md"
      style={{
        alignContent: "center",
        borderRadius: "4px",
        padding: "8px 16px 8px 16px",
        width: "100%",
        maxWidth: "199px",
        gap: "8px",
        height: "auto",
      }}>
          <span style={{
        fontWeight: "500",
        fontSize: "17px",
        lineHeight: "20.4px",
        width: "100%",
        maxWidth: "135px",
        height: "auto",
        }}> Join The Waitlist</span>
          <img className="h-3 ml-2" src={vector2} alt="Vector" />
        </a>
      </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start text-left max-w-screen-lg mx-auto mb-8 pt-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg" style={{
        fontWeight: "500",
        fontSize: "35px",
        lineHeight: "42px",
        width: "100%",
        maxWidth: "413px",
        height: "auto",
            }}>Get in touch with us!</h3>
            <p className="text-sm mb-4"style={{
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
        width: "100%",
        maxWidth: "413px",
        height: "auto",
            }}>Have questions or need more information? Get in touch with us</p>
          </div>
  
          <div className="flex flex-col items-center mb-2 md:mb-0">
          <p style={{
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
        width: "100%",
        textAlign: "left",
        maxWidth: "299.5px",
        height: "auto",
            }}>Email: info@amanah.qa </p>
          <span
          className=" text-sm mt-2"
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            textAlign: "left",
            width: "100%",
            maxWidth: "229.5px",
            height: "auto",
          }}
        >
          +123-456-7890
        </span> 
            <div className="flex items-center mt-2">
            <img className="h-4 mr-2" src={facebook} alt="fb" />
            <img className="h-4 mr-2" src={linkedin} alt="li" />
            <img className="h-4 mr-2" src={twitter} alt="x" />
            <img className="h-4 mr-2" src={youtube} alt="yt" />
            <span style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            textAlign: "left",
            width: "100%",
            maxWidth: "85px",
            height: "auto",
          }}>© Amanah</span>
            </div>
          </div>
  
          <div>
            <p style={{
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
        width: "100%",
        textAlign: "left",
        maxWidth: "299.5px",
        height: "auto",
            }}>Email: info@amanah.qa</p>
            <p className=" text-sm mt-2"
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            textAlign: "left",
            width: "100%",
            maxWidth: "229.5px",
            height: "auto",
          }}>Phone: 123-456-7890</p>
            <p className="text-sm mt-4">© 2024 Amanah All rights reserved.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-sm flex justify-between items-center"> 
  <img
    className="h-4"
    style={{
      width: "100%",
      maxWidth: "189.94px",
      height: "auto",
      marginBottom: "40px",
    }}
    src={amanahwhite}
    alt="amanahwhite"
  />
  <div className="text-sm text-right" style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            textAlign: "left",
            width: "100%",
            maxWidth: "167px",
            marginBottom: "40px",
            height: "auto",
          }}>
    <p>© 2024 Amanah</p>
    <p> All rights reserved.</p>
  </div>
</div>


      </footer>
    );
};

export default Footer;
