import React from 'react';
import { Link } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap'; 
import './MailConfirmation.css';
class MailConfirmation extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
        return(
            <section className="height-100vh d-flex align-items-center page-section-ptb mail-confirm" style={{backgroundImage: 'url(assets/images/login-bg.jpg)'}}>
              <Container>
                <Row className="justify-content-center no-gutters vertical-align">
                  <Col lg={4} md={6} className="bg-white text-center">
                    <div className="mail-fancy pb-40 clearfix">
                      <div className="email-icon"><i className="fa fa-envelope-open-o"></i></div>
                      <h3 className="mb-30">Email Confirmation!</h3>
                      <p className="pb-20">We have sent email to<b> example@mymail.com.</b> to confirm the validity of our email address. After receiving the email follow the link provided to complete your registration.</p>
                      <p className="mt-20 mb-0 remember-checkbox">If you not got any mail <Link to="#" > Resend mail</Link></p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
        );
    }
}
export default MailConfirmation;