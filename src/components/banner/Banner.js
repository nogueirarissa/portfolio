import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../../assets/img/headerImg.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["a Web Developer", " a Tech Lover", "a Result Driven"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        < TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bee welcome to my Hive!</span>
                                    <h1>{`Hello! I'm Larissa:`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Tech Lover", "Result Driven"]'><span className="wrap">{text}</span></span></h1>
                                    <p>In this hive, you can find the projects I'm working on. In the future, a blog will be embedded that will serve both to monitor my progress and to help other programmer bees.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

//<button onClick={() => console.log('connect')}>Let???s Connect <ArrowRightCircle size={25} /></button>