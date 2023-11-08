import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import OtherServicesCard from "./OtherServicesCard";

const Detail = () => {
    const {id} = useParams();
    const [service, setService] = useState();
    const idURL = `http://localhost:4000/services/${id}`
    useEffect(() => {
        fetch(idURL)
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    }, [idURL])

    const [providerServices, setProviderServices] = useState([]);
    const emailURL = `http://localhost:4000/myServices?yourEmail=${service?.yourEmail}`;
    useEffect(()=>{
        fetch(emailURL)
        .then(res => res.json())
        .then(data => {
            setProviderServices(data)
            console.log(data);
        })
    },[emailURL])

    return (
        <div className="my-8 mx-5 lg:mx-0">
            <Helmet>
                <meta charSet="utf-8" />
                <title>HomeHealers | Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* provider */}
            <div>
                <div className="card card-side bg-base-100 shadow-xl px-6">
                  <figure><img className="rounded-full" src={service?.yourImage} alt="img"/></figure>
                  <div className="card-body">
                    <div>
                        <p className="text-base font-medium"><u>Provider</u></p>
                        <p className="font-bold">{service?.yourName}</p>
                    </div>
                    <p className="font-normal"><span className="font-medium">Service area : </span>{service?.serviceArea}</p>
                  </div>
                </div>
            </div>
            {/* service */}
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">Service Detail</h1>
            <div className="card my-5 bg-base-100 shadow-xl">
              <figure><img className="w-full h-[600px]" src={service?.pictureUrl} alt="Shoes"/></figure>
              <div className="card-body">
              <div className="flex items-center gap-3">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <img className="rounded-full" src={service?.yourImage} alt="img" />
                        </label>  
                        <div>
                        <p className="text-base font-medium"><u>Provider</u></p>
                        <p className="font-bold">{service?.yourName}</p>
                        </div>
                </div>
                    <h2 className="card-title font-semibold"><span className="font-medium">Service : </span>{service?.serviceName}</h2>
                    <p className="font-normal"><span className="font-medium">Description : </span>{service?.description}</p>
                    <p className="font-bold"><span className="font-medium">Price : </span>{service?.price} BDT</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Book Now</button>
                </div>
              </div>
            </div>
            {/* other services */}
            <h1 className="font-bold text-3xl text-center mt-20 mb-2">Other Service</h1>
            <div>
                {
                    providerServices?.map(service => <OtherServicesCard key={service?._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Detail;