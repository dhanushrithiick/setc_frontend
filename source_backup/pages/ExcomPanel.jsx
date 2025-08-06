import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/excompanel.css';

import Afooter from '../components/adminfooter.jsx';

const ExcomPanel = () => {
  const navigate = useNavigate();
  const [Excoms, setExcoms] = useState([]);

  useEffect(() => {
    fetch('https://setc-backend.onrender.com/excom')
      .then((res) => res.json())
      .then((data) => setExcoms(data))
      .catch((err) => console.error('Error fetching excom members:', err));
  }, []);

  return (
    <>
      <div className="excom_panel_nav">
        <img
          src="./images/arrow_back_white.svg"
          className="achievement_panel_nav_back"
          onClick={() => navigate('/manage-site')}
          alt="Back"
        />
        <div className="excom_panel_nav_content">
          <div className="excom_panel_nav_text">ExCom Panel</div>
          <p className='excom_panel_nav_text2'>To update the current Excom term period, click the button below.</p>
          <button className='excom_panel_nav_button' onClick={() => navigate('/updatetermperiod')}>Update term</button>
        </div>
      </div>

      {Excoms.map((member, index) => (
        <>
        <div key={index} className="excom_panel_card_container_overall">
          <div className="excom_panel_card">
            <div className="excom_panel_card_container1">
              <img src={member.image || './images/luffy.jpg'} alt={member.name} />
            </div>

            <div className="excom_panel_card_container2">
              <div className="excom_card_role">{member.post}</div>
              <div className="excom_card_head">Name:</div>
              <div className="excom_card_desc">{member.name}</div>
              <div className="excom_card_head">Speaks About:</div>
              <div className="excom_card_desc">{member.speaksAbout}</div>
              <div className="excom_card_head">Enjoys:</div>
              <div className="excom_card_desc">{member.enjoys}</div>
              <div className="excom_card_head">Email:</div>
              <div className="excom_card_desc">{member.email}</div>
              <button className="excom_panel_button"   onClick={() => navigate('/updateexcom', { state: { member } })}>Update</button>
            </div>
          </div>
          
        </div>
         {index !== Excoms.length - 1 && <div className="excom_panel_line"></div>}
        </>
      ))}
      <Afooter/>
    </>
  );
};

export default ExcomPanel;
