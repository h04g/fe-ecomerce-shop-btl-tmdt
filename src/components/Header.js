import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext} from '../contexts/SidebarContext'
import { CartContext} from '../contexts/CartContext';
import { NavLink, useNavigate } from "react-router-dom";
import Home from '../pages/Home';
import Product from './Product';



import { Link } from 'react-router-dom';

const Header = () => {

  //header state 
  const [ isActive, setIsActive ] = useState(false);
  const [hideItems, setHideItems] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const { isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)


  const token = localStorage.getItem('token');
  const admin = localStorage.getItem('isAdmin')=== 'true';
  const navigate = useNavigate()

  const handleSignOut =  () => {
      try {
          localStorage.removeItem("token");
          localStorage.removeItem("isAdmin");
          navigate("/");
          alert("Logout success");
          
      }catch (error) {
          console.error(error);
      }
  }

  

  //event listener
  // useEffect(()=> {
    
  //   if(isAdmin === 'true'){
  //       setIsAdmin(true)

  //   }else{
  //       setIsAdmin(false)
  //   }

  // },[isAdmin])

  useEffect(() => {
    setIsAdmin(admin);
  }, [admin]);

  useEffect(() => {
    if (window.location.pathname === '/signin' || window.location.pathname === '/signup') {
      setHideItems(true);
    } else {
      setHideItems(false);
    }
    console.log('run2');
  }, [window.location.pathname]);

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive (false)
    })
  })

  useEffect(()=>{
    if(token){ 
        setIsAuth(true);
    }else {   
        setIsAuth(false);
    }
    
},[token])


  return( <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all `}>
    <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
    <Link to={'/'}>
      <div>
        <i className="fa-solid fa-house"></i>
      </div>
    </Link>
   
    
    
    <div className='auth'>
    {isAuth 
      ? (<>
      <button onClick={()=> handleSignOut()}>
        Sign Out
      </button>
      {isAdmin && 
        <Link to={'/admin'}>
          <button >Manage</button>
        </Link>
        
      }
      </>)
    : ( <>
    <Link to={'/signin'}>
      <button className='auth-btn'>
        Sign In
      </button>
    </Link>
    <Link to={'/signup'}>
      <button className='auth-btn'>
        Sign Up
      </button>
    </Link>
    </>)}

    </div>
    
    {/* cart */}
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <i className="text-2xl fa-solid fa-cart-shopping"></i>
      <div className='bg-red-500 absolute -right-2-bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
    </div>
    </div>
    
  </header>);
};

export default Header;
