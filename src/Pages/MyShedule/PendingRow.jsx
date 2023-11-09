import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PendingRow = ({req, handleDelete}) => {
    const {_id, pictureUrl, serviceName, userEmail, serviceTakingDate, price} = req
    const [status, setStatus] = useState(req.status);

    useEffect(() =>{
        fetch(`https://homehealers-project-server-ten.vercel.app/orders/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({status: status}) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast("added " + status)
                setStatus(status)
            }
        })
    },[status])

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)}  className="btn btn-circle btn-outline">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                  <div className="rounded w-12 h-12">
                    <img src={pictureUrl} alt="service" />
                  </div>
                </div>
            </td>
            <td>{serviceName}</td>
            <td>{userEmail}</td>
            <td>{serviceTakingDate}</td>
            <td>{price}</td>
            <th>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="pending" >Pending</option>
                    <option value="in progress" >In progress</option>
                    <option value="completed" >Completed</option>
                </select>
            </th>
        </tr>
    );
};

export default PendingRow;