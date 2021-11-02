import React from 'react';
import { Link } from 'react-router-dom';
import validators from '../../../validators';
import {Container,Row,Col} from 'reactstrap'; 
import './LockScreen.css';
class LockScreen extends React.Component{
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
            <section className="height-100vh d-flex align-items-center page-section-ptb locked" style={{backgroundImage: 'url(assets/images/login-bg.jpg)'}}>
                 <Container>
                <Row className="justify-content-center no-gutters vertical-align">
                  <Col lg={4} md={6} className="bg-white text-center">
                    <div className="locked-fancy pb-40 clearfix">
                        <div className="lock-screen-img"><img src="assets/images/profile-avatar.jpg" className="img-fluid" /></div>
                      <h3 className="mb-20">Michael Bean</h3>
                      <p className="pb-10"><i className="fa fa-lock mr-2"></i>Locked</p>
                      <p className="pb-20">Enter Your Password</p>
                      <div className="section-field mb-20">
                        <input id="password" className="Password form-control" type="password" placeholder="Enter Password" value={this.state.password} name="password" onChange={this.onchange}  />
                        { this.displayValidationErrors('password') }
                      </div> 
                      <p className="mt-20 mb-0 remember-checkbox">Or sign in as a<Link to="/login" > Different user </Link></p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
        );
    }
}
export default LockScreen;