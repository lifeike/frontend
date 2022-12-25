import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "@/components/layout/HomeLayout"

const ChatRoom = (props) => {
  useEffect(() => {
    const ws = new WebSocket("wss://ws.bitstamp.net")
    ws.onopen = (event) => {
      ws.send(JSON.stringify(apiCall))
    }
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data)
      try {
        if (json.event == "data") {
          setBids(json.data.bids.slice(0, 5))
        }
      } catch (err) {
        console.log(err)
      }
    }
    //clean up function
    return () => ws.close()
  }, [])

  return (
    <HomeLayout>
      <h2>Chat</h2>
    </HomeLayout>
  )
}

export default ChatRoom
