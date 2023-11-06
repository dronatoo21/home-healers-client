import { FaFacebook, FaTwitter, FaInstagram, FaLocationArrow, FaPhone } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className=" bg-[#f7f1e3] font-normal text-base pb-5">
            <footer className="footer p-10 text-base-content">
              <aside className='space-y-1'>
              <img className="w-14" src="https://i.ibb.co/bFZy9XX/logo.png" alt="logo" />
                <p><span className="font-medium text-sm">HomeHealers.</span><br/>Providing reliable service since 1992</p>
                <span className='flex items-center gap-2'><FaLocationArrow/><p><span className='font-semibold'> Address:</span> Shajadpur, Gulshan, Dhaka 1212</p></span>
                <span className='flex items-center gap-2'><FaPhone/><p><span className='font-semibold'> Contact:</span> 84429</p></span>
              </aside>
              <nav>
                <header className="footer-title">Company</header> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Delivery info</a> 
                <a className="link link-hover">Press kit</a>
              </nav> 
              <nav>
                <header className="footer-title">Legal</header> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
              </nav>
              <nav>
               <header className="footer-title">Social</header> 
               <div className="grid grid-flow-col gap-4">
                 <a href='#' className='text-2xl'><FaFacebook/></a> 
                 <a href='#' className='text-2xl'><FaTwitter/></a> 
                 <a href='#' className='text-2xl'><FaInstagram/></a>
               </div>
             </nav>
            </footer>
            <p className="text-center text-sm">Copyright © 2023 - All right reserved by ACME Industries Ltd</p> 
        </div>
    );
};

export default Footer;