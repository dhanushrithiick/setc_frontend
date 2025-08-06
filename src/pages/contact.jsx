import React, { useState } from 'react';
import '../stylesheets/contact.css';
import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') setCharCount(value.length);
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('https://setc-backend.onrender.com/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCharCount(0);
    } else {
      alert('Failed to send message.');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
    console.error('Error:', error);
  }
};

  return (
    <>
    <Nav/>
    <div className="contact_container">
      <div className="contact_container_1">
        <img src="/images/contact.jpg" alt="Contact Us" />
      </div>

      <div className="contact_container_2">
        <p className="contact_title1">Contact us</p>
        <p className="contact_title2">
          If you have questions or comments, you may contact us here:
        </p>

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">Name<span>*</span></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email<span>*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form_group">
            <label htmlFor="subject">Subject<span>*</span></label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>

          <div className="form_group">
            <label htmlFor="message">Message<span>*</span></label>
            <textarea
              id="message"
              name="message"
              maxLength="300"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <p className="char_count">{charCount} / 300</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
