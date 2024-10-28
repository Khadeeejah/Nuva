import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import vector from "../assets/vector.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-white">
        <div className="container mx-auto px-4 relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-7" src={logo} alt="logo" />
                </div>
                <ul className="hidden lg:flex space-x-12 ml-14">
                    { navItems.map((item, index)=>(
                        <li key={index}>
                            <a href={item.href} className="text-lg text-[#221F20] font-semibold hover:text-gray-500">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex items-center">
                <a href="#" className="flex items-center py-2 px-6 bg-[#ECD55D] text-[#221F20] font-semibold rounded-md hover:bg-yellow-500">
    Contact Us
    <img className="h-3 ml-2" src={vector} alt="Vector" /> {/* Add margin to the left for spacing */}
</a>

                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-1">
                                <a href="item.href">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 bg-[#ECD55D] text-[#221F20]  border rounded-md">
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  );
};

export default Navbar;