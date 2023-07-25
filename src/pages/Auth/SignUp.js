import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

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
            <div className="login-container col-12 col-sm-4 ">
                <div className="title">
                    Sign Up
                </div>
                <div className="text">Name</div>
                <input 
                    type="text" 
                    placeholder="Enter your Name ..."
                    value={name}
                    onChange={(event)=> setName(event.target.value)}
                />
                <div className="text">Email</div>
                <input 
                    type="text" 
                    placeholder="Enter your Email ..."
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                />
                <div className="text">Password</div>
                <div className="input-2">
                    <input 
                        type="password" 
                        placeholder="Enter your Password...."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        // onKeyDown={(event)=> handlePressEnter(event)}
                    />
                </div>
                <button 
                    className= {email && password ? "active" : ""}
                    disabled = {email && password ? false : true}
                    // onClick={()=>handleLogin()}
                >Sign In</button>
                <div className="back">
                   <i className="fa-solid fa-angles-left"></i> 
                   <span onClick={()=>handleGoBack()}>&nbsp;
                     Go back</span>
                </div>

           </div>
        </>
    )

}

export default SignUp