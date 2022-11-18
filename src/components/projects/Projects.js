import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "../cards/ProjectCard";
import projImg1 from "../../assets/img/projImg1.png";
import projImg from "../../assets/img/projImg-soon.png";
import navIcon1 from '../../assets/img/nav-icon1.png';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projectFull = [
        {
            title: "Autonominas",
            description: "Its purpose is to empower Brazilian girls and women by sharing knowledge and experiences and creating a support network based on respect and sorority.",
            imgUrl: projImg1,
            github: <div className="social-icon"><a href="https://github.com/autonominas"><img src={navIcon1} alt="" /></a></div>,
        },
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },

    ];

    const projectFront = [
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },

    ];
    const projectBack = [
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },
        {
            title: "Wait for it!",
            description: "The Queen B is working on it",
            imgUrl: projImg,
        },

    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p> Here you will find all the projects developed by me. Hope you like it! </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Fullstack</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Frontend</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Backend</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projectFull.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projectFront.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projectBack.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

