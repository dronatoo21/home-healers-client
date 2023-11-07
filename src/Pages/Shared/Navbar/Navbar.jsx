import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const links = <>
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 border-none bg-[#1e272e bg-[#1e272e] text-white hover:text-black">
                <NavLink to="/">Home</NavLink>
            </button>
        </li>
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 border-none bg-[#1e272e] text-white hover:text-black">
                <NavLink to="/services">Services</NavLink>
            </button>
        </li>
        {
            user &&
        <li className="dropdown dropdown-bottom dropdown-end border-black border-1">
              <label tabIndex={0} className="ml-2 border-2 rounded-xl font-semibold border-none bg-[#1e272e] text-white hover:text-black">Dashboard</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu mt-2 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="#">My Services</Link></li>
                <li><Link to="/addservice">Add Services</Link></li>
                <li><Link to="#">My Schedules</Link></li>
              </ul>
        </li>
        }
    </>
    const handleLogout = () => {
        logout()
        .then(res => {
          console.log(res.user);
        })
        .catch(error => console.log(error));
        toast('successfully logged out')
      };
    return (
        <div>
            <div className="navbar h-[240px] md:h-60 gap-3 lg:h-32 bg-[#f0e0bd] rounded-md md:px-10 flex flex-col lg:flex-row lg:justify-between">
            <div>
                <img className="w-14" src="https://i.ibb.co/bFZy9XX/logo.png" alt="logo"/>
                <h1 className="text-2xl md:text-3xl font-bold ml-3 text-black">HomeHealers</h1>
            </div>
            <div className="lg:-ml-14">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
                <div className="items-center">
                    {
                        user ? <>
                        <button onClick={handleLogout} className="mx-2 border-2 btn border-none hover:text-[black] rounded-xl font-semibold bg-gray-800 text-white">Logout</button>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <img className="rounded-full" src={user?.photoURL} alt="img" />
                            <p className="w-16">{user?.displayName}</p>
                        </label>                 
                    </> : <Link to="/login"><button className="mx-2 border-2 btn border-none hover:text-[black] rounded-xl font-semibold bg-gray-800 text-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};
export default Navbar;