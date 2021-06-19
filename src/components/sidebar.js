import '../css/sidebar.css';

import {useState} from 'react';


function MobileLinks() {
    return (
      <ul className='mobile-links fa-ul' >
          <li>
              <a className="links" href="https://www.linkedin.com/in/tony-toma/">
                  <span class="fa-li"><i class="fab fa-linkedin"></i></span>Linkedin
              </a>
          </li>
          <li>
              <a className="links" href={`${process.env.PUBLIC_URL}/Tony_Toma_Resume.rtf`} download>
                  <span class="fa-li"><i class="fas fa-id-badge"></i></span>Resume
              </a>
          </li>
          <li>
              <a className="links"  href="https://github.com/tonytoma1">
                  <span class="fa-li"><i class="fab fa-github"></i></span>Github
              </a>
          </li>
          <li>
              <a className="links" href="mailto: tonytoma5@outlook.com">
                  <span class="fa-li"><i class="far fa-envelope"></i></span>Email
              </a>
          </li>
      </ul>
    )
}


function PersonalLinks() {
  return (
    <ul className='links-group fa-ul'>
        <li>
            <a className="links" href="https://www.linkedin.com/in/tony-toma/">
                <span class="fa-li"><i class="fab fa-linkedin"></i></span>Linkedin
            </a>
        </li>
        <li>
            <a className="links" href={`${process.env.PUBLIC_URL}/Tony_Toma_Resume.rtf`} download>
                <span class="fa-li"><i class="fas fa-id-badge"></i></span>Resume
            </a>
        </li>
        <li>
            <a className="links"  href="https://github.com/tonytoma1">
                <span class="fa-li"><i class="fab fa-github"></i></span>Github
            </a>
        </li>
        <li>
            <a className="links" href="mailto: tonytoma4@outlook.com">
                <span class="fa-li"><i class="far fa-envelope"></i></span>Email
            </a>
        </li>
    </ul>
  )
}

export default function Sidebar() {
    const[status, setStatus] = useState(false);

    return(
        <div className="sidebar-grid">
            <div className="sidebar-top-content">
                <div className="top-container">
                    <img src={`${process.env.PUBLIC_URL}/self-photo2.png`} />
                    <h2 id="name">Tony Toma</h2>
                    <p className="header">Hello, I am Tony and I am a software developer from Canada</p>
                    <div className="border"></div>
                </div>
            </div>

            <div className="sidebar-middle-content">
                <div className="middle-container">
                    <h3 id="links-header">Contact Links</h3>

                    <button className="hamburger" id="hamburger" onClick={() => setStatus(!status)}>
                        <i className="fas fa-bars"></i>
                    </button>

                    {status ? <MobileLinks /> : ''}


                    <PersonalLinks css="links-group"/>
                </div>
            </div>

            <div className="sidebar-bottom-content">

            </div>

        </div>

    );
}
