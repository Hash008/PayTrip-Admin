import React from 'react';
import { Row, Col, InputGroupAddon, Card, CardBody, CardTitle, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Button, InputGroupText, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Courses.css';
class Courses extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
   return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0"> Academy Courses</h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                <BreadcrumbItem><Link to="#">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Academy Courses</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        {/* main body */}
        <Row>
          <Col md={12}>
            <Row>
              <Col lg={4} md={6}>
                <div className="search-wrapper">
                  <div className="form-group">
                    <input type="text" className="form-control" id="search" placeholder="Search..."/>
                    <label for="search"><i className="fa fa-search"></i></label>
                  </div> 
                </div>              
              </Col>
              <Col lg={4} className="d-none d-lg-block"></Col>
              <Col lg={4} md={6}>
                <div className="category-wrapper">
                  <div className="form-group">
                    <select class="form-control" id="select-category">
                      <option>All</option>
                      <option>Developer</option>
                      <option>Apache</option>
                      <option>Software</option>
                      <option>C++</option>
                      <option>Apps</option>
                      <option>Seo</option>
                      <option>JavaScript</option>
                    </select>
                  </div> 
                </div>              
              </Col>
            </Row>
          </Col>
          <Col md={12}>
            <div className="courses">
              <Row>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/01.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><Link to="#">Developer</Link></p>
                          <h3 className="price theme-color">$120</h3>
                        </div>
                        <h5>Magento Programmer</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>70 Days </li>
                          <li><i className="fa fa-user-o"></i>175</li>
                        </ul>
                        <Link to="/academy-details" target="_blank" className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/02.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><Link to="#">Apache</Link></p>
                          <h3 className="price theme-color">$80</h3>
                        </div>
                        <h5>Apache Basics</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>15 Days </li>
                          <li><i className="fa fa-user-o"></i>235</li>
                        </ul>
                        <Link to="/academy-details" target="_blank"  className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/03.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><Link to="#">Software</Link></p>
                          <h3 className="price theme-color">$115</h3>
                        </div>
                        <h5>Console Development</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>28 Days </li>
                          <li><i className="fa fa-user-o"></i>120</li>
                        </ul>
                        <Link to="/academy-details" target="_blank"  className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/04.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><Link to="#">C++</Link></p>
                          <h3 className="price theme-color">$110</h3>
                        </div>
                        <h5>Engine Creating for Xbox</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>20 Days </li>
                          <li><i className="fa fa-user-o"></i>134</li>
                        </ul>
                        <Link to="/academy-details" target="_blank"  className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/05.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><Link to="#">Apps</Link></p>
                          <h3 className="price theme-color">$70</h3>
                        </div>
                        <h5>Developing Mobile Apps</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>35 Days </li>
                          <li><i className="fa fa-user-o"></i>98</li>
                        </ul>
                        <Link to="/academy-details" target="_blank"  className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/06.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><Link to="#">Developer</Link></p>
                          <h3 className="price theme-color">$85</h3>
                        </div>
                        <h5>Magento Programmer</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>40 Days </li>
                          <li><i className="fa fa-user-o"></i>145</li>
                        </ul>
                        <Link to="/academy-details" target="_blank"  className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/07.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><a href="#">Seo</a></p>
                          <h3 className="price theme-color">$30</h3>
                        </div>
                        <h5>Marketing Management</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>60 Days </li>
                          <li><i className="fa fa-user-o"></i>75</li>
                        </ul>
                        <Link to="/academy-details" target="_blank"  className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} sm={6}>
                  <Card className="card-statistics mb-30">
                    <div className="courses-img">
                      <img src="assets/images/academy/01.jpg" className="img-fluid" alt="academy-img" / >
                    </div>
                    <CardBody>
                      <div className="courses-content">
                        <div className="d-flex justify-content-between">
                          <p className="category"><Link to="#">JavaScript</Link></p>
                          <h3 className="price theme-color">$135</h3>
                        </div>
                        <h5>Writing Modular JavaScript</h5>
                        <p>You can optionally provide additional information about a lesson, including the  and the complexity.</p>
                        <div className="d-flex d-sm-block d-md-flex justify-content-between">
                        <ul className="meta">
                          <li><i className="fa fa-clock-o"></i>55 Days </li>
                          <li><i className="fa fa-user-o"></i>45</li>
                        </ul>
                        <Link to="/academy-details" target="_blank"  className="button icon-color">Course Info<i className="fa fa-long-arrow-right"></i></Link>
                        </div>
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
export default Courses;