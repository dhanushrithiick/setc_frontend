import React, { useEffect, useState } from 'react';
import '../stylesheets/TestimonialPanel.css'; // update CSS file if different
import { useNavigate } from 'react-router-dom';
import Afooter from '../components/adminfooter.jsx';

const TestimonialsPanel = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://setc-backend.onrender.com/testimonial')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        return response.json();
      })
      .then(data => {
        setTestimonials(data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://setc-backend.onrender.com/testimonial/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Testimonial deleted successfully!');
        setTestimonials(prev => prev.filter(item => item._id !== id));
      } else {
        alert('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <>
      <div className="testimonial_panel_nav">
        <img
          src="./images/arrow_back_white.svg"
          className="testimonial_panel_nav_back"
          onClick={() => navigate('/manage-site')}
          alt="Back"
        />
        <div className="testimonial_panel_nav_content">
          <div className="testimonial_panel_nav_text">Testimonial Panel</div>
          <p className='testimonial_panel_nav_text1'>Add Testimonial</p>
          <p className='testimonial_panel_nav_text2'>To add a new testimonial, click the button below.</p>
          <button className='testimonial_panel_nav_button' onClick={() => navigate('/addtestimonial')}>Add New</button>
        </div>
      </div>

      <p className='testimonial_panel_all_testimonials'>All Testimonials</p>

      {testimonials.map((testimonial, index) => (
        <React.Fragment key={testimonial._id}>
          <div className="testimonial_display_outer">
            <div className="testimonial_display">
              <div className="testimonial_card_head">NAME:</div>
              <div className="testimonial_card_desc">{testimonial.name}</div>
              <div className="testimonial_card_head">MESSAGE:</div>
              <div className="testimonial_card_desc">{testimonial.message}</div>
              <div className="testimonial_card_buttons">
                <button className='testimonial_panel_button' onClick={() => handleDelete(testimonial._id)}>Delete</button>
              </div>
            </div>
          </div>
          {index !== testimonials.length - 1 && (
            <div className="testimonial_panel_line"></div>
          )}
        </React.Fragment>
      ))}
      <Afooter />
    </>
  );
};

export default TestimonialsPanel;
