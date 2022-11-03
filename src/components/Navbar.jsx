import React from 'react'
import './components.css'
// import images1 from  '../image/images1.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../firbase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='navbar-logo'>Real Chat</span>
      
      <div className='user'>
        <img src={currentUser.photoURL} alt=""/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Log-Out</button>
      </div>
    </div>
  )
}

export default Navbar