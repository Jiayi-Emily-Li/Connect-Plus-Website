import Main from "./Main/Main";
import About from "./[components]/About/About"
import Programs from "./[components]/Programs/Programs"
import Courses from "./[components]/Courses/Courses";
import GoToTopButton from './[components]/GoToTopButton';
import Hero from "./[components]/Hero/Hero";

export default function Home() {
    return (
       <>
        <section id="hero">
            <Hero />
        </section>
        {/* <section id="main">
            <Main />
        </section> */}
        <section id="about">
            <About />
        </section>

       <section id="programs">
            <Programs />
        </section>

        <section id="courses">
            <Courses />
        </section> 
        {/* <section id="courses">
            <Register />
        </section>  */}

        {/* <section id="scheduling">
            <Scheduling />
        </section>  */}
          <GoToTopButton />
       </>
    );
};