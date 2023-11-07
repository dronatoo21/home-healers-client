import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = useLoaderData();
    return (
        <div className="my-10 p-7">
            <h1 className="font-bold text-3xl text-center mb-2">All Services</h1>
            {
                services.map(service => <ServiceCard key={service._id} service={service}/>)
            }
        </div>
    );
};

export default Services;