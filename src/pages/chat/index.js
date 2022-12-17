import HomeLayout from "@/components/layout/HomeLayout"
import React, { useEffect } from "react"
import { Widget, addResponseMessage } from "react-chat-widget"

import "react-chat-widget/lib/styles.css"
import logo from "@/assets/img/car.jpg"

function App() {
  useEffect(() => {
    addResponseMessage("Welcome to this **awesome** chat!")
  }, [])

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message throught the backend API
  }

  return (
    <HomeLayout>
      API Documentation: https://github.com/Wolox/react-chat-widget
      <Widget handleNewUserMessage={handleNewUserMessage} profileAvatar={logo} title="My new awesome title" subtitle="And my cool subtitle" />
    </HomeLayout>
  )
}

export default App
