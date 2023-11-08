const PendingRow = ({req, handleDelete}) => {
    const {_id, pictureUrl, serviceName, userEmail, serviceTakingDate, price} = req

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
                    <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
            </td>
                {serviceName}
            <td>
            </td>
            <td>{userEmail}</td>
            <td>{serviceTakingDate}</td>
            <td>{price}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default PendingRow;