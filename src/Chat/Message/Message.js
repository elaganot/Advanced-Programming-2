import React from 'react';
import "./Message.css"



function Message({ message, timestamp, mine }) {

    if (mine) {
        return (
            <div className="chat-message ">
                {message}
                <div className="chat-time">{timestamp}</div>
            </div>


        )
    }
    else {
        return (
            <div className="friend-message">
                {message}
                <div className="chat-time">{timestamp}</div>
            </div>
        )
    }

}

export default Message;