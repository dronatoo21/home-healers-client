import Lottie from "lottie-react";
import ghostAnime from "../../assets/ghostAnimation.json"
const ServiceNotFound = () => {
    return (
        <div className="my-7">
            <h1 className="text-lg text-center font-medium">Did not match any documents with your Search.</h1>
            <Lottie className="w-1/3 mx-auto" animationData={ghostAnime}/>
        </div>
    );
};

export default ServiceNotFound;