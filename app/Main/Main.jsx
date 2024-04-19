import Image from "next/image";

import Logo from "../../public/Logo.png"
import BackgroundCircles from "./BackgroundCircles";
import Layout from "../[components]/Layout/Layout"

export default function Main() {
    return(
        <Layout className="space-y-5 md:space-y-3 h-auto md:h-screen text-center">
            <BackgroundCircles />
            <Image
                className="rounded-full h-[300px] w-[300px] md:h-[150px] md:w-[150px] -z-20 mx-auto object-cover"
                src={Logo}
                priority={true}
                alt="ConnectPlus Logo" />
        </Layout>
            
        
    );
}