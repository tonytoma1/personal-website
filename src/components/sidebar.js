import '../css/sidebar.css';

export default function Sidebar() {
    return(
        <div className="sidebar-grid">
            <div className="sidebar-top-content">
                <div className="top-container">
                    <img src="/profile-pic-holder.png" />
                    <h2 id="name">Tony Toma</h2>
                    <p className="header">Hello, I am Tony and I am a software developer from Canada</p>
                </div>
            </div>

            <div className="sidebar-middle-content">
                <div className="middle-container">
                    <h3 id="links-header">Contact Links</h3>
                    <ul className="links-group fa-ul">
                        <li><span class="fa-li"><i class="fab fa-linkedin"></i></span>Linkedin</li>
                        <li><span class="fa-li"><i class="fas fa-id-badge"></i></span>Resume</li>
                        <li><span class="fa-li"><i class="fab fa-github"></i></span>Github</li>
                        <li><span class="fa-li"><i class="far fa-envelope"></i></span>Email</li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-bottom-content">
              
            </div>

        </div>

    );
}
