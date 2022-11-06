import React, { useContext,  useState } from "react";

import { doc,onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firbase";

const Exportdata = () => {

  const [messages,setMessages]=useState([])
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const{combineId}=data;
 


  const processData=[]
    const getChats = () => {
      
      const unsub = onSnapshot(
        doc(db, "userChats",currentUser.uid ),
        (doc) => {
          console.log('data',doc.data())

          const data=doc.data()
 Object.values(data)?.forEach((item)=>{
  console.log('chatting process',item)

  processData.push({
    date:item?.date?.seconds,
  messages:item?.lastMessage?.text,
displayName:item?.userInfo?.displayName
  })

})
setMessages(processData);  
        }
      );

      return () => {
        unsub();
      };
    };
   
  const exportUserInfo = () => {
  
    getChats();
    let file = "";
    messages.length>0&& messages?.forEach((item) => {
      const time = new Date(item?.date * 1000).toLocaleTimeString();
      const date = new Date(item?.date* 1000).toLocaleDateString();
      console.log("time", time);

      file += `${date} ${time} ${item?.displayName} ${item?.messages} \n`;
    });
    const blob = new Blob([file], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    ole.log("blob",url)
    const link = document.createElement("a");
    link.download = "user-info.txt";
    link.href = url;
    link.click();
  };
  return (
    <div className="export-data">
      <button onClick={exportUserInfo}>Export</button>
    </div>
  );
};

export default Exportdata;