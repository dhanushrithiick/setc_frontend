import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/MessagesPanel.css';
import Afooter from '../components/adminfooter.jsx';

const MessagesPanel = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://setc-backend.onrender.com/message') // Update if your backend runs on another port
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error('Error fetching messages:', err));
  }, []);

  return (
    <>
      <div className="message_panel_nav">
        <img
          src="./images/arrow_back.svg"
          className="message_panel_nav_back"
          onClick={() => navigate('/manage-site')}
          alt="Back"
        />
        <div className="message_panel_nav_text">Messages Panel</div>
        <p className="messages_content_allmessages">All Messages</p>
      </div>

      {messages.map((msg, index) => (
        <div key={msg._id || index}>
          <div className="messages_card">
            <div className="messages_card_head">DATE / TIME:</div>
            <div className="messages_card_desc">
              {new Date(msg.createdAt).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>

            <div className="messages_card_head">NAME:</div>
            <div className="messages_card_desc">{msg.name}</div>

            <div className="messages_card_head">EMAIL:</div>
            <div className="messages_card_desc">{msg.email}</div>

            <div className="messages_card_head">SUBJECT:</div>
            <div className="messages_card_desc">{msg.subject}</div>

            <div className="messages_card_head">MESSAGE:</div>
            <div className="messages_card_desc">{msg.message}</div>
          </div>

          {/* Show line only if it's not the last message */}
          {index !== messages.length - 1 && <div className="messages_line"></div>}
        </div>
      ))}
      <Afooter/>
    </>
  );
};

export default MessagesPanel;
