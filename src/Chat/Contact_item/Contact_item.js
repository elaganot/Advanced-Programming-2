import React, { useState, useEffect } from 'react'
import "./Contact_item.css"

function Contact_item({ image, name, messages, setChatBox }) {


  const [isPressed, setIsPressed] = useState(false);
  const [newMessage, setNewMessage] = useState(messages[messages.length -1].message);
  const [newTime, setNewTime] = useState(messages[messages.length -1].timestamp);

  const [messagesUpdated, setMessages] = useState(messages);

  useEffect(() => {
    if (isPressed) {
      handleChatBox();
      setNewMessage(messagesUpdated[messagesUpdated.length - 1].message);
      var time = new Date();
      setNewTime(time.getHours() + ':' + time.getMinutes());

    }
  }, [messagesUpdated]);

  function handleChatBox() {
    setIsPressed(true)
    setChatBox({image: image, name: name, messages: messagesUpdated, setMessages: setMessages});
  }

    let shortenedMessage = newMessage
    if (newMessage.length > 25)
      shortenedMessage = newMessage.substring(0, 25) + '...';

  return (
    <button className = "user-button" onClick={() => handleChatBox()}>
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <img src={image} className='contact-image'></img>
      <div class="ms-2 me-auto">
        <div className="contact-name"
          style={{fontSize:"me",fontWeight:'bold' }}>{name}</div>
        <div className="contact-message"  
        style={{ fontFamily: "Candara",fontWeight:"normal",wordBreak: 'break-word'
      }}>{
          shortenedMessage
        }</div>
      </div>
      <span class="message-time"  style={{ fontFamily: "Gabriola",fontWeight:"bold"}}>{newTime}</span>
    </li>
    </button>
  )
}

export default Contact_item;