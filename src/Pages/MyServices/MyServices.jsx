import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyServicesCard from "./MyServicesCard";
import { Helmet } from "react-helmet";

const MyServices = () => {
    const {user} = useContext(AuthContext);
    const [myAllServices, setMyAllServices] = useState([]);
    const URL = `https://homehealers-project-server-ten.vercel.app/myServices?yourEmail=${user?.email}`;
    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setMyAllServices(data)
            console.log(data);
        })
    },[URL])

    return (
        <div className="my-10 p-5 lg:p-0">
        <Helmet>
                <meta charSet="utf-8" />
                <title>HomeHealers | Manage services</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1 className="font-bold text-3xl text-center mt-16 mb-5">Manage Services!</h1>
            {
                myAllServices?.map(myService => <MyServicesCard key={myService?._id} myService={myService} myAllServices={myAllServices}  setMyAllServices={setMyAllServices}/>)
            }
        </div>
    );
};

export default MyServices;