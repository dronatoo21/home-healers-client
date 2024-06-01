import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { FaArrowDown } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
      logout()
      .then(res => {
        console.log(res.user);
      })
      .catch(error => console.log(error));
      toast('successfully logged out')
    };
    const links = <>
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 border-none lg:text-black  hover:text-black">
                <NavLink style={({ isActive })=> ({borderBottom: isActive ? "2px solid black" : " ", background: "transparent",})} to="/">Home</NavLink>
            </button>
        </li>
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 border-none lg:text-black  hover:text-black">
                <NavLink style={({ isActive })=> ({borderBottom: isActive ? "2px solid black" : " ", background: "transparent",})} to="/services">Services</NavLink>
            </button>
        </li>
        {
        user ? <li className="lg:hidden"><Link onClick={handleLogout} className="lg:btn btn-sm border-none px-4 text-black bg-white lg:text-white ml-2 rounded-xl font-semibold" >Logout</Link></li> : <li className="lg:hidden"><Link to="/login" className="lg:btn px-4 btn-sm border-none text-black bg-white lg:text-white ml-2 rounded-xl font-semibold" >Login</Link></li>
        }
        {
            user &&
                <li className="dropdown dropdown-bottom dropdown-end border-black border-1">
                      <label tabIndex={0} className="ml-2 border-2 rounded-xl font-semibold border-none  lg:text-black px-4 hover:text-black">Dashboard<FaArrowDown className="lg:hidden"/></label>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu mt-2 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/myServices">My Services</Link></li>
                        <li><Link to="/addservice">Add Services</Link></li>
                        <li><Link to="/myBookings">My Schedules</Link></li>
                      </ul>
                </li>
        }
    </>
    
    return (
        <div className="navbar bg-[#e4eef4] px-5 md:px-2 lg:px-10 py-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>
            <img className="w-7 md:w-10 lg:w-14" src="https://i.ibb.co/bFZy9XX/logo.png" alt="logo"/>
            <h1 className="text-xl md:text-2xl lg::text-3xl font-bold ml-3 text-black">HomeHealers</h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {links}
            </ul>
          </div>
          <div className="navbar-end">
          <div className="items-center">
                    {
                        user ? <div className="flex items-center gap-2">
                        <button onClick={handleLogout} className="mx-2 border-2 btn border-none lg:flex hidden hover:text-[black] rounded-xl font-semibold bg-gray-800 text-white">Logout</button>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <img className="rounded-full" src={user?.photoURL} alt="img" />
                            <p className="text-center">{user?.displayName?.split(' ').pop()}</p>
                        </label>                 
                    </div> : <Link to="/login"><button className="mx-2 border-2 md:btn-md btn-sm btn border-none hover:text-[black] rounded-xl font-semibold bg-gray-800 text-white">Login</button></Link>
                    }
                </div>
          </div>
        </div>
    );
};
export default Navbar;