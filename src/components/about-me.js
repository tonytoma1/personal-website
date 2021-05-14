
export default function AboutMe() {
    return(
        <div className="about-me-grid">
           <div className="about-me-content">
                <h1 className="title">Tony Toma</h1>
                <h5 className="about-me-text">I'm a software developer specialised in frontend and backend development for 
                    complex scalable web apps. Want to know how I may help your project?
                    Check out my project portfolio and online resume. </h5>
                <div className="profile-buttons">
                <a href="https://github.com/tonytoma1">
                    <button className="portfolio-button">
                            <i class="fas fa-laptop-code"></i>Portfolio
                    </button>
                </a>
                <a href="mailto: tonytoma4@outlook.com">
                    <button id="hire-me-button">
                        <i class="far fa-id-badge"></i>Contact Me
                    </button>
                </a>
                </div>



           </div>
           <div className="about-me-image">
                <img src={`${process.env.PUBLIC_URL}/photo.jpg`} className="about-me-photo"/>
           </div>
        </div>
    )
}
