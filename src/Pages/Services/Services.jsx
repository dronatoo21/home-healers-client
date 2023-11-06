import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = useLoaderData();
    return (
        <div className="my-10 p-7">
            {
                services.map(service => <ServiceCard key={service._id} service={service}/>)
            }
        </div>
    );
};

export default Services;