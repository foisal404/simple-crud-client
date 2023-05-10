import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loader=useLoaderData();
    const[users,setUsers]=useState(loader)
    const handlerdelateBtn=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            //ui update to dalate item
            const remaing=users.filter(user=>user._id!==id)
            setUsers(remaing)
        })
    }
    return (
        <div>
            <h2>User CURD</h2>
            {
                <p>{users.length}</p>
            }
            {
                users.map(load=><p key={load._id}>{load.name}:{load.email}:{load._id}<Link to={`/update/${load._id}`}>update</Link> <button onClick={()=>handlerdelateBtn(load._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Users;