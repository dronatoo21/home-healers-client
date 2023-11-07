import Banner from "./Banner";
import PopularServices from "./PopularServices";

const Home = () => {
    return (
        <div>
            <Banner/>
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">Popular Services</h1>
            <PopularServices/>
        </div>
    );
};

export default Home;