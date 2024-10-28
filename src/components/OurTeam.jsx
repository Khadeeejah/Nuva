import ajiri from "../assets/ajiri.png";
import shaz from "../assets/shaz.png";
import labeeba from "../assets/labeeba.png";
import khadeejah from "../assets/khadeejah.png";

export const OurTeam = () => {
  return (
    <div className="flex flex-col items-center mt-20 w-full max-w-[1280px] px-4" style={{
        width: "100%",
        maxWidth: "1280px",
        height: "644px",
        gap: "58px",
      }}>
      <div className="text-center mt-10 md:mt-20">
        <span className="text-blue-500 h-6 text-sm font-semibold px-2"
          style={{
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "27px",
          textAlign: "center",
          width: "100%",
          maxWidth: "117px",
          height: "27px",
          gap: "8px", 
          }}
        >
          • Our Team
        </span>
        <p
          className="text-black text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium mt-2 max-w-xl"
          style={{
            fontSize: "35px",
            fontWeight: "500",
            lineHeight: "42px",
            textAlign: "center",
            width: "100%",
            maxWidth: "662px",
            height: "",
            maxHeight: "124px",
            opacity: "1", 
          }}
        >
          Passionate experts, revolutionizing an underserved sector
        </p> 
        <p
          className="text-black text-base sm:text-lg md:text-xl text-center font-light"
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            textAlign: "center",
            width: "100%",
            maxWidth: "736px",
            height: "100%",
            maxHeight: "54px",
            opacity: "1", 
          }}
        >
          Composed of specialists in Islamic finance, advanced technology, product design, and business management, with proven founding experience.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8 space-x-4 gap-y-4">
  <div className="flex flex-col items-start w-[255px]">
    <img
      className="w-[255px] h-[255px]"
      src={ajiri}
      alt="ajiri"
      style={{
        gap: "24px",
      }} 
    />
    <p className="text-left text-sm">Ajiri Omafokpe</p>
    <p className="text-left text-xs text-gray-500">Chief Product Officer (CPO)</p>
  </div>
  <div className="flex flex-col items-start w-[255px]">
    <img
      className="w-[255px] h-[255px]"
      src={shaz}
      alt="shaz"
      style={{
        gap: "24px",
      }} 
    />
    <p className="text-left text-sm">Shaz Mohamed</p>
    <p className="text-left text-xs text-gray-500">Chief Executive Officer (CEO)</p>
  </div>
  <div className="flex flex-col items-start w-[255px]">
    <img
      className="w-[255px] h-[255px]"
      src={labeeba}
      alt="labeeba"
      style={{
        gap: "24px",
      }} 
    />
    <p className="text-left text-sm">Labeeba Ahmed</p>
    <p className="text-left text-xs text-gray-500">Chief Financial Officer (CFO)</p>
  </div>
  <div className="flex flex-col items-start w-[255px]">
    <img
      className="w-[255px] h-[255px]"
      src={khadeejah}
      alt="khadeejah"
      style={{
        gap: "24px",
      }} 
    />
    <p className="text-left text-sm" style={{
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "24px",
          width: "100%",
          maxWidth: "305px",
          height: "24px", 
          }}>Khadijah Amusat</p>
    <p className="text-left text-xs text-[#1C89EE]" style={{
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "24px",
          width: "100%",
          maxWidth: "305px",
          height: "24px", 
          }}>Chief Technology Officer (CTO)</p>
  </div>
</div>

    </div>
  );
};
