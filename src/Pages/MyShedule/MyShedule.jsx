import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MySheduleCard from "./MySheduleCard";
import { Helmet } from "react-helmet";
import PendingRow from "./PendingRow";
import Swal from "sweetalert2";

const MyShedule = () => {
    const {user} = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    const [orders, setOrders] = useState([]);

    const URL = `https://homehealers-project-server-ten.vercel.app/myBookings?userEmail=${user?.email}`;
    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setMyBookings(data)
        })
    },[URL])

    const orderURL = `https://homehealers-project-server-ten.vercel.app/orders?providerEamil=${user.email}`;
    useEffect(()=>{
        fetch(orderURL)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[orderURL])

    const handleDelete = id => {
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
            fetch(`https://homehealers-project-server-ten.vercel.app/bookings/${id}`, {
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
                      const remaining = orders.filter(req => req._id !== id)
                      setOrders(remaining);
                }
            })
            }
            
          });
    }

    return (
        <div className="min-h-[50vh]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>HomeHealers | My shedule</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center mt-14 mb-2">My Bookings</h1>
            {
                myBookings?.length > 0 ? myBookings?.map(booking => <MySheduleCard key={booking?._id} booking={booking}/>) : <div><h1 className="text-center my-9 text-lg md:text-xl lg:text-2xl font-semibold">No Bookings added...</h1></div>
            }
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center mt-14 mb-2">My pending work</h1>
            <div className="my-11">
            <div className="overflow-x-auto">
            <div className="overflow-x-auto">
                  { orders.length > 0 ?
                    <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <th>Service img</th>
                        <th>Service name</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {
                        orders?.map(req => <PendingRow key={req?._id} req={req} handleDelete={handleDelete}/>)
                      }
                    </tbody>
                  </table> : <div><h1 className="text-center my-2 text-lg md:text-xl lg:text-2xl font-semibold">No pending works...</h1></div>
                  } 
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyShedule;