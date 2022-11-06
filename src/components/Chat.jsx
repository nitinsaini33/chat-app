import React from "react";
import './common.css'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import ExportData from "./ExportFile/ExportData";

const Chat = () => {
  const {data}=useContext(ChatContext)
 
  return (
    <div className='chat'>
      <div className="chatInfo">
        <div className="user-Info">

        <img src={data.user.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
        </div>
       
        <ExportData/>
        
      </div>
      <Messages/>
      <Input/>
     
       
    </div>
  )
}

export default Chat