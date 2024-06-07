import Layout from "../../[components]/Layout/Layout"

export default function Programs() {
    return (
        <Layout className="flex-col space-y-10">
            <div className="flex flex-row justify-center items-center space-y-3">
                <h1 className="font-bold text-3xl md:text-4xl mt-4">Programs</h1>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col justify-center md:flex-row md:space-x-4 px-4 py-6" >
                <div className="flex flex-col items-center p-6 m-3 md:m-0 text-center bg-[#2778b5] rounded-lg">
                    <h2 className="font-bold text-2xl mb-5 text-white">
                        HSE
                    </h2>
                    <p className="text-[18px] text-white">
                        Huishuo English (HSE), ConnectPlus’ most original program, is
                        dedicated to make English education accessible for more. We believe
                        that connecting with people is the best way to learn, and that
                        distance or financial concerns should never be an obstacle to
                        learning.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 m-3 md:m-0 text-center bg-[#2778b5] rounded-lg">
                    <h2 className="font-bold text-2xl mb-5 text-white">
                        TBB
                    </h2>
                    <p className="text-[18px] text-white">
                        ConnectPlus is dedicated to making education accessible to all, including people
                        with special needs. In the TangBaoBao (TBB) Program, ConnectPlus partners with
                        multiple local nonprofit organizations in China to offer specialized English courses
                        for children with Down’s Syndrome. Tutors for the TBB Program are required to
                        undergo additional training to better suit the needs of our students. In comparison
                        to 1V1 classes, classes of the TBB Program are more structured and more need-
                        sensitive.
                    </p>
                </div>
                
            </div>
        </Layout>
    )
}