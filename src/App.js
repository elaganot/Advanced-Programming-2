import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Chat_page from './Chat/Chat_page/Chat_page';
import Login from './Login/Login_page';
import Register_Page from './Register/Register_page';
import './index.css'
import Contacts from './Chat/Contacts/Contacts';



function App() {

    const [userName, setUserName] = useState("Ela Ganot");
    const [userImage, setUserImage] = useState("ela.jpeg");

    const [contacts, setContacts] = useState(Contacts);

    return (
        <div className="App">
          <Routes>
            <Route path="/" element={ <Login className="login-page"  contacts={contacts} setContacts={setContacts} setRegisteredName={setUserName} setUserImage={setUserImage}/> } />
            <Route path="register" element={ <Register_Page  contacts={contacts} setContacts={setContacts} setRegisteredName={setUserName} setUserImage={setUserImage}/> } />
            <Route path="chat" element={<Chat_page  contacts={contacts} setContacts={setContacts} username={userName} user_image={userImage} />} />
          </Routes>
        </div>
      )
}

export default App;
