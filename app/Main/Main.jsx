import Image from "next/image";

import Logo from "../../public/Darklogo.png"
import BackgroundCircles from "./BackgroundCircles";
import Layout from "../[components]/Layout/Layout"

export default function Main() {
    return(
        <Layout className="space-y-5 md:space-y-3 h-auto md:h-screen text-center">
            <BackgroundCircles />
            <Image
                className="rounded-full h-[500px] w-[500px] md:h-[250px] md:w-[250px] -z-50 mx-auto object-cover"
                src={Logo}
                priority={true}
                alt="ConnectPlus Logo" />
        </Layout>
            
        
    );
}