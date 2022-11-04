import React, { useState } from 'react'
import './common.css'
import {HiOutlineVideoCamera} from 'react-icons/hi'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {
  const {data}=useContext(ChatContext)
  const [show,setShow]= React.useState(false);
  const handleShow=()=>{
    setShow(!show);
  }
  return (
    <div className='chat'>
      <div className="chatInfo">
        <div className="user-Info">

        <img src={data.user.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <HiOutlineVideoCamera/>
          <AiOutlineUserAdd/>
          <div className="export-chat-main">
            
          <FiMoreHorizontal  onClick={handleShow}/>
         {show ?  <div className="export-chat"><button>Transper</button></div>:<h1></h1>}
</div>
        </div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat