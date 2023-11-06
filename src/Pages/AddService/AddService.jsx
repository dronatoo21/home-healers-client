import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddService = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
         <div className="my-5 p-5">
          <h1 className="text-3xl font-semibold text-center">Please Add a Service!</h1>
            <div className="hero my-5 shadow-md rounded-md">
                <div className="flex-shrink-0 w-full bg-base-100 rounded-md">
                  <form className="card-body grid grid-cols-1 lg:grid-cols-2 lg:gap-5 px-5">
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
                      <input type="text" name="yourName" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Service Name</span>
                      </label>
                      <input type="text" placeholder="Service Name" name="serviceName" className="input input-bordered" readOnly required />
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
                      <select name="serviceArea" className="input input-bordered" required>
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
                  </form>
                    <div className="form-control">
                      <button className="btn btn-neutral mx-5 mb-5">Add Service</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddService;