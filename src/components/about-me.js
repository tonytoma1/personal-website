
export default function AboutMe() {
    return(
        <div className="about-me-grid">
           <div className="about-me-content">
                <h1 className="title">Tony Toma</h1>
                <h5>I'm a software developer specialised in frontend and backend development for 
                    complex scalable web apps. Want to know how I may help your project? 
                    Check out my project portfolio and online resume. </h5>
                <div className="profile-buttons">
                    <button className="portfolio-button"><i class="fas fa-laptop-code"></i>Portfolio</button>
                    <button id="hire-me-button"><i class="far fa-id-badge"></i>Hire me</button>
                </div>

                

           </div>
           <div className="about-me-image">
                <img src="/placeholder.png" className="about-me-photo"/>
           </div>
        </div>
    )
}