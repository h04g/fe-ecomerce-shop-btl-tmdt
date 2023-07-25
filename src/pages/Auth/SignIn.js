import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { signInApi } from "../../services/userServices";

const SignIn = () => {

    const navigate = useNavigate()
    
    const defaultAdminUserName  = 'admin';
    const defaultAdminPassword = '123';


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async () => {

        if (username === defaultAdminUserName && password ===defaultAdminPassword){
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('token', 'abc');
            navigate('/')
        } else if (!username || !password){
            alert("Email/Password is not required")
            return;
        }

        // user login
        let res = await signInApi(username, password);
        if(res && res.token){
            localStorage.setItem("token", res.token)
            localStorage.setItem("isAdmin", 'false')
            navigate("/")
        } else {
            if(res && res.status === 400){
                
                alert('Wrong Email or PassWord')
            }
        }
            console.log(res)
        
    }
    const handlePressEnter = async (event) => {
        if(event && event.key === 'Enter'){
           await handleLogin() ;
        }
         
    }

    const handleGoBack = () => {
        navigate('/') 
     }
     useEffect(() => {
        document.body.classList.add('auth-page');
    
        return () => {
          document.body.classList.remove('auth-page');
        };
      }, []);
    return (
        <>
            <div className="login-container columns-12 columns-sm-4 ">
                <div className="title">
                    Sign in
                </div>
                <div className="auth-body">
                <div className="text">Username(mor_2314)</div>
                <input 
                    type="text" 
                    placeholder="Enter your username ..."
                    value={username}
                    onChange={(event)=> setUsername(event.target.value)}
                    
                />
                <div className="text">Password(83r5^_)</div>
                <div className="input-2">
                    <input 
                        type="password" 
                        placeholder="Enter your Password...."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event)=> handlePressEnter(event)}
                    />
                </div>
                <button 
                    className= {username && password ? "active" : ""}
                    disabled = {username && password ? false : true}
                    onClick={()=>handleLogin()}
                    onKeyDown={(event)=>handlePressEnter(event)}
                >Sign In</button>
                <div className="back">
                   <i className="fa-solid fa-angles-left"></i> 
                   <span onClick={()=>handleGoBack()}>&nbsp;
                     Go back</span>
                </div>
                </div>

           </div>
        </>
    )

}

export default SignIn