import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import OurBranches from "./OurBranches";
import OurTeam from "./OurTeam";
import PopularServices from "./PopularServices";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>HomeHealers | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner/>
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">Popular Services</h1>
            <PopularServices/>
            <ContactUs/>
            <h1 className="font-bold text-3xl text-center mt-16 mb-5">Find US!</h1>
            <OurBranches/>
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">Our team</h1>
            <OurTeam/>
            <AboutUs/>
        </div>
    );
};

export default Home;