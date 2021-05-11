import {Card, Button} from 'react-bootstrap';

import '../css/project.css';


export default function Projects() {
    return(
        <div className="project-div">
            <div className="project-description">
                    <h3>Projects</h3>
                    <p>Here are some of the projects i worked on.</p>
            </div>
            <div className="recommerce">
                <Card className="project-cards">
                    <Card.Img src="/recommerce.png"/>
                    <Card.Title>Recommerce - Phone Reselling Platform</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Spring Boot</li>
                            <li>React</li>
                            <li>JWT Authentication</li>
                        </ul>
                    </Card.Text>
                    <Button>View Project</Button>
                </Card>
            </div>

            <div className="news">
                <Card className="project-cards">
                    <Card.Img src="/news_page.png"/>
                    <Card.Title>Daily News - Find trending articles</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Javascript Promises</li>
                        </ul>
                    </Card.Text>
                    <Button>View Project</Button>
                </Card>
            </div>
        </div>
    )
}