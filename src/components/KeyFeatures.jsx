import { motion } from "framer-motion";
import qdb from "../assets/qdb.png";
import dic from "../assets/dic.png";
import qfc from "../assets/qfc.png";
import qfth from "../assets/qfth.png";
import ai from "../assets/ai.png";
import signup from "../assets/signup.png";
import providers from "../assets/providers.png";
import companyname from "../assets/companyname.png";
import learn from "../assets/learn.png";
import pinterest from "../assets/pinterest.png";
import amanahmockup from "../assets/amanahmockup.png";
import peace from "../assets/peace.png";
import person from "../assets/person.png";
import education from "../assets/education.png";

const slideInVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const KeyFeatures = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4 md:px-8">
      <motion.div
        className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0 max-w-full px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariants}
      >
        <p className="text-sm font-light text-[#8C887C] text-center md:text-left md:mr-20">
          We are <span className="font-bold">recognized</span> and<br />
          <span className="font-bold">supported by industry leaders</span>
        </p>
        
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
          <img className="h-12 md:h-14" src={qdb} alt="qdb" />
          <img className="h-12 md:h-14" src={dic} alt="dic" />
          <img className="h-12 md:h-14" src={qfc} alt="qfc" />
          <img className="h-12 md:h-14" src={qfth} alt="qfth" />
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-10 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariants}
      >
        <span className="text-blue-500 rounded-full h-6 text-sm font-semibold px-2" style={{
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "27px",
          textAlign: "center",
          width: "100%",
          maxWidth: "117px",
          height: "27px",
          opacity: "1", 
        }}>
          • Key Features
        </span>
        <p className="text-black text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium mt-2 max-w-xl" style={{
          fontSize: "35px",
          fontWeight: "500",
          lineHeight: "42px",
          textAlign: "center",
          width: "100%",
          height: "84px",
          opacity: "1", 
        }}>
          All your insurance needs in one place, ethically tailored for you.
        </p>
      </motion.div>

      <motion.div
  className="flex flex-col lg:flex-row items-start py-4 px-6 bg-[#F7FAFB] text-[#000000] font-semibold text-left rounded-lg mt-10 lg:mt-20 max-w-full"
  style={{
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    maxWidth:"955px",
    height: "100%",
    minHeight: "380px",
    marginTop: "100px",
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={slideInVariants}
>
  <div className="flex flex-col mb-4 lg:mb-0 lg:mr-4 flex-1">
    <div className="flex items-center mb-2">
      <img
        className="h-16 w-16 mr-2"
        src={ai}
        alt="Home"
        style={{ width: "64px", height: "64px", gap: "16px" }}
      />
    </div>
    <span
      className="text-black mt-2 leading-relaxed text-xl lg:text-2xl"
      style={{
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "28.8px",
        textAlign: "left",
        width: "100%",
        minWidth: "323px",
        height: "58px",
        opacity: "1",
      }}
    >
      Your unique needs, our AI delivers
    </span>
    <span
      className="text-black leading-relaxed text-lg"
      style={{
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "27px",
        textAlign: "left",
        width: "100%",
        height: "81px",
        opacity: "1",
      }}
    >
      Our AI analyzes your requirements and finds the best policy that matches your needs.
    </span>
  </div>
  <img
    className="w-full lg:w-1/3 h-auto mt-4 lg:mt-0" // Responsive stacking for smaller screens
    src={signup}
    alt="signup"
    style={{
      height: "100%",
      maxHeight: "300px",
      width: "100%",
      maxWidth: "390px",
      flexShrink: 0,
    }}
  />
</motion.div>

      
      <motion.div className="flex flex-col md:flex-row max-w-full" style={{ gap: "20px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInVariants}>
        <div className="flex flex-col items-start py-4 px-6 bg-[#F7FAFB] text-[#000000] font-semibold text-left rounded-lg w-full md:w-1/2" style={{
      borderRadius: "20px",
      padding: "40px",
      width: "100%",
      maxWidth:"466px",
      gap: "16px",
      height: "631px",
      marginTop: "70px",
    }} >
          <div className="flex items-center mb-2">
            <img className="h-16 w-16 mr-2" src={providers} alt="providers" style={{ width: "64px", height: "64px", gap: "16px" }}/>
          </div>
          <span className="text-black mt-4 leading-relaxed text-xl md:text-2xl" style={{
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "28.8px",
        textAlign: "left",
        width: "100%",
        opacity: "1", 
      }}>
            All the best providers, at your fingertips
          </span>
          <span className="text-black mt-3 leading-relaxed text-lg" style={{
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "27px",
        textAlign: "left",
        width: "100%",  
        opacity: "1", 
      }}>
            We gather the most credible Takaful companies across all major categories.
          </span>
          <img className="w-full mt-4" src={companyname} alt="companyname" style={{
        height: "auto",
        width: "100%",
        maxWidth: "390px",
        marginTop: "20px",
        flexShrink: 0,
      }}/>
        </div>

        <div className="flex flex-col items-start py-4 px-6 bg-[#F7FAFB] text-[#000000] font-semibold text-left rounded-lg w-full md:w-1/2" style={{
      borderRadius: "20px",
      padding: "40px",
      width: "100%",
      maxWidth: "466px",
      gap: "16px",
      height: "631px",
      marginTop: "70px",
    }}>
          <div className="flex items-center mb-2">
            <img className="h-16 w-16 mr-2" src={learn} alt="learn" style={{ width: "64px", height: "64px", gap: "16px" }}/>
          </div>
          <span className="text-black mt-4 leading-relaxed text-xl md:text-2xl"  style={{
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "28.8px",
        textAlign: "left",
        width: "100%", 
        opacity: "1", 
      }}>
            Learn Takaful, effortlessly
          </span>
          <span className="text-black mt-3 leading-relaxed text-lg" style={{
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "27px",
        textAlign: "left",
        width: "100%", 
        height: "81px", 
        opacity: "1", 
      }}>
            Understand how Takaful works with our easy-to-digest, quick educational content.
          </span>
          <img className="w-full mt-4" src={pinterest} alt="pinterest" style={{
        height: "auto",
        width: "100%",
        maxWidth: "390px",
        marginTop: "20px",
        flexShrink: 0,
      }} />
        </div>
      </motion.div>

      <motion.div
  className="flex flex-col lg:flex-row items-start py-4 px-6 bg-[#323132] text-[#FFFFFF] font-semibold text-left rounded-lg mt-10 lg:mt-20 max-w-full"
  style={{
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    height: "100%",
    minHeight: "591px",
    marginTop: "70px",
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={slideInVariants}
>
  <div className="flex flex-col mb-4 lg:mb-0 lg:mr-4 flex-1">
    <span
      className="text-white mt-4 leading-relaxed text-2xl lg:text-3xl"
      style={{
        fontSize: "35px",
        fontWeight: "500",
        lineHeight: "28.8px",
        textAlign: "left",
        width: "100%",
        height: "42px",
        opacity: "1",
      }}
    >
      How Amanah works?
    </span>
    <span
      className="text-white mt-3 text-lg lg:text-xl"
      style={{
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "27px",
        textAlign: "left",
        width: "100%",
        height: "54px",
        opacity: "1",
      }}
    >
      Simple, fast, and personalized insurance in 3 easy steps.
    </span>

    <div
      className="flex flex-col bg-[#F4F4F4] text-[#323132] font-semibold text-left rounded-lg p-4 mt-6 max-w-sm w-full lg:max-w-xs"
      style={{
        borderRadius: "8px",
        padding: "16px 20px",
        width: "100%",
        maxWidth: "414px",
        height: "100%",
        maxHeight: "113px",
        gap: "8px",
      }}
    >
      <div className="flex items-center gap-2">
        <img src={person} alt="person" />
        <span
          className="text-lg lg:text-xl font-bold"
          style={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "27px",
            textAlign: "left",
            opacity: "1",
            width: "100%",
            minWidth: "250px",
            height: "27px",
            gap: "16px",
          }}
        >
          Sign Up | Share Your Needs
        </span>
      </div>
      <span
        className="text-sm mt-2"
        style={{
          fontSize: "15px",
          fontWeight: "400",
          lineHeight: "22.5px",
          textAlign: "left",
          opacity: "1",
          width: "100%",
          minWidth: "250px",
          height: "69px",
        }}
      >
        Create an account and tell our AI what you’re looking for.
      </span>
    </div>

    <div
      className="flex flex-col bg-[#F4F4F4] text-[#323132] font-semibold text-left rounded-lg p-4 mt-4 max-w-sm w-full lg:max-w-xs"
      style={{
        borderRadius: "8px",
        padding: "16px 20px",
        width: "100%",
        maxWidth: "414px",
        height: "100%",
        marginTop: "16px",
        gap: "8px",
      }}
    >
      <div className="flex items-center gap-2">
        <img src={education} alt="education" />
        <span
          className="text-lg lg:text-xl font-bold"
          style={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "27px",
            textAlign: "left",
            opacity: "1",
            width: "100%",
            maxWidth: "300px",
            height: "35px",
            gap: "16px",
          }}
        >
          Select from Aggregated Policies
        </span>
      </div>
    </div>

    <div
      className="flex flex-col bg-[#F4F4F4] text-[#323132] font-semibold text-left rounded-lg p-4 mt-4 max-w-sm w-full lg:max-w-xs"
      style={{
        borderRadius: "8px",
        padding: "16px 20px",
        width: "100%",
        maxWidth: "414px",
        height: "59px",
        marginTop: "16px",
        gap: "8px",
      }}
    >
      <div className="flex items-center gap-2">
        <img src={peace} alt="peace" />
        <span
          className="text-lg lg:text-xl font-bold"
          style={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "27px",
            textAlign: "left",
            opacity: "1",
            width: "100%",
            maxWidth: "250px",
            height: "27px",
            gap: "16px",
          }}
        >
          Enjoy Peace of Mind
        </span>
      </div>
    </div>
  </div>

  <img
    className="ml-0 lg:ml-4 w-full lg:w-1/3 h-auto mt-4 lg:mt-0"
    src={amanahmockup}
    alt="amanahmockup"
    style={{
      height: "100%",
      maxHeight: "471px",
      width: "100%",
      maxWidth: "572px",
      marginTop: "10px",
      borderRadius: "20px",
      flexShrink: 0,
    }}
  />
</motion.div>



      <motion.div className="text-center mt-10 md:mt-20"
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ duration: 0.5, delay: 1.6 }}>
        <span className="text-blue-500 h-6 text-sm font-semibold px-2" style={{
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "27px",
          textAlign: "center",
          width: "100%",
          maxWidth: "107px",
          height: "27px",
          opacity: "1", 
        }}>
          • Our Mission
        </span>
        <p className="text-black text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium mt-2 max-w-xl" style={{
            fontSize: "35px",
            fontWeight: "500",
            lineHeight: "42px",
            textAlign: "center",
            width: "100%",
            maxWidth: "690px",
            height: "126x",
            opacity: "1", 
          }}>
          We are on a mission to ensure users receive tailored coverage that meets their unique needs.
        </p>
      </motion.div>
    </div>
  );
};

export default KeyFeatures;
