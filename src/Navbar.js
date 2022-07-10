import React, { useEffect,useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const[show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }
            else handleShow(false)
        })
        return () =>{
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${show &&"nav_black"}`}>
            <img
            className="nav_logo"
            src="/images/net.png"
            alt = "Netflix Logo"
            />
           <img
           className="nav_avatar"
           src="/images/Netflix-avatar.png" 
           alt="Netflix Logo"
           /> 
        </div>
    );
};

export default Navbar;