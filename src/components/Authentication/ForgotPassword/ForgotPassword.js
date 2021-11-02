import React from 'react';
import { Link } from 'react-router-dom';
import validators from '../../../validators';
import {Container,Row,Col} from 'reactstrap'; 
import './ForgotPassword.css';
class ForgotPassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        email: '',
        error: null,
      };
      this.validators = validators;
      this.onchange=this.onchange.bind(this); 
      this.displayValidationErrors = this.displayValidationErrors.bind(this);
      this.updateValidators = this.updateValidators.bind(this);
  }
  onchange(event){
      this.setState({
        [event.target.name]:event.target.value
      });
      this.updateValidators([event.target.name], event.target.value);
  }
  updateValidators(fieldName, value) {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = value;
      this.validators[fieldName].valid = true;
      this.validators[fieldName].rules.forEach((rule) => {
        if (rule.test instanceof RegExp) {
          if (!rule.test.test(value)) {
            this.validators[fieldName].errors.push(rule.message);
            this.validators[fieldName].valid = false;
          }
        } else if (typeof rule.test === 'function') {
          if (!rule.test(value)) {
            this.validators[fieldName].errors.push(rule.message);
            this.validators[fieldName].valid = false;
          }
        }
      });
  }
  isFormValid() {
    let status = true;
    Object.keys(this.validators).forEach((field) => {
      if(field=='email'){
        if (!this.validators[field].valid) {
          status = false;
        }
      }
    });
    return status;
  }
  displayValidationErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return <span className="error" key={index}>* {info}<br/></span>
      });
      return (
        <div className="col s12 row">
          {errors}
        </div>  
      );
    }
    return result;
  }
    render(){
        return(
            <section className="height-100vh d-flex align-items-center page-section-ptb forgot" style={{backgroundImage: 'url(assets/images/login-bg.jpg)'}}>
                 <Container>
                <Row className="justify-content-center no-gutters vertical-align">
                  <Col lg={4} md={6}  className="login-fancy-bg bg" style={{backgroundImage: 'url(assets/images/login-inner-bg.jpg)'}}>
                    <div className="forgot-fancy">
                      <h2 className="text-white mb-20">Hello world!</h2>
                      <p className="mb-20 text-white">Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                      <ul className="list-unstyled  pos-bot pb-30">
                        <li className="list-inline-item"><a className="text-white" href="#"> Terms of Use</a> </li>
                        <li className="list-inline-item"><a className="text-white" href="#"> Privacy Policy</a></li>
                      </ul>
                    </div> 
                  </Col>
                  <Col lg={4} md={6} className="bg-white">
                    <div className="forgot-fancy pb-40 clearfix">
                      <h3 className="mb-30">Forgot Your Password?</h3>
                      <p className="pb-30">Please enter the email address for get email link.</p>
                      <div className="section-field mb-20">
                        <label className="mb-10" htmlFor="name">Email Address</label>
                        <input id="email" className="web form-control" type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.onchange}  />
                        { this.displayValidationErrors('email') }
                      </div>
                      <a   className={`button   ${this.isFormValid() ? '' : 'disabled'}`}>
                        <span className="text-white">Forgot Password</span> 
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
export default ForgotPassword;