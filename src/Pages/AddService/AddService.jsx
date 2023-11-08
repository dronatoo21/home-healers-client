import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddService = () => {
    const [area, setArea] = useState();
    const {user} = useContext(AuthContext)
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const pictureUrl = form.pictureUrl.value;
        const yourName = user?.displayName;
        const yourEmail = user?.email;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const description = form.description.value;
        const serviceArea = form.serviceArea.value;
        const yourImage = user?.photoURL;
        const newService = {pictureUrl, yourImage, yourName, yourEmail, price, description, serviceName, serviceArea} 
        console.log(newService);

        fetch('https://homehealers-project-server.vercel.app/services', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success',
              text: 'Service added successfully',
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
                <title>HomeHealers | Add service</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
         <div className="my-5 p-5">
          <h1 className="text-3xl font-semibold text-center">Please Add a Service!</h1>
            <div className="hero my-5 shadow-md rounded-md">
                <div className="flex-shrink-0 w-full bg-base-100 rounded-md">
                  <form onSubmit={handleAddService} className="card-body ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 px-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Picture URL</span>
                      </label>
                      <input type="text" placeholder="Picture URL of the service" name="pictureUrl" className="input input-bordered" required />
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
                      <input type="text" placeholder="Service Name" name="serviceName" className="input input-bordered" required />
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
                      <select value={area} onChange={e => setArea(e.target.value)} name="serviceArea" className="input input-bordered" required>
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
                      <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <textarea type="text" placeholder="Description" name="description" className="input input-bordered pt-3 h-20" required />
                    </div>
                    </div>
                    <div className="form-control">
                      <button type="submit" className="btn btn-neutral mx-5 mt-5">Add Service</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddService;