import React, { useEffect, useState } from 'react';
import '../stylesheets/AchievementPanel.css';
import { useNavigate } from 'react-router-dom';
import Afooter from '../components/adminfooter.jsx';

const AchievementsPanel = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch('https://setc-backend.onrender.com/achievement')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch achievements');
        }
        return response.json();
      })
      .then(data => {
        setAchievements(data);
      })
      .catch(error => {
        console.error('Error fetching achievements:', error);
      });
  }, []);

const handleDelete = async (id) => {
  try {
    const response = await fetch(`https://setc-backend.onrender.com/achievement/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Achievement deleted successfully!');
      // Remove the deleted item from the state
      setAchievements(prev => prev.filter(item => item._id !== id));
    } else {
      alert('Failed to delete achievement');
    }
  } catch (error) {
    console.error('Delete error:', error);
    alert('Something went wrong');
  }
};


  return (
    <>
      <div className="achievement_panel_nav">
        <img
          src="./images/arrow_back_white.svg"
          className="achievement_panel_nav_back"
          onClick={() => navigate('/manage-site')}
          alt="Back"
        />
        <div className="achievement_panel_nav_content">
          <div className="achievement_panel_nav_text">Achievement Panel</div>
          <p className='achievement_panel_nav_text1'>Add achievement</p>
          <p className='achievement_panel_nav_text2'>To add a new achievement, click the button below.</p>
          <button className='achievement_panel_nav_button' onClick={() => navigate('/addachievement')}>Add New</button>
        </div>
      </div>

      <p className='achievement_panel_all_achievements'>All Achievements</p>

      {achievements.map((achievement, index) => (
        <React.Fragment key={achievement._id}>
          <div className="achievement_display_outer">
            <div className="achievement_display">
              <div className="achievement_card_head">NAME:</div>
              <div className="achievement_card_desc">{achievement.name}</div>
              <div className="achievement_card_head">YEARS:</div>
              <div className="achievement_card_desc">{achievement.years}</div>
              <div className="achievement_card_buttons">
                <button className='achievement_panel_button'onClick={() => navigate('/editachievement', { state: { achievement } })}>Edit</button>
                <button className='achievement_panel_button' onClick={() => handleDelete(achievement._id)}>Delete</button>

              </div>
            </div>
          </div>
          {index !== achievements.length - 1 && (
            <div className="achievement_panel_line"></div>
          )}
        </React.Fragment>
      ))}
      <Afooter/>
    </>
  );
};

export default AchievementsPanel;
