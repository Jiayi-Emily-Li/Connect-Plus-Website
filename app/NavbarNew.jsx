"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";

export default function NavbarNew() {
    const links = [
        { label: 'Home', href: '#home' },
        { label: 'Programs', href: '#programs' },
        { label: 'Course', href: '#course' },
        { label: 'Become a tutor', href: '#tutor' },
        { label: 'About', href: '#about' },
      ]
    return (
        <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* LOGO */}
                        <Link href="/">
                            <Image src="/ConnectPlus.png" width={100} height={100} alt="connect plus logo" />
                        </Link>
                </div>
           
            <ul className="md:h-auto items-center justify-center md:flex">
                <li>{links.map(link => 
                  <Link
                    key={link.href}
                    className="pb-6 md:pb-3 text-base md:text-xs lg:text-base text-[#161B4F] py-0 px-6 md:px-3 lg:px-6 text-center  hover:font-bold  md:hover:font-bold"
                    href={link.href}
                    duration={500}>
                   {link.label}</Link>)}
                   </li>
                   <li className="ml-12">
                   <Link href="/signin">
                      <button className="flex space-x-2 items-center text-base md:text-xs lg:text-base text-[#000000] py-4 md:py-0 px-6 text-center cursor-pointer hover:font-bold">
                      <FaRegUserCircle /> 
                      <p>Sign in</p>
                      </button>
                  </Link>
                        </li>
                    </ul>
                    
                    </div>
        </nav>
    )
}