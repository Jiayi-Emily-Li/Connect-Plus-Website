import Main from "./Main/Main"
import About from "./[components]/About/About"
import Programs from "./[components]/Programs/Programs"

export default function Home() {
    return (
       <>
        <section id="main">
            <Main />
        </section>

        <section id="about">
            <About />
        </section>

       <section id="programs">
            <Programs />
        </section>

         {/* <section id="courses">
            <Courses />
        </section>

        <section id="scheduling">
            <Scheduling />
        </section> */}
       </>
    );
};