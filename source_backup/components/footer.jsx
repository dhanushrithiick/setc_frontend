import React from 'react'
import '../stylesheets/footer.css';
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top_container_1">  
          <div className="footer-top_wma">
                    <p className='head'>WE MEET AT</p>
                    <p className='footer_address'>GF-07, Sri Eshwar College of Engineering,
                    Kinathukadavu, Coimbatore 641202.</p>
          </div>
          <div className="footer-top_git">
                    <p className='head'>GET IN TOUCH</p>
                    <p className='footer_email'>srieshwartoastmasters@gmail.com</p>
          </div>
        </div>
        <div className="footer-top_container_2">
          <div className="grid-container">
                <ul>
                  <li className='head'>SOCIAL</li>
                  <li><a href="https://www.instagram.com/sri.eshwar_toastmasters_club/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                  <li><a href="https://www.linkedin.com/in/sri-eshwar-toastmasters-club-7b331630b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                  <li><a href="https://www.youtube.com/@srieshwartoastmastersclub2417/videos" target="_blank" rel="noopener noreferrer">YOUTUBE</a></li>
                </ul>

                <ul>
                  <li className='head'>PAGES</li>
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/pathways">PATHWAYS</Link></li>
                  <li><Link to="/meettheteam">MEET THE TEAM</Link></li>
                </ul>
                <ul>
                  <li className='head'>CONTACT</li>
                  <li><Link to="/contact">REACH US</Link></li>
                </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footer-tagline'>Where leaders Are Made.</p>
      </div>
    </div>
  )
}

export default footer