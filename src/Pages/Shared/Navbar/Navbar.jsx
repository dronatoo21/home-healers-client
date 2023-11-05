import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <li>
            <button className="ml-2 border-2 rounded-xl font-semibold px-4 py-2 bg-[#1e272e] text-white hover:border-black hover:text-black">
                <NavLink to="#">Dashboard</NavLink>
            </button>
        </li>
    </>
    return (
        <div>
            <div className="navbar h-[240px] md:h-56 gap-3 lg:h-28 bg-[#c7ecee] rounded-b-md md:px-5 flex flex-col lg:flex-row lg:justify-between">
            <div>
                <img className="w-14" src="https://i.ibb.co/bFZy9XX/logo.png" alt="logo" />
                <h1 className="text-2xl md:text-3xl font-bold ml-3 text-black">HomeHealers</h1>
            </div>
            <div className="lg:ml-[750px]">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
                <div className="items-center">
                    <>
                        <button className="mx-2 border-2 btn hover:text-[black] rounded-xl font-semibold bg-gray-800 text-white">Login</button>
                        <label tabIndex={0} className="btn mr-5 btn-ghost btn-circle avatar">
                            <img className="rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocLdYUBhwEL2WKxuFjDhtyQMdpbcNHCJMZV_31aU9QJjYw=s96-c" alt="img" />
                            <p className="w-16">Fahim</p>
                        </label>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Navbar;