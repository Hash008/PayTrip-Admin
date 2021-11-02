import React from 'react';
import { Link } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap'; 
import './ResetPassword.css';
class ResetPassword extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
        return(
            <section className="height-100vh d-flex align-items-center page-section-ptb reset-pw" style={{backgroundImage: 'url(assets/images/login-bg.jpg)'}}>
                 <Container>
                <Row className="justify-content-center no-gutters vertical-align">
                  <Col lg={4} md={6}  className="login-fancy-bg bg" style={{backgroundImage: 'url(assets/images/login-inner-bg.jpg)'}}>
                    <div className="reset-fancy">
                      <h2 className="text-white mb-20">Hello world!</h2>
                      <p className="mb-20 text-white">Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                      <ul className="list-unstyled  pos-bot pb-30">
                        <li className="list-inline-item"><a className="text-white" href="#"> Terms of Use</a> </li>
                        <li className="list-inline-item"><a className="text-white" href="#"> Privacy Policy</a></li>
                      </ul>
                    </div> 
                  </Col>
                  <Col lg={4} md={6} className="bg-white">
                    <div className="reset-fancy pb-40 clearfix">
                      <h3 className="mb-30">Reset Password</h3>
                      <p className="pb-20">Enter a new password for your account.</p>
                      <div className="section-field mb-20">
                        <label className="mb-10" htmlFor="Password">New Password * </label>
                        <input id="password" className="Password form-control" type="password" placeholder="Password" name="newpassword" />
                        
                      </div>
                      <div className="section-field mb-20">
                        <label className="mb-10" htmlFor="Password">Confirm Password * </label>
                        <input id="password" className="Password form-control" type="password" placeholder="Confirm Password" name="confirmpassword"/>
                        
                      </div>
                      <a className="button">
                        <span className="text-white">Change Password</span> 
                      </a>
                      <p className="mt-20 mb-0 remember-checkbox"><Link to="/login" > Go back to login page</Link></p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
        );
    }
}
export default ResetPassword;