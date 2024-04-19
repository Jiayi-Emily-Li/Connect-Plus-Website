import Image from "next/image";

import Logo from "../../public/Logo.png"

export default function Main() {
    return(
        <Image
            className="rounded-full h-[200px] w-[200px] md:h-[150px] md:w-[150px] -z-20 mx-auto object-cover"
            src={Logo}
            alt="ConnectPlus Logo"
        />
    );
}