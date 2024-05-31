import Image from "next/image";
import Logo from "../../../public/Logo.png"
import Layout from "../../[components]/Layout/Layout"

export default function About(){
    return(
        <Layout className="flex-col space-y-10 justify-center items-center w-full p-8 md:p-24">
            <div className="flex flex-row justify-center items-center space-x-20">
                <h1>About Us</h1>
                <Image 
                    className="h-[500px] w-[500px] md:h-[100px] md:w-[100px] -z-50 mx-auto object-cover"
                    priority={true}
                    src={Logo}
                    alt="ConnectPlus Logo"/>
            </div>
            <div className="w-full md:w-3/4 flex overflow-x-scroll space-x-3">
                <div className="p-3 bg-[#a6bee2] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        Who We Are
                    </h2>
                    <p className="text-[18px]">
                        ConnectPlus is a 501(c)3 nonprofit organization based in Virginia
                        dedicated to promoting mutual learning by connecting individuals of
                        distinct backgrounds yet similar interests.
                    </p>
                </div>
                <div className="p-3 bg-[#a6bee2] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        What We Provide
                    </h2>
                    <p className="text-[18px]">
                        We are always looking for partnerships with more volunteers, interns,
                        school clubs, and other organizations who share our vision to make our
                        services accessible to more in need. We are happy to provide the following:
                        (1) volunteer hours, (2) community service hours, and (3) volunteer
                        certificates. Volunteering or interning experiences with ConnectPlus could
                        be put in college applications and resumes for other purposes.
                    </p>
                </div>
                <div className="p-3 bg-[#a6bee2] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        When We Found
                    </h2>
                    <p className="text-[18px]">
                        ConnectPlus was founded in 2020 with the goal of bridging people
                        across cultural, language, and geographical barriers. As of December
                        2022, we have connected over 1300 people for general English lessons,
                        debate lessons, and social opportunities, hosting over 9500 courses.
                    </p>
                </div>
                
                
            </div>
        </Layout>
    );
}