import Lottie from "lottie-react";
import starAnim from "../../assets/starAnimation.json"
const AboutUs = () => {
    return (
        <div className="flex p-5 lg:p-0 rounded-lg mb-16">
            <div className="hero bg-[#e4eef4] shadow-md rounded-lg">
              <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                <Lottie className="w-1/2" animationData={starAnim}/>
                <div className="text-center lg:text-start">
                  <h1 className="text-5xl text-black font-bold">About Us!</h1>
                  <p className="py-6">At HomeHealers, we are dedicated to enhancing your homes comfort and functionality. Our experienced professionals provide a range of offline home services, from repairs to maintenance, with a focus on expertise, reliability, and affordability. Your satisfaction is our priority. Trust HomeHealers to make your house a better home.</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default AboutUs;