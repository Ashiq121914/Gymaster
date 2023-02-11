
import React, { useEffect, useState } from 'react';


const UsersData = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      fetch(`http://localhost:3001/user/allusers`)
      .then(res=>res.json())
      .then(data=>setUsers(data))
    }, []);
  return (
      <div className="overflow-x-auto">
<table className="table w-full h-full">
  
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last name</th>
      <th>Email</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
   
    {
      users.map(user=><>
      {
         <tr>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
         </tr>
          
      }
      </>)
    }
    
   
  </tbody>
</table>
</div>
  );
};

export default UsersData;