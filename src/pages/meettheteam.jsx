import React, { useEffect, useState } from 'react';
import '../stylesheets/meettheteam.css';
import Card from '../components/card';
import Line from '../components/line';
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

const Meettheteam = () => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [period, setPeriod] = useState(null);

  useEffect(() => {
    // Show cached period instantly if available
    const cachedPeriod = getCache('excom-period');
    if (cachedPeriod) setPeriod(cachedPeriod);

    // Show cached excom instantly if available
    const cachedExcom = getCache('excom');
    if (cachedExcom) {
      setRow1(cachedExcom.slice(0, 3));
      setRow2(cachedExcom.slice(3, 6));
      setRow3(cachedExcom.slice(6, 8));
    }

    // Always fetch latest period
    fetch('https://setc-backend.onrender.com/excom-period')
      .then(res => res.json())
      .then(data => {
        if (JSON.stringify(data) !== JSON.stringify(cachedPeriod)) {
          setPeriod(data);
          setCache('excom-period', data);
        }
      })
      .catch(err => console.error("Error fetching period:", err));

    // Always fetch latest excom
    fetch('https://setc-backend.onrender.com/excom')
      .then(res => res.json())
      .then(data => {
        if (JSON.stringify(data) !== JSON.stringify(cachedExcom)) {
          setRow1(data.slice(0, 3));
          setRow2(data.slice(3, 6));
          setRow3(data.slice(6, 8));
          setCache('excom', data);
        }
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });

  }, []);

  return (
    <>
      <Nav />
      <div className="mtt-top_gradient">
        <div className="mtt-top">
          <div className="mtt-top_container">
            <p className='meet'>Meet the team</p>
            <p className='elected'>
              {period
                ? `Elected for period ${period.startMonth} - ${period.endMonth} ${period.year}`
                : 'Loading period...'}
            </p>
          </div>
        </div>

        <div className="team-grid grid1">
          {row1.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              post={member.post}
              speaksAbout={member.speaksAbout}
              enjoys={member.enjoys}
              email={member.email}
            />
          ))}
        </div>
      </div>

      <Line />

      <div className="team-grid">
        {row2.map((member, index) => (
          <Card
            key={index}
            image={member.image}
            name={member.name}
            post={member.post}
            speaksAbout={member.speaksAbout}
            enjoys={member.enjoys}
            email={member.email}
          />
        ))}
      </div>

      <Line />

      <div className="team-grid">
        {row3.map((member, index) => (
          <Card
            key={index}
            image={member.image}
            name={member.name}
            post={member.post}
            speaksAbout={member.speaksAbout}
            enjoys={member.enjoys}
            email={member.email}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Meettheteam;
