import { Link } from "react-router-dom";

const OtherServicesCard = ({service}) => {
    const {_id, pictureUrl, yourName, serviceName, description, price, yourImage} = service;
    return (
        <div className="mb-3">
            <div className="card lg:card-side lg:h-[400px] bg-base-100 shadow-xl lg:px-10">
                <figure className="lg:w-1/3"><img className="w-full rounded-md lg:h-64" src={pictureUrl} alt="img"/></figure>
                <div className="w-8/12 ml-5 my-auto space-y-3 py-5">
                <div className="flex items-center gap-3">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <img className="rounded-full" src={yourImage} alt="img" />
                        </label>  
                        <div>
                        <p className="text-base font-medium"><u>Provider</u></p>
                        <p className="font-bold">{yourName}</p>
                        </div>
                </div>
                <h2 className="card-title font-semibold"><span className="font-medium">Service : </span>{serviceName}</h2>
                {
                    description.length > 100 ? <p className="font-normal"><span className="font-medium">Description : </span>{description.slice(0,100)} <Link to="#" className="text-blue-800 font-semibold">Read more...</Link></p> :  <p className="font-normal"><span className="font-medium">Description : </span>{description}</p>
                }
                <p className="font-bold"><span className="font-medium">Price : </span>{price} BDT</p>
                <div className="card-actions lg:justify-end ">
                  <Link to={`/detail/${_id}`}><button className="btn btn-neutral my-3 lg:my-0">View Detail</button></Link>
                </div>
              </div>
            </div>
        </div>
    );
};

export default OtherServicesCard;