import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/> 
            <Footer/>
            <ToastContainer/> 
        </div>
    );
};

export default Root;