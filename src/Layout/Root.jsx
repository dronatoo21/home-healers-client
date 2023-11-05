import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/>  
        </div>
    );
};

export default Root;