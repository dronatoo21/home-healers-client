import { Link } from "react-router-dom";

const MyServicesCard = ({myService}) => {

    const {pictureUrl, yourName, serviceName, description, serviceArea, price, yourImage} = myService;

    return (
        <div className="mb-3">
            <div className="card lg:card-side lg:h-[400px] bg-base-100 shadow-xl lg:px-10">
                <figure className="lg:w-1/3"><img className="w-full lg:h-64" src={pictureUrl} alt="img"/></figure>
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
                <p className="font-normal"><span className="font-medium">Area : </span>{serviceArea}</p>
                {
                    description.length > 100 ? <p className="font-normal"><span className="font-medium">Description : </span>{description.slice(0,100)} <Link to="#" className="text-blue-800 font-semibold">Read more...</Link></p> : <p>{description}</p>
                }
                <p className="font-bold text-lg"><span className="font-medium">Price : </span>{price} BDT</p>
                <div className="card-actions lg:justify-end ">
                  <button className="btn btn-neutral my-3 lg:my-0">Update</button>
                  <button className="btn btn-neutral my-3 lg:my-0">Delete</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default MyServicesCard;