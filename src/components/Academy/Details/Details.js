import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink, CardBody, Card, CardTitle } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './Details.css';
class Details extends React.Component {

    constructor(props) {
        super(props);
        this.tabhorizontal = this.tabhorizontal.bind(this);
        this.state = {
            tabhorizontal: '1',
        };
    }
    tabhorizontal(tab) {
        if (this.state.tabhorizontal !== tab) {
            this.setState({
                tabhorizontal: tab
            });
        }
    }
  render(){
   return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0">Academy Details</h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                <BreadcrumbItem><a href="javascript:void(0);">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Academy Details</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        {/* main body */}
        <Row>
          <Col md={12}>
            <div className="courses-details">
              <div className="card-statistics card mb-30">
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <div className="courses-img mb-30">
                        <img src="assets/images/academy/01.jpg" className="img-fluid" alt="academy-img" / >
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><a href="#">Developer</a></p>
                          <h3 className="price theme-color">$120</h3>
                        </div>
                        <h5 className="card-title">Magento Programmer</h5>
                        <p className="mb-10">The PowerPoint Dummy course makes presentations and PowerPoint easy for you. The course will show you step-by-step what you need to know to use PowerPoint effectively and effciently. The PowerPoint Dummy Course does what it says, it introduces you into the program and make skills learning as easy as possible. We want to show you PowerPoint in a way that even a dummy would understand!</p>
                        <p className="mb-10">Why do you need this course? In your office and job, there is no way around IT skills and PowerPoint. There are actually more than 500 million PowerPoint users worldwide and presentations get created all the time: At school, university, college, research, science, business, finance, film, etc. You do need these skills to not waste your potential and to communicate yourself and your message clearly. Learning PowerPoint is like learning to walk. There is no way around it and everyone needs to have these skills. </p>
                        <h5>Who this course is for:</h5>
                        <p className="mb-10">This course is for anyone who is quite new to work with Microsoft PowerPoint. This course helps anyone who wants to learn how to become good with the program and who needs an easy start into learning the skills. We start at the very beginning and make sure you get a step-by-step introduction and training in PowerPoint. This course takes beginners as well as advanced users on the hand and wants to make PowerPoint learning as easy as possible for you.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>70 Days </li>
                          <li><i className="fa fa-user-o"></i>175</li>
                        </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </div>
              <Row>
                <Col xl={4} md={5} className="mb-30">
                  <div className="card-statistics card">
                    <CardBody>
                      <div className="teacher">
                        <div className="teacher-img">
                          <img src="assets/images/team/01.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="teacher-content">
                          <h3 className="title">Michaelbrt</h3>
                          <p className="details">The PowerPoint Dummy course makes presentations and PowerPoint easy for you.</p>
                          <p className="mb-10"><i className="fa fa-envelope-o mr-2"></i> michaelbrtinfo@gmail.com</p>
                          <p className="mb-10"><i className="fa fa-phone mr-2"></i> +91 2123546820</p>
                          <ul className="teacher-social">
                            <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-whatsapp"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-youtube-play"></i></Link></li>
                          </ul>
                        </div>
                      </div>
                    </CardBody>
                  </div>
                </Col>
                <Col xl={8} md={7} className="mb-30">
                  <Card className="card-statistics h-100">
                    <CardBody>
                        <CardTitle>Course Section</CardTitle>
                        <div className="tab">
                            <Nav tabs>
                                <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '1' })} onClick={() => { this.tabhorizontal('1'); }}>Section 1</NavLink></NavItem>
                                <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '2' })} onClick={() => { this.tabhorizontal('2'); }}>Section 2</NavLink></NavItem>
                                <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '3' })} onClick={() => { this.tabhorizontal('3'); }}>Section 3</NavLink></NavItem>
                                <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '4' })} onClick={() => { this.tabhorizontal('4'); }}>Section 4</NavLink></NavItem>
                                <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '5' })} onClick={() => { this.tabhorizontal('5'); }}>Section 5</NavLink></NavItem>
                                <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '6' })} onClick={() => { this.tabhorizontal('6'); }}>Section 6</NavLink></NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.tabhorizontal} >
                                <TabPane tabId="1">
                                    <div className="tab-item">
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 1</p><p className="l-content">Magento Installation with sample data on localhost with XAMPP</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 2</p><p className="l-content">Magento Architecture</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 3</p><p className="l-content"> Folder Structure in Magento</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 4</p><p className="l-content"> Database System and database in Magento</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 5</p><p className="l-content"> Configuration and naming in Magento</p>
                                      </div>
                                    </div>
                                </TabPane>

                                <TabPane tabId="2">
                                    <div className="tab-item">
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 1</p><p className="l-content">Create a Magento module</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 2</p><p className="l-content">Create an Installer Script & Upgrade Magento Modules</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 3</p><p className="l-content">Create a menu in backend</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 4</p><p className="l-content">Create a Controller in backend</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 5</p><p className="l-content">Create a Magento grid page in backend</p>
                                      </div>
                                    </div>
                                </TabPane>

                                <TabPane tabId="3">
                                    <div className="tab-item">
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 1</p><p className="l-content">Create a Magento grid page in backend</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 2</p><p className="l-content">Advanced Magento Grid</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 3</p><p className="l-content">Magento Form in backend</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 4</p><p className="l-content">Advanced Magento Form in Magento</p>
                                      </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="4" >
                                    <div className="tab-item">
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 1</p><p className="l-content">Magento Configuration</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 2</p><p className="l-content">Magento Layouts and Templates on frontend</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 3</p><p className="l-content">Grid on Magento Frontend</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 4</p><p className="l-content">Magento Form on frontend</p>
                                      </div>
                                    </div>
                                </TabPane>

                                <TabPane tabId="5">
                                  <div className="tab-item">
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 1</p><p className="l-content">Magento CSS and Javascript files on frontend</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 2</p><p className="l-content">Magento Email Templates</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 3</p><p className="l-content">Magento Events</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 4</p><p className="l-content">Overriding core files in Magento</p>
                                      </div>
                                    </div>
                                </TabPane>

                                <TabPane tabId="6" >
                                    <div className="tab-item">
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 1</p><p className="l-content">Entity Attribute Value in Magento</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 2</p><p className="l-content">Magento Product Types</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 3</p><p className="l-content">Magento Custom Attributes</p>
                                      </div>
                                      <div className="lecture">
                                        <p className="l-title">Lecture : 4</p><p className="l-content">Magento Custom Entity/Address</p>
                                      </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

    )
  }
}
export default Details;