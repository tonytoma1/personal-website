import '../css/sidebar.css';

export default function Sidebar() {
    return(
        <div className="sidebar-grid">
            <div className="sidebar-top-content">
                <div className="top-container">
                    <img src="/self-photo3.png" />
                    <h2 id="name">Tony Toma</h2>
                    <p className="header">Hello, I am Tony and I am a software developer from Canada</p>
                    <div className="border"></div>
                </div>
            </div>

            <div className="sidebar-middle-content">
                <div className="middle-container">
                    <h3 id="links-header">Contact Links</h3>
                    <ul className="links-group fa-ul">
                        <li>
                            <a className="links" href="https://www.linkedin.com/in/tony-toma/">
                                <span class="fa-li"><i class="fab fa-linkedin"></i></span>Linkedin
                            </a>
                        </li>
                        <li>
                            <a className="links" href="/Tony_Toma_Resume.rtf" download>
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
                </div>
            </div>

            <div className="sidebar-bottom-content">
              
            </div>

        </div>

    );
}
