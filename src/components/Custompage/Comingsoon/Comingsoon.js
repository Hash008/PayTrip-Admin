import React from 'react';
import './Comingsoon.css';
import CommingSoonCounter from '../Comingsoon/ComingSoonCounter';
import {Container,Row, Col,Button} from 'reactstrap';
class Comingsoon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="height-100vh d-flex align-items-center comingsoon bg" style={{backgroundImage: 'url(assets/images/comingsoon.jpg)'}}>
                <Container className="comingsoon-wrapper ">
                    <Row className="align-items-center justify-content-center">
                      <Col lg={6} className="text-center">
                        <div className="logo-wraaper">
                            <img src="assets/images/logo-white.png" className="img-fluid" alt="logo" />
                        </div>
                        <div className="comingsoon-text">
                          <h2 className="title">We are Coming soon</h2>
                          <span className="text-white">We are currently working on a website and won't take long. Don't forget to check out our Social updates.</span>
                        </div>
                      </Col>
                      <div className="col-12 text-center">
                        <CommingSoonCounter time={'111150'}></CommingSoonCounter>
                      </div>
                      <div className="col-12 text-center m-b-20">
                          <Row className="justify-content-center">
                            <Col md={8} xl={6}>
                                <span className="comingsoon-newsletter-text">Provide your email address &amp; we will notify you when site is ready:</span>
                                <div className="comingsoon-newsletter">
                                    <input type="email" className="form-control" placeholder="Email address" />
                                    <div className="form-btn">
                                        <Button id="subscribe" className="button btn btn-secondary btn-sm"> Get notified </Button>
                                    </div>
                                </div>
                            </Col>
                          </Row>
                      </div>
                    </Row>
                </Container>
            </section>
        );
    }
}
export default Comingsoon;