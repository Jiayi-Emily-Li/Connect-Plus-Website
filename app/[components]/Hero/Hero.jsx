import NavbarNew from "@/app/NavbarNew";
import Layout from "../../[components]/Layout/Layout";

export default function Hero() {
    return (
        <Layout className="flex-col space-y-10">
            <div className="hero-section flex flex-col justify-start items-center min-h-screen w-full">
                <NavbarNew />
                {/* <Image src={background} alt="hero-image" className="w-[100%] h-[1000px] md:h-[1000px] md:w-[100%] object-cover"/> */}
                <div className="py-6 max-w-3xl text-center">
                    <h1 className="text-[#161B4F] tracking-wide text-4xl md:text-5xl font-semibold md:leading-[1.3]">Empower Growth Through Connection and Learning</h1>     
                    <p className="mt-4 text-[#161B4F]">At ConnectPlus, we bridge cultural and linguistic gaps by connecting passionate volunteers with eager
                    learners for free personalized English learning.</p>   
                    <div className="mt-8 flex justify-center">
                    <button className="text-[#161B4F] border border-black rounded-md hover:border-transparent hover:shadow-lg hover:bg-[#161B4F] hover:text-white p-3 mr-8">Become a Tutor</button> 
                    <button className="text-[#161B4F] border border-black rounded-md hover:border-transparent hover:shadow-lg hover:bg-[#161B4F] hover:text-white p-3 mr-8">Join a Course</button>    
                    </div>        
                </div>
            </div>
        </Layout>
    )
}