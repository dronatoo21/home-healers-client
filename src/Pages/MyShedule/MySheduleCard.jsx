
const MySheduleCard = ({booking}) => {

    const {description, price, serviceArea, pictureUrl, serviceName} = booking;

    return (
        <div className="mb-3">
            <div className="card lg:card-side lg:h-[400px] bg-base-100 shadow-xl lg:px-10">
                <figure className="lg:w-1/3"><img className="w-full lg:h-64" src={pictureUrl} alt="img"/></figure>
                <div className="w-8/12 ml-5 my-auto space-y-3 py-5">
                <h2 className="card-title font-semibold"><span className="font-medium">Service : </span>{serviceName}</h2>
                <p className="font-normal"><span className="font-medium">Area : </span>{serviceArea}</p>
                <p className="font-normal"><span className="font-medium">Description : </span>{description}</p>
                <p className="font-bold text-lg"><span className="font-medium">Price : </span>{price} BDT</p>
              </div>
            </div>
        </div>
    );
};

export default MySheduleCard;