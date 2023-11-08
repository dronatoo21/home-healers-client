import { useContext, useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import OtherServicesCard from "./OtherServicesCard";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Detail = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams();
    const [service, setService] = useState();
    const idURL = `https://home-healers.web.app/services/${id}`
    useEffect(() => {
        fetch(idURL)
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    }, [idURL])

    const [providerServices, setProviderServices] = useState([]);
    const emailURL = `https://home-healers.web.app/myServices?yourEmail=${service?.yourEmail}`;
    useEffect(()=>{
        fetch(emailURL)
        .then(res => res.json())
        .then(data => {
            setProviderServices(data)
            console.log(data);
        })
    },[emailURL])

        const handleBookService = e => {
            e.preventDefault();
            const form = e.target;
            const pictureUrl = form.pictureUrl.value;
            const userName = user?.displayName;
            const userEmail = user?.email;
            const serviceName = form.serviceName.value;
            const providerEamil = form.providerEmail.value;
            const price = form.price.value;
            const serviceTakingDate = form.date.value;
            const description = form.description.value;
            const serviceArea = form.serviceArea.value;
            const specialInstruction = form.specialInstruction.value;
            const yourImage = user?.photoURL;
            const bookService = {pictureUrl, yourImage, userName, userEmail, price, description, serviceName, serviceArea, providerEamil, serviceTakingDate, specialInstruction} 
            console.log(bookService);
    
            fetch('https://home-healers.web.app/bookings', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(bookService)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data);
              if(data.insertedId){
                toast('Service Booked successfully')
              }
            })
        }
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
                    <button className="btn btn-neutral my-5" onClick={()=>document.getElementById('my_modal_2').showModal()}>Book Now</button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                      <form onSubmit={handleBookService} className="card-body ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 px-5">
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Picture URL</span>
                                  </label>
                                  <input type="text" defaultValue={service?.pictureUrl} name="pictureUrl" className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Your Name</span>
                                  </label>
                                  <input type="text" name="userName" defaultValue={user?.displayName} className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Service Name</span>
                                  </label>
                                  <input type="text" defaultValue={service?.serviceName} name="serviceName" className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Your E-mail</span>
                                  </label>
                                  <input type="email" name="userEmail" defaultValue={user?.email} className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Service provider E-mail</span>
                                  </label>
                                  <input type="email" name="providerEmail" defaultValue={service?.yourEmail} className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Service Area</span>
                                  </label>
                                  <input type="text" name="serviceArea" defaultValue={service?.serviceArea} className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Price</span>
                                  </label>
                                  <input type="text" defaultValue={service?.price} name="price" className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Service Taking Date</span>
                                  </label>
                                  <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Description</span>
                                  </label>
                                  <textarea type="text" defaultValue={service?.description} name="description" className="input input-bordered h-20" readOnly required />
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Special instruction</span>
                                  </label>
                                  <textarea type="text" placeholder="Address / area / customized service plan" name="specialInstruction" className="input input-bordered pt-3 h-20" required />
                                </div>
                                </div>
                                <div className="form-control modal-action">
                                  <button type="submit" className="btn btn-neutral mx-5 mt-5 ">Purchase the service</button>
                                </div>
                              </form>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
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