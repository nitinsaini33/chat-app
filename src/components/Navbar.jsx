import React from 'react'
import './common.css'
// import images1 from  '../image/images1.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../firbase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
      <ul className='navbar-logo'>
       <li>R</li>
       <li>e</li>
       <li>a</li>
       <li>l</li>
       <br/> 
       <li></li>
       <li>C</li>
       <li>h</li>
       <li>a</li>
       <li>t</li>
      </ul>
      
      <div className='user'>
        <img src={currentUser.photoURL} alt=""/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar