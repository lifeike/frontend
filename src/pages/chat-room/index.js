import React, { useState, useRef, useEffect, memo } from "react"
import { connect } from "react-redux"
import HomeLayout from "@/components/layout/HomeLayout"

const ChatRoom = (props) => {
  const [currentRoom, setcurrentRoom] = useState(0)
  const inputRef = useRef(null)
  const [ws, setWs] = useState(new WebSocket("ws://localhost:8080"))
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    ws.onopen = (event) => {
      ws.send(JSON.stringify({ type: "new connection", payload: props.user }))
    }
    ws.onmessage = function (message) {
      let response = JSON.parse(message.data)
      setMessageList((messageList) => [...messageList, response.message])
    }
    //clean up function
    return () => ws.close()
  }, [])

  const sendMessage = async () => {
    ws.send(JSON.stringify({ meta: "message", room: currentRoom, message: inputRef.current.value }))
  }

  const joinRoom = async (roomNumber) => {
    setcurrentRoom(roomNumber)
    if (roomNumber && currentRoom == 0) {
      ws.send(JSON.stringify({ meta: "join", room: roomNumber, message: "I have joined" }))
    } else if (roomNumber && roomNumber != currentRoom) {
      ws.send(JSON.stringify({ meta: "leave", room: currentRoom, message: "I have left" }))
      ws.send(JSON.stringify({ meta: "join", room: roomNumber, message: "I have joined" }))
    }
  }

  return (
    <HomeLayout>
      <h2>should be under APP component or index.js file.</h2>
      <h2>for demonstration purpose, init WebSocket in this component only</h2>
      <div className="w-full border border-black grid grid-cols-4">
        <div className="col-span-1 border border-black">
          <div className="p-2 border m-2 rounded-sm" onClick={() => joinRoom(1)}>
            room 1
          </div>
          <div className="p-2 border m-2 rounded-sm" onClick={() => joinRoom(2)}>
            room 2
          </div>
          <div className="p-2 border m-2 rounded-sm" onClick={() => joinRoom(3)}>
            room 3
          </div>
          <div className="p-2 border m-2 rounded-sm" onClick={() => joinRoom(4)}>
            room 4
          </div>
        </div>
        <div className="col-span-3 border border-black ">
          <div> chat area</div>
          {messageList &&
            messageList.map((item, index) => {
              return <div key={index}> {item}</div>
            })}
          <div className="grid place-items-center">
            <div>
              <input ref={inputRef} className="border border-black" type="text" placeholder="" />
              <button className="bg-gray-400 p-2" onClick={sendMessage}>
                send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default connect((state) => state.user, null)(ChatRoom)
