import Main from "./Main/Main"
import About from "./[components]/About/About"
import Programs from "./[components]/Programs/Programs"
import SignIn from "./[components]/SignIn/Register"


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

        <section id="signin">
            <SignIn />
        </section>
       </>
    );
};