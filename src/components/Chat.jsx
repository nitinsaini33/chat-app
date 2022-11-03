import React from 'react'
import './components.css'
import {HiOutlineVideoCamera} from 'react-icons/hi'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {
  const {data}=useContext(ChatContext)
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
          <FiMoreHorizontal/>
        </div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat