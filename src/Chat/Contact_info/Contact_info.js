import React from 'react'
import './Contact_info.css'

function Contact_info({chat}) {

    return (
      <table className='contact-info'>
        <th>{<img className='contact-image' src={chat.image}></img>}</th>
        <th className='contact-name'> {chat.name}</th>
      </table>  )
  
}

export default Contact_info;