import Image from "next/image";
// import Logo from "../../public/Darklogo.png"
// import BackgroundCircles from "./BackgroundCircles";
import Layout from "../[components]/Layout/Layout"
import background from "../../public/background.jpg";

export default function Main() {
    return(
        <Layout>
           
            <div className="relative flex justify-center items-center min-h-screen bg-[#a6bee2]">
                {/* <div className="relative z-10">
                <BackgroundCircles /> 
                    <Image
                        className="bg-[#a6bee2] rounded-full h-[500px] w-[500px] md:h-[250px] md:w-[250px] -z-50 mx-auto object-cover"
                        src={Logo}
                        priority={true}
                        alt="ConnectPlus Logo" />
                </div> */}
                {/* <Image src={background} alt="hero-image" className="w-[100%] h-[100%] md:h-[100%] md:w-[100%] object-cover"/> */}
            </div>
            
        </Layout>
            
        
    );
}