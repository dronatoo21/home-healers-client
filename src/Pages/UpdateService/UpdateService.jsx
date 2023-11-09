import { useContext } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const UpdateService = () => {
    const {user} = useContext(AuthContext);
    const [area, setArea] = useState();
    const service = useLoaderData();
    const {_id, pictureUrl, serviceName, description, serviceArea, price} = service;
    const handleUpdateService = e => {
        e.preventDefault();
        const form = e.target;
        const pictureUrl = form.pictureUrl.value;
        const yourImage = user?.photoURL;
        const yourName = user?.displayName;
        const yourEmail = user?.email;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const description = form.description.value;
        const serviceArea = form.serviceArea.value;
        const updatedService = {pictureUrl, yourImage, yourName, yourEmail, price, description, serviceName, serviceArea} 
        fetch(`http://localhost:4000/myServices/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedService)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success',
              text: 'Service updated successfully',
              icon: 'success',
              confirmButtonText: 'Okay'
            })
          }
        })
}
    return (
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>HomeHealers | Update service</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
         <div className="my-5 p-5">
          <h1 className="text-3xl font-semibold text-center">Please Update the Service!</h1>
            <div className="hero my-5 shadow-md rounded-md">
                <div className="flex-shrink-0 w-full bg-base-100 rounded-md">
                  <form onSubmit={handleUpdateService} className="card-body ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 px-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Picture URL</span>
                      </label>
                      <input type="text" defaultValue={pictureUrl} name="pictureUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Name</span>
                      </label>
                      <input type="text" name="yourName" defaultValue={user?.displayName} className="input input-bordered" readOnly required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Service Name</span>
                      </label>
                      <input type="text" defaultValue={serviceName} name="serviceName" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your E-mail</span>
                      </label>
                      <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" readOnly required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Service Area</span>
                      </label>
                      <select value={area} defaultValue={serviceArea} onChange={e => setArea(e.target.value)} name="serviceArea" className="input input-bordered" required>
                        <option>Gulshan</option>
                        <option>Banani</option>
                        <option>Uttara</option>
                        <option>Baridhara</option>
                        <option>Badda</option>
                    </select>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input type="text" defaultValue={price} name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <textarea type="text" defaultValue={description} name="description" className="input input-bordered h-20" required />
                    </div>
                    </div>
                    <div className="form-control">
                      <button type="submit" className="btn btn-neutral mx-5 mt-5">Update Service</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
        </div>
    );
};
export default UpdateService;