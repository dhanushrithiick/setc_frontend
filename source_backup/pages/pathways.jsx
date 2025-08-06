import React from 'react';
import '../stylesheets/pathways.css';
import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';

const paths = [
  { name: 'Dynamic Leadership', img: '/images/pathways/DL.svg', url: "https://www.toastmasters.org/pathways-overview/pathways-dynamic-leadership-path"},
  { name: 'Engaging Humor', img: '/images/pathways/EH.svg', url: 'https://www.toastmasters.org/pathways-overview/pathways-engaging-humor-path' },
  { name: 'Motivational Strategies', img: '/images/pathways/MS.svg', url: 'https://www.toastmasters.org/pathways-overview/pathways-motivational-strategies-path' },
  { name: 'Persuasive Influence', img: '/images/pathways/PI.svg', url: 'https://www.toastmasters.org/pathways-overview/pathways-persuasive-influence-path' },
  { name: 'Presentation Mastery', img: '/images/pathways/PM.svg', url: 'https://www.toastmasters.org/pathways-overview/pathways-presentation-mastery-path' },
  { name: 'Visionary Communication', img: '/images/pathways/VC.svg', url: 'https://www.toastmasters.org/pathways-overview/pathways-visionary-communication-path' },
];

const Pathways = () => {
  return (
    <>
    <Nav/>
      <div className="pathways_container1">
        <img src='/images/Pathwayslogo.png' className='pathways_container1_image' alt="Pathways Logo" />
      </div>

      <div className="pathways_container2">
        <section className="pathways_section">
          <div className="pathways_inner">
            <div className="pathways_header">🌟 Welcome to Toastmasters Pathways</div>
            <div className="pathways_section1_extra1">Your Personalized Learning Experience Starts Here</div>
            <div className="pathways_section1_extra2">What is Pathways?</div>
            <div className="pathways_desc">
              Pathways is Toastmasters International’s modern education program that helps you become a more confident speaker and
              stronger leader—at your own pace, and based on your personal goals. Whether you're just starting out or have years of
              experience, Pathways gives you the tools to grow.
            </div>
          </div>
        </section>

        <section className="pathways_section">
          <div className="pathways_inner">
            <div className="pathways_header">🚀 Why Pathways?</div>
            <div className="pathways_desc">
              <div className="pathwayssection2_head">Pick What You Want to Learn</div>
              <div className="pathwayssection2_desc">Choose from 6 learning paths based on your goals—like speaking, leading, managing teams, or building relationships.</div>

              <div className="pathwayssection2_head">Learn Online or on Paper</div>
              <div className="pathwayssection2_desc">Access everything on your computer, or request printed materials if that’s more your style.</div>

              <div className="pathwayssection2_head">Practical Skills That Matter</div>
              <div className="pathwayssection2_desc">From public speaking to mentoring to managing conflict—you’ll learn 280+ useful, real-world skills.</div>

              <div className="pathwayssection2_head">Recognition as You Grow</div>
              <div className="pathwayssection2_desc">Earn badges, certificates, and cheers from your club as you complete each level.</div>

              <div className="pathwayssection2_head">Learn With Others</div>
              <div className="pathwayssection2_desc">Pathways also helps you become a mentor—and receive mentorship—so no one’s ever learning alone.</div>
            </div>
          </div>
        </section>

        <section className="pathways_section">
          <div className="pathways_inner">
            <div className="pathways_header">📚 Choose Your Own Path</div>
            <div className="pathways_desc">
              When you start, you’ll take a quick assessment that helps you pick the path that fits you best.
              Here are a few popular ones:
            </div>
          </div>
        </section>
      </div>

      <div className="pathways_grid">
        {paths.map((item, index) => (
          <div
            className="path_card"
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`Select ${item.name} Path`}
            onClick={() => window.open(item.url, "_blank")}
          >
            <img
              src={item.img}
              alt={`Pathways badge: ${item.name}`}
              className="path_card_img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/fallback.svg";
              }}
            />
            <p className="path_card_label">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="pathways_container2">
        <section className="pathways_section">
          <div className="pathways_inner">
            <div className="pathways_header">🌐 What’s Base Camp?</div>
            <div className="pathways_desc">
              Access all your projects, track progress, watch videos, download resources, and store your evaluations on Base Camp—your one-stop platform for learning.
              <br />
              All you need is your Toastmasters login. Need help? Just ask—we’ve got your back.
            </div>
          </div>
        </section>

        <section className="pathways_section">
          <div className="pathways_inner">
            <div className="pathways_header">🤝 We’re With You</div>
            <div className="pathways_desc">
              You’re never on this journey alone. Our Vice President Education (VPE), your mentor, and every club member are here to help you at every step. Whether it’s choosing your first path or understanding Base Camp—we’ll walk you through it.
            </div>
          </div>
        </section>

        <section className="pathways_section">
          <div className="pathways_inner">
            <div className="pathways_header">💬 Got Questions?</div>
            <div className="pathways_desc pathways_last">
              Come to any meeting or reach out to your club officers—we’re happy to help! With Pathways, you’ll grow one project at a time, and we’ll be cheering you on the whole way.
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Pathways;
