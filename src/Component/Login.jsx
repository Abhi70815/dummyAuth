import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    userName: '',
    password: "",
  });
  const [error, setError] = useState(false);
  const [apiData, setApiData] = useState({
    res: {},
    data: {}
  })

  const formHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((prev) => ({ ...prev, [name]: value }))
  }
  console.log(input)



  const handleSubmit = async(e) => {
    e.preventDefault();
   let res= await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: input.userName,
        password: input.password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    
    });

    setApiData((prev) => ({ ...prev, res: res }))

    const data= await res.json();
        setApiData((prev) => ({ ...prev, data: data }));

console.log(data.token)

if(res.status === 200 ){
  localStorage.setItem("token",data.token)
    localStorage.setItem("id",data.id)
    navigate('/profile')
    setError('');
}
else{
  setError("please Enter a valid UserName and Password")
}
     
    };

  console.log(apiData)
  return (

    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder=' Enter UserName' name='userName' onChange={formHandle} />
        {/* <input type="email" placeholder='Email'name='email' onChange={formHandle}/> */}
        <input type="password" placeholder='Password' name='password' onChange={formHandle} />
        {/* <input type="password" placeholder='Confirm Password' name='cpass' onChange={formHandle}/> */}
        {setError && <p style={{color:"red"}}>{error}</p>}

        <button >Login</button>
      </form>
    </div>
  )
}

export default Login