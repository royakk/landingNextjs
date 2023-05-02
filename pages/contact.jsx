import React from 'react'
import contact from '../styles/contact.module.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Navbar from '../src/components/navbar/navbar';
export default function Contact() {
  return (
    <>
    <Navbar>
    <div className={contact.main}>
        
    <div className={contact.container}>
    <div className={contact.title}>Contact Us</div>
    <form className={contact.form} action="#">
      <div className={contact.userDetails}>
        <div className={contact.inputBox}>
          <span className={contact.details}>Full Name</span>
          <input type="text" placeholder="Enter Your Name" required />
        </div>
        
        <div className={contact.inputBox}>
          <span className={contact.details}>Email</span>
          <input type="text" placeholder="Enter Your Email" required />
        </div>
        <div className={contact.inputBox}>
          <span className={contact.details}>discription</span>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="discription..."
            style={{ width: 200 }}
            />
        </div>
        <div className={contact.inputBox}>
          <span className={contact.details}>Phone Number</span>
          <input type="text" placeholder="Enter Your Number" required />
        </div>
        
      </div>
     
      <div className={contact.button}>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
    </Button>
      </div>
    </form>
  </div>
  </div>
  </Navbar>
  </>)
}
