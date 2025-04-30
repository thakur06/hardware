import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { ImLab } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { FaMale } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/",icon :<IoHome/> },
    { name: "About", href: "/about",icon:<FaMale/> },
    { name: "Projects", href: "/projects" , icon :<ImLab/>},
    { name: "Contact", href: "/contact",icon:<IoMail/> },
    { name: "Blog", href: "/blog",icon:<FaBlog/> },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 shadow-md z-50 bg-[#18181b] text-white " style={{fontFamily:"incognito"}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <div className="text-2xl font-bold text-white">Abhishek Thakur</div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu */}
        <ul
          className={`
            flex flex-col md:flex-row md:items-center md:gap-8
            fixed md:static top-16 right-0 bg-[#18181b] 
            w-full md:w-auto h-full md:h-auto
            p-6 md:p-0
            transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
          `}
        >
          {links.map((link) => (
            <li key={link.name} className="my-2 md:my-0">
              <Link
                to={link.href}
                className="text-white hover:text-green-600 duration-200 text-lg"
                onClick={() => setOpen(false)} // close menu after clicking
              >
               <div className="flex flex-row items-center gap-2">{link.icon} {link.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
