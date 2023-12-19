import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleToggle = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    const nav = document.querySelector('.nav-list');
    if (nav) {
      if (isNavActive) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    }
  }, [isNavActive]);


  return (
    <>
      <header>
      <div className="toggle-btn" id="toggleBtn" onClick={handleToggle}>&#9776;</div>
        <nav>
          <div className="logo">
            <img src="asset/WhiteLogo.png" alt="Logo" />
          </div>
          <ul className="nav-list">
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">CAREERS</a></li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <img src="asset/HeroImage.png" alt="Hero Image" />
        <div className="overlay">
          <div className="content">
            <div className="paragraph">We crush your<br /> competitors, goals, and
              <br /> sales records without<br /> the B.S</div>
            <button className="get-started-btn" type="button">GET FREE CONSULTATION</button>
          </div>
        </div>
      </div>
      <div className="content-container">
        <img src="asset/image2.png" alt="Description Image" />
        <div className="text-content">
          <h2>Web & Mobile App Development</h2>
          <p>
            Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content
            and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
          </p>
          <button className="learn-more" type="button">Learn More</button>
        </div>
      </div>
      <div className="content-container2">
        <div className="text-content">
          <h2>Digital Strategy Consulting</h2>
          <p>
            <img src="asset/image1.png" alt="Description Image" style={{ float: 'right', marginTop: '-70px' }} />
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in
            isolation, and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
          </p>
          <button className="learn-more" type="button">Learn More</button>
        </div>
      </div>
      <footer>
        <div className="row">
          <div className="logo2">
            <img src="asset/WhiteLogo.png" alt="Logo" />
            <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
          </div>
          <div className="technology">
            <h3>Our Technologies</h3>
            <ol>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ol>
          </div>

          <div className="services">
            <h3>Our Services</h3>
            <ul>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing Solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>

        <div className="line-divider"></div>

        <div className="footer-bottom">
          <div className="legal-links">
            <span>Privacy Policy</span>
            <div className="divider"></div>
            <span>Terms & Conditions</span>
          </div>
        </div>
    </footer>
  </>
);
}

export default App;
