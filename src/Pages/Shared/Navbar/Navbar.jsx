import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const links = <>
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 bg-[#1e272e] text-white hover:border-black hover:text-black">
                <NavLink to="/">Home</NavLink>
            </button>
        </li>
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 bg-[#1e272e] text-white hover:border-black hover:text-black">
                <NavLink to="/services">Services</NavLink>
            </button>
        </li>
        {
            user &&
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 bg-[#1e272e] text-white hover:border-black hover:text-black">
                <NavLink to="#">Dashboard</NavLink>
            </button>
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
            <div className="navbar h-[240px] md:h-56 gap-3 lg:h-32 bg-[#c7ecee] rounded-b-md md:px-5 flex flex-col lg:flex-row lg:justify-between">
            <div>
                <img className="w-14" src="https://i.ibb.co/bFZy9XX/logo.png" alt="logo" />
                <h1 className="text-2xl md:text-3xl font-bold ml-3 text-black">HomeHealers</h1>
            </div>
            <div className={user ? "lg:ml-[730px]" : "-ml-[180px]"}>
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
                <div className="items-center">
                    {
                        user ? <>
                        <button onClick={handleLogout} className="mx-2 border-2 btn hover:text-[black] rounded-xl font-semibold bg-gray-800 text-white">Logout</button>
                        <label tabIndex={0} className="btn mr-5 btn-ghost btn-circle avatar">
                            <img className="rounded-full" src={user?.photoURL} alt="img" />
                            <p className="w-16">{user?.displayName}</p>
                        </label>                 
                    </> : <Link to="/login"><button className="mx-2 border-2 btn hover:text-[black] rounded-xl font-semibold bg-gray-800 text-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;