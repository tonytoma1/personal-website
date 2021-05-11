import '../css/skills.css';

import {Card} from 'react-bootstrap';

export default function Skills() {
    return (
        <div className="skills-div">
            <div className="mini-bio">
                <h3>What I do</h3>
                <p>Below is a quick overview of my main technical skill sets and technologies I use. </p>
            </div>

            <div className="cards card-javascript">
                <i class="fab fa-js fa-10x"></i>
            </div>

            <div className="cards card-react">
                <i className="fab fa-react fa-10x"></i>
            </div>

            <div className="cards card-java">
                <i className="fab fa-java fa-10x"></i>
            </div>

            <div className="cards card-css-html">
                <div className="html-card">
                    <i className="fab fa-html5 fa-10x html-icon"></i>
                    <i className="fab fa-css3-alt fa-10x css-icon"></i>
                </div>
            </div>

        </div>
    )
}