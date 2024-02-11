import React from 'react'
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";

const NavPage = () => {
  return (
    <div>
        <nav className='container'>
        <div className="Nav my-2">
            <img src='./public\Images\logo-design-49571.png' alt="logo" style={{width:"120px", height:"110px",marginTop:"5px"}} />
        </div>
        <ul className='menu'>
         <li ><CiMenuFries className='li' />Menu</li>
        
        
         <li><FaServicestack className='li'/>Service</li>
         <Link to='/about'>
         <li><TbListDetails className='li'/>About Us</li>
         </Link>
         <Link to='/Contact'>
         <li><MdOutlinePhoneInTalk  className='li' />Contact</li>
         </Link>
        </ul>
        <Link to='/Signinpage'>
         <button className='btn-1'>Login</button>
        </Link>
       
    </nav>
  </div>
  )
}

export default NavPage;