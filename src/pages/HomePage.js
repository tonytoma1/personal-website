import Sidebar from '../components/sidebar';
import AboutMe from '../components/about-me';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Footer from '../components/footer'
import {Container} from 'react-bootstrap';

import '../css/homepage.css';

export default function HomePage() {

    return(
        <div class="grid">
            <div className="sidebar">
                <Sidebar/>
            </div>

            <div className="skills">
                <Skills/>
            </div>
            
            <div className="about-me">
                <AboutMe />
            </div>
            
            <div className="projects">
                <Projects/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
            
        </div>
    )

}