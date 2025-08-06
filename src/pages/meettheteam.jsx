import React, { useEffect, useState } from 'react';
import '../stylesheets/meettheteam.css';
import Card from '../components/card';
import Line from '../components/line';
import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';

const Meettheteam = () => {
  const [row1, setrow1] = useState([]);
  const [row2, setrow2] = useState([]);
  const [row3, setrow3] = useState([]);
  const [period, setPeriod] = useState(null);

  useEffect(() => {
    // Fetch Excom Period
    fetch('https://setc-backend.onrender.com/excom-period')
      .then(res => res.json())
      .then(data => {
        setPeriod(data); // { startMonth: 'January', endMonth: 'June', year: 2025 }
      })
      .catch(err => console.error("Error fetching period:", err));

    // Fetch Excom Members
    fetch('https://setc-backend.onrender.com/excom')
      .then(res => res.json())
      .then(data => {
        setrow1(data.slice(0, 3));
        setrow2(data.slice(3, 6));
        setrow3(data.slice(6, 8));
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
