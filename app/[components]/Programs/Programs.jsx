import Layout from "../../[components]/Layout/Layout"

export default function Programs() {
    return (
        <Layout className="flex-col space-y-10">
            <div className="flex flex-col justify-center items-center space-y-3">
                <h1>Programs</h1>
            </div>
            <div className="w-full md:w-3/4 flex overflow-x-scroll space-x-3" >
                <div className="p-3 bg-[#2778b5] rounded-lg">
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
                <div className="p-3 bg-[#2778b5] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        Debating
                    </h2>
                    <p className="text-[18px]">
                        ConnectPlus is working with Speechc&Debate Academy to present
                        spontaneous argumentation (SPAR) courses. Speech&Debate Academy
                        is a charitable organization based in San Diego, California, USA,
                        dedicated to providing high-quality and accessible debate education.
                        All tutors from Speech & Debate Academy are highly qualified and
                        recognized professional debaters. Contact them through info@
                        learnspeechanddebate.com for more information.
                    </p>
                </div>
                <div className="p-3 bg-[#2778b5] rounded-lg">
                    <h2 className="!text-lg !tracking-[5px] mb-5 px-10 !decoration-white">
                        Writing
                    </h2>
                    <p className="text-[18px]">
                        HSE Humanities Series is designed to help students explore various humanities subjects in a liberal-arts
                        education style. In our small, engaging classrooms, students will gain plenty of individual attention and chances
                        for participation,discussion, and debate. The humanities course series focuses heavily on writing and reading in
                        order to train students’ critical thinking skills, as well as advanced English usage.
                    </p>
                </div>
                
            </div>
        </Layout>
    )
}