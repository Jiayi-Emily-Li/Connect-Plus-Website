import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-[#161B4F] h-[80px] mt-8 bottom-0 p-6 flex justify-between items-center">
      <p className="text-white hover:text-[#87CEEB]">
        &copy; <a href="/">ConnectPlus</a>
      </p>
      <div className="flex gap-4 p-6 text-white text-xl cursor-pointer">
        <a
          href="https://www.instagram.com/connectplusofficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-[#87CEEB]" />
        </a>
        <a
          href="https://www.linkedin.com/company/connectplus-nonprofit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-[#87CEEB]" />
        </a>
      </div>
    </div>
  );
}
