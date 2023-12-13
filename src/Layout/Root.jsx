import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Pages/Shared/Footer/Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/> 
            <Footer/>
            <ToastContainer/> 
            <MessengerCustomerChat
               pageId="191736287353424"
               appId="657363919934309"
             />
        </div>
    );
};

export default Root;