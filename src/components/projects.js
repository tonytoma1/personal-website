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
                    <Card.Title className="card-title">Recommerce - Phone Reselling Platform</Card.Title>
                    <Card.Text className="card-text">
                        <ul>
                            <li>Spring Boot</li>
                            <li>React</li>
                            <li id="note">This project is hosted on heroku. It takes a minute to bootup</li>
                        </ul>
                    </Card.Text>
                    <a className="project-link" href="https://recommerce-front-end.herokuapp.com/">
                        <Button>View Project</Button>
                    </a>
                </Card>
            </div>

            <div className="news">
                <Card className="project-cards">
                    <Card.Img src="/news.png"/>
                    <Card.Title className="card-title">Daily News - Find Trending Articles</Card.Title>
                    <Card.Text className="card-text">
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Javascript Promises</li>
                        </ul>
                    </Card.Text>
                    <a className="project-link" href="https://github.com/tonytoma1/News-Reporter">
                        <Button>View Project</Button>
                    </a>
                </Card>
            </div>
        </div>
    )
}