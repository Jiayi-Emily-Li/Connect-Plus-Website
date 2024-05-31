import Layout from "../../[components]/Layout/Layout"

export default function Programs() {
    return (
        <Layout className="flex-col space-y-10 justify-center items-center w-full p-8 md:p-24">
            <div className="flex flex-col justify-center items-center space-y-3">
                <h1>Programs</h1>
            </div>
            <div className="w-full md:w-3/4 flex overflow-x-scroll space-x-3" >
                <div className="p-3 bg-[#a6bee2] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        HSE
                    </h2>
                    <p className="text-[18px]">
                        Huishuo English (HSE), ConnectPlus’ most original program, is
                        dedicated to make English education accessible for more. We believe
                        that connecting with people is the best way to learn, and that
                        distance or financial concerns should never be an obstacle to
                        learning.
                    </p>
                </div>
                <div className="p-3 bg-[#a6bee2] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        TBB
                    </h2>
                    <p className="text-[18px]">
                        ConnectPlus is dedicated to making education accessible to all, including people
                        with special needs. In the TangBaoBao (TBB) Program, ConnectPlus partners with
                        multiple local nonprofit organizations in China to offer specialized English courses
                        for children with Down’s Syndrome. Tutors for the TBB Program are required to
                        undergo additional training to better suit the needs of our students. In comparison
                        to 1V1 classes, classes of the TBB Program are more structured and more need-
                        sensitive.
                    </p>
                </div>
                <div className="p-3 bg-[#a6bee2] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        WeConnect
                    </h2>
                    <p className="text-[18px]">
                        WeConnect is an online social opportunity aimed at connecting high
                        school students going through the college application process with
                        current college/ university students. Through our livestream info
                        session, livestream college interviews, short videos, and other social
                        media activities, participants will gain firsthand information of
                        college application and college experiences, including school
                        statistics, academics, social life, and much more.
                    </p>
                </div>
                
            </div>
        </Layout>
    )
}