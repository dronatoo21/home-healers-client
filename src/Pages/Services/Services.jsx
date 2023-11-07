import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import ServiceNotFound from "./ServiceNotFound";

const Services = () => {
    const services = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [serchedProducts, setSearchProducts] = useState(services);
    const handleSearch = () => {
    const filteredProducts = services.filter((product) =>
    product.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setSearchProducts(filteredProducts)
    };
    console.log(serchedProducts);
    return (
        <div className="mb-10 mt-1 pb-7 lg:px-0 lg:pb-0">
            <div className="mb-4 bg-[#e4eef4] lg:h-20 px-10 py-4 rounded-lg flex justify-center lg:justify-normal">
                    <input type="text" name="searchField" placeholder="Search Services" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="input input-bordered input-info w-full mr-2 max-w-xs" required/>
                    <button onClick={handleSearch} className="btn btn-neutral">Search</button>
            </div>
            <h1 className="font-bold text-3xl text-center mt-5 mb-2">All Services</h1>
            {
               serchedProducts.length ? serchedProducts?.map(service => <ServiceCard key={service._id} service={service}/>) : <ServiceNotFound />
            }
        </div>
    );
};

export default Services;