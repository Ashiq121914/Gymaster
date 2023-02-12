
import React, { useEffect, useState } from 'react';


const UsersData = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      fetch(`http://localhost:3001/user/allusers`)
      .then(res=>res.json())
      .then(data=>setUsers(data))
    }, []);
  return (
      <div  className='max-w-[900px] mx-auto p-4 my-[90px]'>
        <h2 className='text-[42px] mb-[40px]'>User List</h2>
<table className="table  border-l-0 border-r-0 w-full h-full ">
  
  
    <tr className='text-black/50 text-[14px] '>
      <th className='pl-0 font-normal'>First Name</th>
      <th className='pl-0 font-normal'>Last name</th>
      <th className='pl-0 font-normal'>Email</th>
      <th className='pl-0 font-normal'>Password</th>
      
    </tr>
  
  <tbody>
   
    {
      users.map(user=><>
      {
         <tr key={user._id} className=''>
          <td className='border-y-2 border-black/30 pl-0'>{user.firstname}</td>
          <td className='border-y-2 border-black/30 pl-0'>{user.lastname}</td>
          <td className='border-y-2 border-black/30 pl-0'>{user.email}</td>
          <td className='border-y-2 border-black/30 pl-0'>{user.password}</td>
          
         </tr>
          
      }
      </>)
    }
    
   
  </tbody>
</table>
<div className='border-b-2 border-black/30'>
    <p className='py-[24px] '><span className='mr-[6px]'>{users.length}</span><span>Users</span></p>
</div>
</div>
  );
};

export default UsersData;