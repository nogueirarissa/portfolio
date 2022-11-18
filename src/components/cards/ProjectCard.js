import { Col } from "react-bootstrap";
import navIcon1 from '../../assets/img/nav-icon1.png';

export const ProjectCard = ({ title, description, imgUrl, github }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                        <p>{description}</p>
                    <div>{github}</div>
                </div>
            </div>
        </Col >
    )
}

{/* <div className="social-icon">
                            <a href="https://github.com/autonominas"><img src={navIcon1} alt="" /></a>
                        </div> */}