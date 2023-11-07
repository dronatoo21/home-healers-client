import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import OurTeam from "./OurTeam";
import PopularServices from "./PopularServices";

const Home = () => {
    return (
        <div>
            <Banner/>
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">Popular Services</h1>
            <PopularServices/>
            <ContactUs/>
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">Our team</h1>
            <OurTeam/>
            <AboutUs/>
        </div>
    );
};

export default Home;