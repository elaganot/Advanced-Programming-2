import React, { useState } from 'react'
import Contact_item from '../Contact_item/Contact_item';
import './Contact_list.css'
import AddContact from '../AddContact/AddContact'



function Contact_list({ contacts, setContacts, setChatBox, name }){

  const [foundContact, setFoundContact] = useState(
    contacts.find((contact) => contact.name == name)
  );

  return (
    <div className='contact-list'>
      {foundContact.myFriends.map((user, key) => 
        <Contact_item  {...user} setChatBox={setChatBox} key={key} />
      )}
      <AddContact name={name} contacts={contacts} alertFunction={(newFriend) => {
        setFoundContact({...foundContact, myFriends: [...foundContact.myFriends, newFriend]});
      }} />
    </div>
  )
}


export default Contact_list;