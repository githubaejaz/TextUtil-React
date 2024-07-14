import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setUserName,setLoggedIn}) {

   const [loginusername, setloginusername]  = useState("");
   const [loginpassword, setloginpassword]  = useState("");

  const navigate = useNavigate();

  const HandleLoggedIn = ()=> {
    if (loginusername === "aejaz" && loginpassword === "12345") 
    {
        setUserName(loginusername);
        setLoggedIn(true);
        navigate('/UserProfile');
    }
    else
    {
        alert("Invalid Details");
    }
  }

  const Handleusernameupdate = (event)=>{
    setloginusername(event.target.value);
  }

  const Handleupasswordupdate = (event)=>{
    setloginpassword(event.target.value);
  }


  return (
    <>
         <div className="container">
            <span>User Name</span>
            <input type="text" onChange={Handleusernameupdate}></input>
            <span>Password</span>
            <input type="password" onChange={Handleupasswordupdate}></input>
            <button onClick={HandleLoggedIn}>Login</button>
         </div>
    </>
  )
}

export default Login