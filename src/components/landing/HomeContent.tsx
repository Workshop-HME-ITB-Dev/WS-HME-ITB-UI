import AboutUs from "./component/AboutUs";
import Cta from "./component/Cta";
import DisplayCarousel from "./component/DisplayCarousel";
import OurCommitment from "./component/OurCommitment";
import OurServices from "./component/OurServices";

const HomeContent = (): JSX.Element => {
    return (
        <main>
            <div className="flex flex-col bg-white min-h-screen justify-start">
                <section id='services' className="container max-w-none mx-auto ">
                    <DisplayCarousel />
                </section>
                <section id='aboutus' className="container bg-gray-50 max-w-none mx-auto relative">
                    <AboutUs />
                </section>
                <section id='services' className="container bg-ws-orange max-w-none mx-auto">
                    <OurServices />
                </section>
                <section id='commitment' className="container bg-gray-50 max-w-none mx-auto relative ">
                    <OurCommitment />
                </section>
                <section id='project' className="container bg-gray-50 max-w-none mx-auto relative">
                    <Cta />
                </section>
            </div >
        </main >
    );
}

export default HomeContent;