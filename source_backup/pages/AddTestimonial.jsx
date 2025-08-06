import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/addTestimonial.css'; // Updated CSS file path

const AddTestimonial = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://setc-backend.onrender.com/testimonial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Testimonial added successfully!');
        navigate('/testimonialpanel');
      } else {
        alert('Failed to add testimonial');
      }
    } catch (error) {
      console.error('Add error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <>
      <div className="add_testimonial_nav">
        <img
          src="./images/arrow_back.svg"
          className="add_testimonial_nav_back"
          onClick={() => navigate('/testimonialpanel')}
          alt="Back"
        />
        <div className="add_testimonial_nav_text">Add Testimonial</div>
      </div>

      <div className="add_testimonial_container">
        <form onSubmit={handleSubmit} className="add_testimonial_form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="add_testimonial_input"
            required
          />

          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="add_testimonial_input testimonial_panel_messgae"
            rows={5}
            required
          />

          <button type="submit" className="add_testimonial_submit_btn">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddTestimonial;
