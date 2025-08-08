import React, { useEffect, useState } from 'react';
import '../stylesheets/about.css';
import Line from '../components/line.jsx';
import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';

// Cache helpers
const getCache = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
const setCache = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem(`${key}_time`, Date.now());
};

const About = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Show cached achievements instantly
    const cached = getCache('achievements');
    if (cached) setAchievements(cached);

    // Always fetch latest achievements
    fetch("https://setc-backend.onrender.com/achievement")
      .then((res) => res.json())
      .then((data) => {
        if (JSON.stringify(data) !== JSON.stringify(cached)) {
          setAchievements(data);
          setCache('achievements', data);
        }
      })
      .catch((err) => console.error("Error fetching achievements:", err));
  }, []);

  return (
    <>
      <Nav />
      <div className='about-hs_container'>
        <br /><br />
        <img src="/images/tm_logo.png" className='about-hs_tm_logo' />
        <p className='about-hs_club_name'>Sri Eshwar Toastmasters Club</p>
        <p className='about-hs_dda'>Division H | District 120 | Area H4</p>
      </div>

      <div className="about-container">
        <div className="about-container1">
          <p>About us</p>
        </div>
        <div className="about-container2">
          <p>The Sri Eshwar Toastmasters Club is dedicated to empowering individuals with the skills to excel in communication
            and leadership. As part of the globally renowned Toastmasters International, we strive to nurture confidence, creativity,
            and collaboration among our members.</p><br />

          <p>Over the years, the club has proudly facilitated the delivery of over 100 inspiring speeches at various events and
            contests, while training more than 50 individuals to achieve their personal and professional growth goals. Our efforts
            have also been recognized with 10 prestigious awards in inter-collegiate speech contests, reflecting our commitment to
            excellence.</p><br />

          <p>Our mission is to:</p><br />
          <p>&nbsp;&nbsp;•&nbsp;&nbsp;Enhance communication skills through practice and constructive feedback.</p>
          <p>&nbsp;&nbsp;•&nbsp;&nbsp;Foster leadership growth by providing opportunities to take on leadership roles.</p>
          <p>&nbsp;&nbsp;•&nbsp;&nbsp;Build self-confidence in a supportive and encouraging environment.</p>
          <p>&nbsp;&nbsp;•&nbsp;&nbsp;Help you discover and amplify your unique voice.</p><br />

          <p>As a part of Toastmasters International, a global nonprofit organization, our club is dedicated to nurturing leaders
            and speakers through a network of clubs worldwide, helping members grow both personally and professionally.</p>
        </div>
      </div>

      <Line />

      <div className="about-container">
        <div className="about-container1">
          <p>Our History</p>
        </div>
        <div className="about-container2">
          <p>The Sri Eshwar Toastmasters Club began its remarkable journey on June 26, 2018, when it was officially chartered as part
            of District 82 - Area L4. From the very start, the club was fueled by a vision of empowering individuals to become confident
            communicators and impactful leaders.</p><br />

          <p>Under the leadership of TM Aishwarya, the club’s first President, and with a founding team of just 17 passionate members,
            the groundwork was laid for a culture of collaboration, learning, and excellence. Weekly meetings became a space where members
            could challenge themselves, overcome their fears, and refine their skills.</p><br />

          <p>In time, the club's influence expanded, and it transitioned to District 120 - Area B5, further broadening its reach and
            opportunities. Today, Sri Eshwar Toastmasters Club proudly boasts an active membership of 31 dedicated individuals,
            continuing to uphold its tradition of excellence through enthusiastic participation in weekly meetings, contests, and special
            events.</p><br />

          <p>Owing to the continued success and thriving community of Sri Eshwar Toastmasters Club, the Sri Eshwar Toastmasters Club – Chapter 2 was officially chartered on
            August 9, 2025. This new chapter stands as a testament to the club’s growth and its ongoing commitment to shaping confident speakers and leaders 
            within the Sri Eshwar campus.</p><br />
        </div>
      </div>

      <Line />

      <div className="about-achievements">
        <div className="about-achievements_container1">
          <div className='about_achievements_title'>Our Achievements</div>
          <div className='about_achievements_desc'>Celebrating the milestones that inspire our future</div>
        </div>
        <div className="about-achievements_container2">
          <div className="about_achievements_grid">
            {achievements.length > 0 ? (
              achievements.map((item, index) => (
                <div key={index} className="achievement_card">
                  <img src={item.imageUrl} alt={item.name} className="achievement_image" />
                  <p className='achievement_text'>{item.name}<br />({item.years})</p>
                </div>
              ))
            ) : (
              <p>Loading achievements...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
