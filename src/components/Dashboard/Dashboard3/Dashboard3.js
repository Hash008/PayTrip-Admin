import React from 'react';
import { Card,CardBody,CardTitle, Row, Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Dashboard3.css';
import ScrollArea from 'react-scrollbar';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import CountUp from 'react-countup';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { Doughnut } from 'react-chartjs-2';
const data = {
  labels: [
      'Red',
      'Blue',
      'Yellow',
      'Green',
      'Orange'
  ],

  datasets: [{
      data: [400, 50, 100, 80, 150],
      backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#00cc99',
          '#ffa31a'
      ],
      hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#00cc99',
          '#ffa31a'
      ]
  }]
};
class Dashboard3 extends React.Component {
  
    constructor(props) {
        super(props);
        this.dropdownbarOpen = this.dropdownbarOpen.bind(this);
        this.dropdownlineOpen = this.dropdownlineOpen.bind(this);
        this.state = {
          dropdownbarOpen: false,
          dropdownlineOpen: false,
          activeTab: '1',
          widths:150
      };
       
    }
    dropdownbarOpen() {
      this.setState(prevState => ({
          dropdownbarOpen: !prevState.dropdownbarOpen

      }));
    }
    dropdownlineOpen() {
      this.setState(prevState => ({
          dropdownlineOpen: !prevState.dropdownlineOpen
      }));
  }
    render() {
        return (
            <div className="header-info">
              <div className="page-title">
                <Row>
                  <Col md={6}>
                    <h3 className="mb-15 text-white"> Welcome back, Michael! </h3>
                    <span className="mb-10 mb-md-30 text-white d-block">View a summary of your account navigate to the most important account activities.</span>
                  </Col>
                </Row>
              </div>
              <Row className="account-overview mb-30">
                <div className="col-12">
                  <Card className="card-statistics h-100">
                    <CardBody className="bg-white">
                      <h5 className="card-title">Account overview</h5>
                      <Row>
                        <Col xl={3} sm={6} className="mb-4 mb-xl-0">
                          <Row className="no-gutters">
                            <Col lg={8} md={7} sm={7} className="col-7 align-self-center">
                              <span>Percentage Up</span>
                              <h4 className="text-danger fw-6 mt-10">655 Share</h4>
                            </Col>
                            <Col lg={4} md={5} sm={5} className="col-5 align-self-center text-right border-danger">
                            <AnimatedProgressProvider
                                  valueStart={0}
                                  valueEnd={87}
                                  duration={1.8}
                                  easingFunction={easeQuadInOut}
                                >
                                  {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                      <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}`}
                                        styles={buildStyles({ pathTransition: 'none' })}
                                      />
                                    );
                                  }}
                                </AnimatedProgressProvider >
                            </Col>
                          </Row>
                        </Col> 
                        <Col xl={3} sm={6} className="mb-4 mb-xl-0">
                          <Row className="no-gutters">
                            <Col lg={8} md={7} sm={7} className="col-7 align-self-center">
                              <span>Percentage Down</span>
                              <h4 className="text-success fw-6 mt-10">460 Share</h4>
                            </Col>
                            <Col lg={4} md={5} sm={5} className="col-5 align-self-center border-success text-right">
                             <AnimatedProgressProvider
                                  valueStart={0}
                                  valueEnd={77}
                                  duration={1.8}
                                  easingFunction={easeQuadInOut}
                                >
                                  {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                      <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}`}
                                        styles={buildStyles({ pathTransition: 'none' })}
                                      />
                                    );
                                  }}
                                </AnimatedProgressProvider >
                            </Col>
                          </Row>
                        </Col>
                        <Col xl={3} sm={6} className="mb-4 mb-xl-0">
                          <Row className="no-gutters">
                            <Col lg={8} md={7} sm={7} className="col-7 align-self-center">
                              <span>Increase Amount</span>
                              <h4 className="text-info fw-6 mt-10">$560 total</h4>
                            </Col>
                            <Col lg={4} md={5} sm={5} className="col-5 align-self-center border-info text-right">
                              <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={56}
                                duration={1.8}
                                easingFunction={easeQuadInOut}
                              >
                                {value => {
                                  const roundedValue = Math.round(value);
                                  return (
                                    <CircularProgressbar
                                      value={value}
                                      text={`${roundedValue}`}
                                      styles={buildStyles({ pathTransition: 'none' })}
                                    />
                                  );
                                }}
                              </AnimatedProgressProvider >
                            </Col>
                          </Row>
                        </Col>
                        <Col xl={3} sm={6} className="mb-4 mb-xl-0">
                          <Row className="no-gutters">
                            <Col lg={8} md={7} sm={7}  className="col-7 align-self-center">
                              <span>New user each day</span>
                              <h4 className="text-warning fw-6 mt-10">5,546</h4>
                            </Col>
                            <Col lg={4} md={5} sm={5} className="col-5 align-self-center border-warning text-right">
                              <AnimatedProgressProvider
                                  valueStart={0}
                                  valueEnd={80}
                                  duration={1.8}
                                  easingFunction={easeQuadInOut}
                                >
                                  {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                      <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}`}
                                        styles={buildStyles({ pathTransition: 'none' })}
                                      />
                                    );
                                  }}
                                </AnimatedProgressProvider >
                                
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              </Row>
              <Row>
                <Col xl={6} className="mb-30">
                  <Card className="card-statistics h-100">
                    <CardBody>
                      <h5 className="card-title">Best Selling Items</h5>
                      <ul className="list-unstyled">
                        <li className="mb-20">
                          <div className="media">
                            <div className="position-relative">
                              <img className="img-fluid mr-15 avatar-small" src="assets/images/item/01.png" alt="" />
                            </div> 
                            <div className="media-body">
                              <h6 className="mt-0 mb-0">Car dealer <span className="float-right text-danger"> 8,561</span></h6>
                              <p>Automotive WordPress Theme </p>
                            </div>
                          </div>
                          <div className="divider dotted mt-20" />
                        </li>
                        <li className="mb-20">
                          <div className="media">
                            <div className="position-relative clearfix">
                              <img className="img-fluid mr-15 avatar-small" src="assets/images/item/02.png" alt="" />
                            </div> 
                            <div className="media-body">
                              <h6 className="mt-0 mb-0">Webster  <span className="float-right text-success"> 6,213</span></h6>
                              <p>Multi-purpose HTML5 Template </p>
                            </div>
                          </div>
                          <div className="divider dotted mt-20" />
                        </li>
                        <li className="mb-20">
                          <div className="media">
                            <div className="position-relative clearfix">
                              <img className="img-fluid mr-15 avatar-small" src="assets/images/item/04.png" alt="" />
                            </div> 
                            <div className="media-body">
                              <h6 className="mt-0 mb-0">Sam Martin  <span className="float-right text-warning"> 6,213</span></h6>
                              <p>Personal vCard Resume WordPress Theme </p>
                            </div>
                          </div>
                          <div className="divider dotted mt-20" />
                        </li>
                        <li>
                          <div className="media">
                            <div className="position-relative">
                              <img className="img-fluid mr-15 avatar-small" src="assets/images/item/03.png" alt="" />
                            </div> 
                            <div className="media-body">
                              <h6 className="mt-0 mb-0">The corps  <span className="float-right text-info"> 2,926</span></h6>
                              <p> Multi-Purpose WordPress Theme </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={6} className="mb-30">
                  <Card className="h-100">
                      <CardBody>
                          <CardTitle>Customer Feedback</CardTitle>
                          <Row className="mb-30">
                              <Col md={6}>
                                  <div className="clearfix">
                                      <p className="mb-10 float-left">Positive</p>
                                      <i className="mb-10 text-success float-right fa fa-arrow-up"> </i>
                                  </div>
                                  <div className="progress progress-small">
                                      <div className="skill2-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <h4 className="mt-10 text-success">8501</h4>
                              </Col>
                              <Col md={6}>
                                  <div className="clearfix">
                                      <p className="mb-10 float-left">Negative</p>
                                      <i className="mb-10 text-danger float-right fa fa-arrow-down"> </i>
                                  </div>
                                  <div className="progress progress-small">
                                      <div className="skill2-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                  <h4 className="mt-10 text-danger">3251</h4>
                              </Col>
                          </Row>
                          <div className="chart-wrapper"  style={{height: 270}}>
                              <Doughnut data={data} options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}}}  width={this.state.widths} />
                          </div>
                      </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xl={4} className="mb-30">
                  <Card className="data-usage h-100">
                    <CardBody>
                      <h5 className="card-title">Monthly Usage</h5>
                      <div className="row d-flex align-items-center">
                        <Col sm={6} className="mb-10"> 
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={71}
                                duration={1.8}
                                easingFunction={easeQuadInOut}
                              >
                                {value => {
                                  const roundedValue = Math.round(value);
                                  return (
                                    <CircularProgressbar
                                      value={value}
                                      text={`${roundedValue}`}
                                      styles={buildStyles({ pathTransition: 'none' })}
                                    />
                                  );
                                }}
                              </AnimatedProgressProvider >
                        </Col>
                        <Col sm={6}>
                          <h2 className="theme-color font-weight-bold">70.45 GB</h2>
                          <small>Current Plan</small>
                          <h5 className="mt-2 text-dark">263 GB Per Month</h5>
                        </Col>
                      </div>
                      <p><strong>Note:</strong> You can upgrade your existing Premium Plan to a plan with more features, or a longer subscription period.</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} className="mb-30">
                  <Card className="card-statistics h-100">
                    <CardBody>
                      <h5 className="card-title">Members Activity</h5>
                      <Row>
                        <Col sm={6} className="col-6 mb-30">
                          <div className="counter">
                            <span className="timer text-success">
                              <CountUp start={1} end={4905} duration={5} />
                            </span>
                            <label className="text-capitalize mt-0">New submissions </label>
                          </div>
                        </Col>
                        <Col sm={6} className="col-6 mb-30">
                          <div className="counter">
                            <span className="timer text-info">
                              <CountUp start={1} end={6524} duration={5} />
                            </span>
                            <label className="text-capitalize mt-0">New contacts</label>
                          </div>
                        </Col>
                      </Row>
                      <div className="divider" />
                      <Row>
                        <Col sm={4} className="col-6 mt-30">
                          <b>Daily visitors</b>
                          <p>465</p>
                        </Col>
                        <Col sm={4} className="col-6 mt-30">
                          <b>Active</b>
                          <p>9524</p>
                        </Col>
                        <Col sm={4} className="col-6 mt-30">
                          <b>Inactive</b>
                          <p>1283</p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} className="mb-30">
                  <Card className="card-statistics h-100 avatar-status">
                    <div className="p-4 text-center bg" style={{background: 'url(assets/images/bg/01.jpg)'}}>
                      <h5 className="mb-60 text-white position-relative">Michael Bean </h5>
                      <div className="btn-group info-drop">
                        <Dropdown isOpen={this.state.dropdownbarOpen} toggle={this.dropdownbarOpen}>
                            <DropdownToggle className="dropdown-toggle-split text-white" id="dropdown-no-caret">
                                <i className="ti-more" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><i className="text-primary ti-files" />Add task</DropdownItem>
                                <DropdownItem><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                                <DropdownItem><i className="text-success ti-user" />View Profile</DropdownItem>
                                <DropdownItem><i className="text-secondary ti-info" />Contact Info</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="avatar">
                        <img className="img-fluid rounded-circle " src="assets/images/team/13.jpg" alt="" />
                      </div>
                    <div className="card-body text-center">
                      
                      <Row>
                        <Col sm={4} className="col-6 mt-30">
                          <b>Files Saved</b>
                          <h4 className="text-success mt-10">1582</h4>
                        </Col>
                        <Col sm={4} className="col-6 mt-30">
                          <b>Memory Used </b>
                          <h4 className="text-danger mt-10">58GB</h4>
                        </Col>
                        <Col sm={4} className="col-12 mt-30">
                          <b>Spent Money</b>
                          <h4 className="text-warning mt-10">352,6$</h4>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xl={8} className="mb-30">
                  <Card className="card-statistics h-100">
                    <CardBody>
                      <h5 className="mb-15 pb-0 border-0 card-title">Last Billings </h5>
                      {/* action group */}
                      <div className="btn-group info-drop">
                        <Dropdown isOpen={this.state.dropdownlineOpen} toggle={this.dropdownlineOpen}>
                            <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                <i className="ti-more" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><i className="text-success ti-files" />Approved</DropdownItem>
                                <DropdownItem><i className="text-warning ti-pencil-alt" />Pending</DropdownItem>
                                <DropdownItem><i className="text-danger ti-user" />Rejected</DropdownItem>
                                <DropdownItem><i className="text-secondary ti-reload" />Refresh</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                      </div>
                      <div className="table-responsive">
                        <table className="table center-aligned-table mb-10">
                          <thead>
                            <tr className="text-dark">
                              <th>Order No</th>
                              <th>Product Name</th>
                              <th>Purchased On</th>
                              <th>Shipping Status</th>
                              <th>Payment Method</th>
                              <th>Payment Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><i className="fa fa-circle text-success" /></td>
                              <td>Iphone 7</td>
                              <td>12 May 2017</td>
                              <td>Dispatched</td>
                              <td>Credit card</td>
                              <td><label className="badge badge-warning">Pending</label></td>
                            </tr>
                            <tr>
                              <td><i className="fa fa-circle text-info" /></td>
                              <td>Galaxy S8</td>
                              <td>15 May 2017</td>
                              <td>Dispatched</td>
                              <td>Internet banking</td>
                              <td><label className="badge badge-warning">Pending</label></td>
                            </tr>
                            <tr>
                              <td><i className="fa fa-circle text-warning" /></td>
                              <td>Amazon Echo</td>
                              <td>17 May 2017</td>
                              <td>Dispatched</td>
                              <td>Credit card</td>
                              <td><label className="badge badge-success">Approved</label></td>
                            </tr>
                            <tr>
                              <td><i className="fa fa-circle text-danger" /></td>
                              <td>Google Pixel</td>
                              <td>17 May 2017</td>
                              <td>Dispatched</td>
                              <td>Cash on delivery</td>
                              <td><label className="badge badge-danger">Rejected</label></td>
                            </tr>
                            <tr>
                              <td><i className="fa fa-circle text-dark" /></td>
                              <td>Mac Mini</td>
                              <td>19 May 2017</td>
                              <td>Dispatched</td>
                              <td>Debit card</td>
                              <td><label className="badge badge-success">Approved</label></td>
                            </tr>
                            <tr>
                              <td><i className="fa fa-circle text-info" /></td>
                              <td>Galaxy S9</td>
                              <td>26 May 2017</td>
                              <td>Dispatched</td>
                              <td>Internet banking</td>
                              <td><label className="badge badge-warning">Pending</label></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} className="mb-30">
                  <Card className="card-statistics h-100 admin-followers">
                    <CardBody>
                      <h5 className="card-title">Followers </h5>
                        <ScrollArea speed={0.8} style={{ overflow: 'hidden', outline: 'none' }}
                                                className="scrollbar max-h-350"
                                                horizontal={false} 
                        >
                        <ul className="list-unstyled">
                          <li className="mb-30">
                            <div className="media">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="" />
                                <i className="avatar-online bg-success" />
                              </div> 
                              <div className="media-body">
                                <div>
                                  <a className="button mr-10 button-border gray small border float-right" href="#">Follow</a>
                                </div> 
                                <h6 className="mt-0 text-info">Martin smith </h6>
                                <p>@potenzauser</p>
                              </div>
                            </div>
                            <div className="divider mt-30" />
                          </li>
                          <li className="mb-30">
                            <div className="media">
                              <div className="position-relative clearfix">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/02.jpg" alt="" />
                                <i className="avatar-online bg-success" />
                              </div> 
                              <div className="media-body">
                                <div>
                                  <a className="button mr-10 button-border gray small border float-right" href="#">Follow</a>
                                </div> 
                                <h6 className="mt-0 text-warning">Paul Flavius </h6>
                                <p>@potenzauser</p>
                              </div>
                            </div>
                            <div className="divider mt-30" />
                          </li>
                          <li className="mb-30">
                            <div className="media">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="" />
                                <i className="avatar-online bg-danger" />
                              </div> 
                              <div className="media-body">
                                <div>
                                  <a className="button mr-10 gray small border float-right" href="#">Following <i className="fa fa-check" /></a>
                                </div> 
                                <h6 className="mt-0 text-danger">Anne Smith</h6>
                                <p>@potenzauser</p>
                              </div>
                            </div>
                            <div className="divider mt-30" />
                          </li>
                          <li className="mb-30">
                            <div className="media">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/04.jpg" alt="" />
                                <i className="avatar-online bg-success" />
                              </div> 
                              <div className="media-body">
                                <div>
                                  <a className="button mr-10 button-border gray small border float-right" href="#">Follow</a>
                                </div> 
                                <h6 className="mt-0 text-info">Sara Lisbon </h6>
                                <p>@potenzauser</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        </ScrollArea>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
        );
    }
}
export default Dashboard3;