import Image from "next/image";
import Logo from "../../../public/Logo.png"
import Layout from "../../[components]/Layout/Layout"

export default function About(){
    return(
        <Layout className="flex-col space-y-10">
            <div className="flex flex-row justify-center items-center space-x-20">
                <h1 className="font-primaryTitle font-bold uppercase text-3xl md:text-4xl">About Us</h1>
                <Image 
                    className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] -z-50 mx-auto object-cover"
                    priority={true}
                    src={Logo}
                    alt="ConnectPlus Logo"/>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-4 p-4">
                <div className="flex flex-col items-center p-6 m-3 md:m-0 bg-[#161B4F] hover:bg-gradient-to-r from-navyblue to-lilac cursor-pointer rounded-lg text-center">
                    <h2 className="font-secondaryTitle font-bold text-2xl mb-5 text-white">
                        Who We Are
                    </h2>
                    <p className="font-body font-medium text-[18px] text-white">
                        ConnectPlus is a 501(c)3 nonprofit organization based in Virginia
                        dedicated to promoting mutual learning by connecting individuals of
                        distinct backgrounds yet similar interests.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 m-3 md:m-0 bg-[#161B4F] hover:bg-gradient-to-tr from-navyblue from-10% to-lilac cursor-pointer rounded-lg text-center">
                    <h2 className="font-secondaryTitle font-bold text-2xl mb-5 text-white">
                        What We Provide
                    </h2>
                    <p className="font-body font-medium text-[18px] text-white">
                        We are always looking for partnerships with more volunteers, interns,
                        school clubs, and other organizations who share our vision to make our
                        services accessible to more in need. We are happy to provide the following:
                        (1) volunteer hours, (2) community service hours, and (3) volunteer
                        certificates. Volunteering or interning experiences with ConnectPlus could
                        be put in college applications and resumes for other purposes.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#161B4F] rounded-lg m-3 md:m-0 text-center hover:bg-gradient-to-tr from-navyblue from-10% to-lilac cursor-pointer">
                    <h2 className="font-secondaryTitle font-bold text-2xl mb-5 text-white">
                        When We Found
                    </h2>
                    <p className="font-body font-medium text-[18px] text-white">
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