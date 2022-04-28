import React, { useState, useEffect } from 'react'
import './Text_box.css'
import File_Record_Buttons from '../File_Record_Buttons/File_Record_Buttons';
import RecordModal from '../RecordModal/RecordModal';
import AttachFile from '../AttachFile/AttachFile';

function Text_box({ messages, setMessages }) {
  useEffect(() => {
    const convoBox = document.getElementById("conversation-box");
    convoBox.scrollTop = convoBox.scrollHeight;
  });

  const [newMessage, setNewMessage] = useState('');



  function handleChange(event) {
    setNewMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newMessage.length > 0) {
      setNewMessage('');
      var time = new Date();
      const item = { message: newMessage, timestamp: time.getHours() + ':' + time.getMinutes(), mine: true }
      setMessages([...messages, item])
    }
  }



  return (
    <table className='text-box' >
      <th className='add-file'>
        <div class="dropup">
          <button class="dropbtn"><i className="bi bi-paperclip"></i></button>
          <div class="dropup-content">
            <File_Record_Buttons />
          </div>
        </div>
      </th>


      <th style={{ width: '100%', height: '100%' }}>
        <form onSubmit={handleSubmit} >
          <table className='new-message' style={{ width: '100%', height: '100%' }}>
            <th id="text-input" className='text-input' ><input className='text-input' type="text" placeholder="New message here..." value={newMessage} onChange={handleChange} /></th>
            <th className='send-button'>
              <button className="send-button" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 20">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </button>
            </th>
          </table>
        </form>
      </th>

      <AttachFile messages={messages} alertFunction={setMessages} />
      <RecordModal messages={messages} alertFunction={setMessages} />

    </table>
  )
}

export default Text_box;