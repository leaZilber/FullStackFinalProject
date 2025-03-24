import React, { useEffect, useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [connection, setConnection] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // חיבור ל-SignalR
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://your-api.com/chatHub") // שים כאן את כתובת השרת שלך
      .withAutomaticReconnect()
      .build();

    newConnection
      .start()
      .then(() => {
        console.log("Connected to chat!");
        newConnection.on("ReceiveMessage", (user, message) => {
          setMessages((prevMessages) => [...prevMessages, { user, message }]);
          scrollToBottom();
        });
      })
      .catch((err) => console.error("Connection failed:", err));

    setConnection(newConnection);
  }, []);

  const sendMessage = async () => {
    if (connection && message.trim() !== "") {
      await connection.send("SendMessage", "Patient", message);
      setMessages((prevMessages) => [...prevMessages, { user: "Patient", message }]);
      setMessage("");
      scrollToBottom();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-container">
      <h2>👨‍⚕️ צ'אט עם הרופא</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === "Patient" ? "patient" : "doctor"}`}>
            <span className="user">{msg.user === "Patient" ? "👤 אתה:" : "👨‍⚕️ רופא:"}</span>
            <p>{msg.message}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        placeholder="הקלד הודעה..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Chat;
