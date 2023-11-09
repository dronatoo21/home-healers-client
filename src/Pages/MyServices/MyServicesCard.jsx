import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyServicesCard = ({myService, myAllServices, setMyAllServices}) => {
    const {_id, pictureUrl, yourName, serviceName, description, serviceArea, price, yourImage} = myService;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:4000/myServices/${_id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your service has been deleted.",
                        icon: "success"
                      });
                    const remaining = myAllServices.filter(service => service._id !== _id)
                    setMyAllServices(remaining);
                }
            })
            }
          });
    }
    return (
        <div className="mb-3">
            <div className="card lg:card-side lg:h-[400px] bg-base-100 shadow-xl lg:px-10">
                <figure className="lg:w-1/3"><img className="w-full lg:h-64" src={pictureUrl} alt="img"/></figure>
                <div className="lg:w-8/12 ml-5 my-auto space-y-3 py-5">
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
                    <Link to={`/updateService/${_id}`}>
                        <button className="btn btn-neutral my-3 lg:my-0">Update</button>
                    </Link>
                    <button  onClick={() => handleDelete(_id)} className="btn btn-neutral my-3 lg:my-0">Delete</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default MyServicesCard;