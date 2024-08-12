"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Courses', href: '#courses' },
    { label: '1V1 Scheduling', href: '#scheduling' },
    { label: 'Become a tutor', href: '#tutor' },
    { label: 'Contact us', href: '#contact' },
  ]
  return (
    <div>
      <nav className="w-full bg-[#161B4F] top-0 left-0 right-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src="/navlogo.png" width={80} height={80} alt="logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoMdClose size={30} color="#FFFFFF" />
                  ) : (
                    <GiHamburgerMenu size={30} color="#FFFFFF" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {links.map(link => 
                  <Link
                    key={link.href}
                    className="pb-6 md:pb-3 text-base md:text-xs lg:text-base font-bold  text-white py-2 px-6 md:px-3 lg:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#87CEEB]  border-[#87CEEB]  md:hover:text-[#87CEEB] md:hover:bg-transparent"
                    href={link.href}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}>{link.label}</Link>)}
                <li className="flex justify-center mt-10 md:mt-0">
                  <Link href="/signin" passHref >
                    <button className="text-base md:text-xs lg:text-base font-bold text-[#000000] py-4 md:py-3 px-6 text-center md:border-b-0 hover:bg-[#87CEEB] border-[#87CEEB] bg-[#87CEEB] hover:bg-gradient-to-r from-skyblue to-lilac cursor-pointer rounded-md hover:text-[#000000] md:hover:border-b-[#ffffff]">
                      Sign in
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
