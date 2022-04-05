import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate()



  const joinRoom = () =>{
    if(!roomId || !userName){
      toast.error('Room Id & Username Is Required');
      return;
     }

     navigate(`/editor/${roomId}`,{
       state: {
        userName,

       }
     })

  }

 const handleEnter = (e) =>{
   if(e.code === 'Enter'){
     joinRoom();
   }

 }


  const createRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id)
    toast.success('Created a new room');
  }

  return (

    <div className="homeWrapper">
      <div className="fromWrapper blue-glassmorphism blueFromWrapper ">
        <img className="homeLogo" src="/logo.png" alt="logo" />
        <h4 className="mainLable">Room ID</h4>
        <div className="inputGroup  ">
          <input type="text" className="inputBox white-glassmorphism" placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)}  onKeyUp={handleEnter}/>
          <input type="text" className="inputBox white-glassmorphism" placeholder="UserName" value={userName} onChange={(e) => setUserName(e.target.value)} onKeyUp={handleEnter} />
          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
          <h4 className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="@" onClick={createRoom} className="createNewBtn">new room</a>
          </h4>
        </div>
      </div>

      <footer>
        <h4>
          Build 💛 by &nbsp;
          <a href="s" className="createNewBtn">Lokesh</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home