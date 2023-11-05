import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/> 
            <ToastContainer/> 
        </div>
    );
};

export default Root;