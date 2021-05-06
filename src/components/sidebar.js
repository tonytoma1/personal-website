import '../css/sidebar.css';

export default function Sidebar() {
    return(
        <div className="sidebar-grid">
            <div className="sidebar-top-content">
                <div className="top-container">
                    <img src="/profile-pic-holder.png" />
                    <h2>Tony Toma</h2>
                    <h4>Hello, I am Tony and I am a software developer from Canada</h4>
                </div>
            </div>

            <div className="sidebar-middle-content">
                <ul>
                    <li>Linkedin</li>
                    <li>Resume</li>
                    <li>Github</li>
                    <li>Email</li>
                    <li>Hire Me</li>
                    
                </ul>
            </div>

            <div className="sidebar-bottom-content">
                bottom of sidebar
            </div>

        </div>

    );
}
