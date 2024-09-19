import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Profile = () => {
let id = localStorage.getItem('id');
const navigate= useNavigate()
const [data,setData]= useState({});
console.log(id);
  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${id}`)
  .then((res)=>res.json())
  .then((data)=>setData(data))
  },[id]);
  console.log(data);
 
  const handleBtn=()=>{
       navigate('/')
  }
  return (
    <div className='profile'>
      <h2>Profile</h2>
      <div>
        <p>Full Name :<i>{data.firstName +" "+ data.lastName}</i> </p>
        <p>Email: <i>{data.email}</i></p>
        <p>Password:<i>{data.password}</i> </p>

        <NavLink to='/' className='btn' onClick={handleBtn}>LogOut</NavLink>
      </div>
    </div>
  )
}

export default Profile