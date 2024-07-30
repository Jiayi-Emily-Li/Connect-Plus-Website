import Layout from "../../[components]/Layout/Layout";

export default function Courses() {
  return (
    <Layout className="flex-col space-y-10">
      <div className="flex flex-row justify-center items-center space-y-3">
        <h1 className="font-primaryTitle uppercase font-bold text-3xl md:text-4xl mt-4 animate-bounce-in underline underline-offset-8">
          Courses
        </h1>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col justify-center md:flex-row md:space-x-4 px-4 py-6">
        <div className="flex flex-col items-center p-6 m-3 md:m-0 text-center bg-[#161B4F] hover:bg-gradient-to-tr from-skyblue to-lilac cursor-pointer transition ease-in-out delay-150 rounded-lg text-white hover:text-black">
          <h2 className="font-secondaryTitle font-bold text-2xl mb-5">
            1V1
          </h2>
          <p className="font-body font-medium text-[18px]">
            HSE’s 1V1 English Course focuses on teaching students practical oral
            English skills, which will help them navigate through complex
            interactions with various people. The suggested 1V1 curriculum
            revolves around diverse themes of conversation that might arise in
            real life, ranging from the most basic self-introduction to deeper
            discussions of societal issues. However, on top of the curriculum,
            tutors are free to adjust to the student’s needs and devise their
            own lesson plans.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 m-3 md:m-0 text-center bg-[#161B4F] hover:bg-gradient-to-tr from-skyblue to-lilac cursor-pointer transition ease-in-out delay-150  rounded-lg text-white hover:text-black">
          <h2 className="font-secondaryTitle font-bold text-2xl mb-5">
            Debating
          </h2>
          <p className="font-body font-medium text-[18px]">
            ConnectPlus is working with Speechc&Debate Academy to present
            spontaneous argumentation (SPAR) courses. Speech Debate Academy is a
            charitable organization based in San Diego, California, USA,
            dedicated to providing high-quality and accessible debate education.
            All tutors from Speech & Debate Academy are highly qualified and
            recognized professional debaters. Contact them through info@
            learnspeechanddebate.com for more information.
          </p>
        </div>
           <div className="flex flex-col items-center p-6 m-3 md:m-0 text-center bg-[#161B4F] hover:bg-gradient-to-tr from-skyblue to-lilac cursor-pointer transition ease-in-out delay-150 rounded-lg text-white hover:text-black">
          <h2 className="font-secondaryTitle font-bold text-2xl mb-5">
            Writing
          </h2>
          <p className="font-body font-medium text-[18px]">
            HSE Humanities Series is designed to help students explore various
            humanities subjects in a liberal-arts education style. In our small,
            engaging classrooms, students will gain plenty of individual
            attention and chances for participation,discussion, and debate. The
            humanities course series focuses heavily on writing and reading in
            order to train students’ critical thinking skills, as well as
            advanced English usage. Intern tutors will be responsible for
            self-designing and teaching the entire course. Specifics of the
            course (including course content, class format, assessment style
            etc.) might vary depending on individual tutors and courses. Past
            course subjects include Western Moral Philosophy, Literature
            Analysis, Linguistics, and World History.
          </p>
        </div>
      </div>
       
    </Layout>
  );
}
