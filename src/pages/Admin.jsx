import React from 'react';
import '../stylesheets/admin.css';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const adminOptions = [
    { name: 'ExCom Panel', icon: '/images/excom icon.png', path: '/excompanel' },
    { name: 'Achievements Panel', icon: '/images/achievement icon.png', path: '/achievementpanel' },
    { name: 'Testimonials Panel', icon: '/images/testimonial icon.png', path: '/testimonialpanel' },
    { name: 'Messages Panel', icon: '/images/message icon.png', path: '/messagespanel' },
  ];

  return (
 <>
      <div className="admin_nav">
        <p className='admin_nav_back' onClick={goToHome}>Back</p>
        <button className='return_to_website_button' onClick={goToHome}>Return to website</button>
      </div>

      <div className="admin_container">
        <div className="admin_grid">
          {adminOptions.map((item, index) => (
            <div
              className="admin_card"
              key={index}
              role="button"
              tabIndex={0}
              aria-label={item.name}
              onClick={() => navigate(item.path)}
            >
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className="admin_card_icon"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/icons/fallback.svg";
                }}
              />
              <p className="admin_card_label">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

</>
  );
};

export default Admin;
