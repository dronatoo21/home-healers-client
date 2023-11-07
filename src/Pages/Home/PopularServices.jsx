import { useEffect } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopularServices = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="p-5">
            {
                services?.slice(0, 4).map(service => <PopularServiceCard key={service?._id} service={service}/>)
            }
            <div className="flex justify-center">
                <Link className="btn btn-neutral my-5" to="/services"><button>Show All</button></Link>
            </div>
        </div>
    );
};

export default PopularServices;