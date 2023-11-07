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
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">Our team</h1>
            <OurTeam/>
            <ContactUs/>
        </div>
    );
};

export default Home;