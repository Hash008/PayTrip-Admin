import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Card,CardBody,Row, Col ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Breadcrumb ,BreadcrumbItem } from 'reactstrap';
import './Dashboard2.css';
import ScrollArea from 'react-scrollbar';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const mapStyles = {
    width: '100%',
    height: '100%'
  };
var radarData = {
    labels: ['Facebook', 'Twitter', 'LinkedIn', 'Google+', 'Pinterest', 'Youtube', 'Instagram'],
    datasets: [{
        label: 'Apple',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
    }, {
        label: 'Google',
        backgroundColor: 'rgba(0,204,153,0.2)',
        borderColor: 'rgba(0,204,153,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
    }]
};


class Dashboard2 extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownpost = this.dropdownpost.bind(this);
        this.dropdownchat = this.dropdownchat.bind(this);
        this.dropdownsocial = this.dropdownsocial.bind(this);
        this.state = {
            dropdownpost: false,
            dropdownchat: false,
            dropdownsocial:false
        };
    }
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };
    dropdownpost() {
        this.setState(prevState => ({
            dropdownpost: !prevState.dropdownpost
  
        }));
    }
    dropdownchat() {
        this.setState(prevState => ({
            dropdownchat: !prevState.dropdownchat
        }));
    }
    dropdownsocial() {
        this.setState(prevState => ({
            dropdownsocial: !prevState.dropdownsocial
        }));
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Dashboard 2</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Dashboard 2</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={3} lg={6} md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                <div className="float-left icon-box bg-danger rounded-circle">
                                    <span className="text-white">
                                    <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="float-right text-right">
                                    <p className="card-text text-dark">Visitors</p>
                                    <h4>65,650</h4>
                                </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                <div className="float-left icon-box bg-primary rounded-circle">
                                    <span className="text-white">
                                    <i className="fa fa-shopping-cart highlight-icon" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="float-right text-right">
                                    <p className="card-text text-dark">Orders</p>
                                    <h4>656</h4>
                                </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                <div className="float-left icon-box bg-warning rounded-circle">
                                    <span className="text-white">
                                    <i className="fa fa-dollar highlight-icon" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="float-right text-right">
                                    <p className="card-text text-dark">Revenue</p>
                                    <h4>$65656</h4>
                                </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} lg={6} md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <div className="clearfix">
                                <div className="float-left icon-box bg-info rounded-circle">
                                    <span className="text-white">
                                    <i className="fa fa-twitter highlight-icon" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="float-right text-right">
                                    <p className="card-text text-dark">Followers</p>
                                    <h4>62,500+</h4>
                                </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div className="col-12 mb-30">
                        <Card className="card-statistics">
                            <CardBody>
                                <Row>
                                    <Col xl={6}>
                                        <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                            <Radar data={radarData} options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}}} />
                                        </div>
                                    </Col>
                                    <Col xl={6} className="mt-3 mt-xl-0">
                                        <h5 className="card-title">Social Source</h5>
                                        <h4>$50,500 </h4>
                                        <div className="mt-20">
                                        <div className="clearfix">
                                            <p className="mb-10 float-left">Facebook</p>
                                            <p className="mb-10 text-info float-right">801</p>
                                        </div>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="mt-20">
                                        <div className="clearfix">
                                            <p className="mb-10 float-left">Twitter</p>
                                            <p className="mb-10 text-success float-right">572</p>
                                        </div>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-success" role="progressbar" style={{width: '57%'}} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="mt-20 mb-20">
                                        <div className="clearfix">
                                            <p className="mb-10 float-left">LinkedIn</p>
                                            <p className="mb-10 text-secondary float-right">766</p>
                                        </div>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-secondary" role="progressbar" style={{width: '76%'}} aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="mt-20">
                                        <div className="clearfix">
                                            <p className="mb-10 float-left">Google+</p>
                                            <p className="mb-10 text-warning float-right">288</p>
                                        </div>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-warning" role="progressbar" style={{width: '28%'}} aria-valuenow={28} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                        <div className="mt-20 mb-20">
                                        <div className="clearfix">
                                            <p className="mb-10 float-left">Pinterest</p>
                                            <p className="mb-10 text-danger float-right">710</p>
                                        </div>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody> 
                        </Card> 
                    </div> 
                </Row>      
                <Row>
                <Col xl={6} className="mb-30">
                    <div className="card-statistics h-100">
                        <CardBody className="p-0">
                            <Row>
                                <Col xl={12} className="mb-30">
                                    <Card className="card-statistics fb-bg h-100">
                                    <CardBody>
                                        <div className="clearfix">
                                            <div className="float-left icon-box-fixed">
                                                <span className="text-white">
                                                <i className="fa fa-facebook highlight-icon" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="float-right">
                                                <h4 className="text-white">11,543</h4>
                                                <p className="card-text text-white">Likes </p>
                                            </div>
                                        </div>
                                    </CardBody>
                                    </Card>
                                </Col>
                                <Col xl={12} className="mb-30">
                                    <Card className="card-statistics youtube-bg h-100">
                                        <CardBody>
                                            <div className="clearfix">
                                                <div className="float-left icon-box-fixed">
                                                    <span className="text-white">
                                                    <i className="fa fa-youtube highlight-icon" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="float-right">
                                                    <h4 className="text-white">1,20,543</h4>
                                                    <p className="card-text text-white">Subscribers</p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xl={12} className="mb-30">
                                    <Card className="card-statistics twitter-bg h-100">
                                        <CardBody>
                                            <div className="clearfix">
                                            <div className="float-left icon-box-fixed">
                                                <span className="text-white">
                                                <i className="fa fa-twitter highlight-icon" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="float-right">
                                                <h4 className="text-white">41,652</h4>
                                                <p className="card-text text-white">Followers </p>
                                            </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="card-statistics instagram-bg h-100">
                                        <CardBody>
                                            <div className="clearfix">
                                            <div className="float-left icon-box-fixed">
                                                <span className="text-white">
                                                <i className="fa fa-instagram highlight-icon" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="float-right">
                                                <h4 className="text-white">69,454</h4>
                                                <p className="card-text text-white">Followers </p>
                                            </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row> 
                        </CardBody>
                    </div>
                </Col>
                <Col xl={6} className="mb-30">
                    <Card className="card-statistics h-100 weather-box-bg bg parallax" style={{backgroundImage: 'url(assets/images/login-inner-bg.jpg)'}}>
                        <CardBody className=" position-relative pb-50">
                            <h5 className="mb-20 text-white">London, UK </h5>
                            <h2 className="text-white mt-10 weather-degree"> <i className="fa fa-sun-o text-warning" /> 12°/ <span>7°</span></h2>
                            <b className="text-white mt-40 d-block today-day" />
                            <p className="text-white today-date" />
                            <ul className="list-unstyled mt-10 pos-bot mb-30">
                                <li className="text-white list-inline-item pr-3 mt-10"> Wind: <span> 50 km/hr </span></li>
                                <li className="text-white list-inline-item pr-3 mt-10"> Humidity : <span> 25% </span></li>
                                <li className="text-white list-inline-item mt-10"> Feels like: <span> 34° </span></li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
                <Row>
                <Col xl={4} className="mb-30">
                    <Card className="card-statistics h-100">
                        <CardBody>
                            <h5 className="card-title">Top Locations</h5>
                            <div className="google-map">
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={{
                                lat: -37.817065,
                                lng: 144.955903
                                }}
                            />
                            </div>
                            <Row>
                                <Col sm={6} className="col-12  mt-20">
                                    <p className="mb-10">United states</p>
                                    <div className="progress progress-small">
                                    <div className="skill2-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <p className="mt-10 text-info">28</p>
                                </Col>
                                <Col sm={6} className="col-12 mt-20">
                                    <p className="mb-10">United kingdom</p>
                                        <div className="progress progress-small">
                                            <div className="skill2-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    <p className="mt-10 text-danger">35</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={8} className="mb-30">
                    <Card className="card-statistics h-100">
                        <CardBody>
                            <h5 className="mb-15 card-title pb-0 border-0">Members Profiles </h5>
                            <div className="table-responsive">
                                <table className="table center-aligned-table mb-0">
                                    <thead>
                                        <tr className="text-dark">
                                            <th>Member</th>
                                            <th>Name</th>
                                            <th>Earnings</th>
                                            <th>Sales</th>
                                            <th>Reviews </th>
                                            <th>Progress </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="" /> </td>
                                            <td>Iphone</td>
                                            <td className="text-info">$520</td>
                                            <td>250</td>
                                            <td>
                                            <ul className="list-unstyled">
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                            </ul>
                                            </td>
                                            <td>
                                            <div className="progress progress-small mt-2">
                                                <div className="skill2-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <img className="img-fluid avatar-small" src="assets/images/team/06.jpg" alt="" /> </td>
                                            <td>Galaxy S8</td>
                                            <td className="text-warning">$340</td>
                                            <td>100</td>
                                            <td>
                                            <ul className="list-unstyled">
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                            </ul>
                                            </td>
                                            <td>
                                            <div className="progress progress-small mt-2">
                                                <div className="skill2-bar bg-warning" role="progressbar" style={{width: '64%'}} aria-valuenow={64} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <img className="img-fluid avatar-small" src="assets/images/team/07.jpg" alt="" /> </td>
                                            <td>Amazon Echo</td>
                                            <td className="text-danger">$50</td>
                                            <td>50</td>
                                            <td>
                                            <ul className="list-unstyled">
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                            </ul>
                                            </td>
                                            <td>
                                            <div className="progress progress-small mt-2">
                                                <div className="skill2-bar bg-danger" role="progressbar" style={{width: '68%'}} aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <img className="img-fluid avatar-small" src="assets/images/team/08.jpg" alt="" /> </td>
                                            <td>Google Pixel</td>
                                            <td className="text-success">$230</td>
                                            <td>80</td>
                                            <td>
                                            <ul className="list-unstyled">
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                            </ul>
                                            </td>
                                            <td>
                                            <div className="progress progress-small mt-2">
                                                <div className="skill2-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <img className="img-fluid avatar-small" src="assets/images/team/09.jpg" alt="" /> </td>
                                            <td>Mac Mini</td>
                                            <td className="text-dark">$1020</td>
                                            <td>54</td>
                                            <td>
                                            <ul className="list-unstyled">
                                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                            </ul>
                                            </td>
                                            <td>
                                            <div className="progress progress-small mt-2">
                                                <div className="skill2-bar bg-dark" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
                <Row>
                    <Col xl={4} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <h5 className="card-title">Latest post</h5>
                                <div className="btn-group info-drop">
                                    <Dropdown isOpen={this.state.dropdownpost} toggle={this.dropdownpost}>
                                        <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                            <i className="ti-more" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem><i className="text-primary ti-files" />Add Post</DropdownItem>
                                            <DropdownItem><i className="text-dark ti-pencil-alt" />Edit Post</DropdownItem>
                                            <DropdownItem><i className="text-success ti-eye" />View Post</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div className="blog-box blog-2">         
                                    <img className="img-fluid w-100" src="assets/images/blog/01.jpg" alt="" />
                                    <div className="blog-info pt-10">
                                        <span className="post-category"><a href="#">Business</a></span>
                                        <h4> <a href="#"> Does your life lack meaning</a></h4>
                                        <p className="mb-10">I truly believe Augustine’s words are true.</p>
                                        <span><i className="fa fa-calendar-check-o" /> 21 April 2016 </span>
                                    </div>            
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={4} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <h5 className="card-title">Chat </h5>
                                <div className="btn-group info-drop">
                                    <Dropdown isOpen={this.state.dropdownchat} toggle={this.dropdownchat}>
                                        <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                            <i className="ti-more" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem><i className="text-primary ti-reload" />Clear chat</DropdownItem>
                                            <DropdownItem><i className="text-danger ti-trash" />Delete</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <ScrollArea speed={0.8} style={{ overflow: 'hidden', outline: 'none' }}
                                                className="scrollbar max-h-350"
                                                horizontal={false} 
                                >
                                    <div className="chats">
                                        <div className="chat-wrapper clearfix">
                                            <div className="chat-avatar">
                                                <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="" />
                                            </div>
                                            <div className="chat-body p-3">
                                                <p>It is truly amazing the damage that we, as parents, can inflict on our children. So why do?</p>
                                            </div>
                                        </div>
                                        <div className="chat-wrapper chat-me clearfix">
                                            <div className="chat-body p-3">
                                                <p>It's always nice to browse some nice and clean websites.</p>
                                            </div>
                                        </div>
                                        <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                                        <div className="chat-wrapper clearfix">
                                            <div className="chat-avatar">
                                                <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="" />
                                            </div>
                                            <div className="chat-body bg-light p-3">
                                                <p>This is perhaps the single biggest obstacle that all of us must overcome in order to be successful.</p>
                                            </div>
                                        </div>
                                        <div className="chat-wrapper chat-me clearfix">
                                            <div className="chat-body p-3">
                                                <p>In the majority of cases, the cause is a well-meaning but.</p>
                                            </div>
                                        </div>
                                        <div className="chat-wrapper chat-me clearfix">
                                            <div className="chat-body p-3">
                                                <p>Get the oars in the water and start rowing.</p>
                                            </div>
                                        </div>
                                        <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                                        <div className="chat-wrapper clearfix">
                                            <div className="chat-avatar">
                                                <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="" />
                                            </div>
                                            <div className="chat-body bg-light p-3">
                                                <p>It is truly amazing the damage that we, as parents, can inflict on our children. So why do?</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollArea>
                                <div className="chats">
                                    <div className="chat-wrapper mt-10 clearfix">
                                        <div className="chat-input">
                                            <div className="chat-input-icon">
                                                <a className="text-muted" href="#"> <i className="fa fa-smile-o" /> </a>
                                            </div>                               
                                            <textarea className="form-control input-message scrollbar" placeholder="Type here...*" rows={2} name="message" defaultValue={""} />
                                        </div>
                                        <div className="chat-button">
                                            <a href="#"> <i className="ti-clip" /></a>
                                        </div> 
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={4} className="mb-30">
                        <Card className="card-statistics h-100">
                            <div className="p-4 text-center bg-warning">
                                <h5 className="mb-60 text-white">Carol Stephens </h5>
                                <div className="btn-group info-drop">
                                    <Dropdown isOpen={this.state.dropdownsocial} toggle={this.dropdownsocial}>
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
                            <CardBody className="text-center">
                                <div className="avatar-top">
                                    <img className="img-fluid w-25 rounded-circle " src="assets/images/team/12.jpg" alt="" />
                                </div>
                                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                                <p className="mt-10">michael@webmin.com</p>
                                <div className="social-icons color-icon mt-20">
                                    <ul>
                                        <li className="social-rss"><a href="#"><i className="fa fa-rss" /></a></li>
                                        <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li className="social-github"><a href="#"><i className="fa fa-github" /></a></li>
                                        <li className="social-youtube"><a href="#"><i className="fa fa-youtube" /></a></li>
                                        <li className="social-instagram"><a href="#"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                                <div className="divider mt-20" />
                                <Row>
                                    <Col sm={4} className="col-6 mt-30">
                                        <b>Project</b>
                                        <h4 className="text-success mt-10">09</h4>
                                    </Col>
                                    <Col sm={4} className="col-6 mt-30">
                                        <b>Messages </b>
                                        <h4 className="text-danger mt-10">255</h4>
                                    </Col>
                                    <Col sm={4} className="col-12 mt-30">
                                        <b>Views</b>
                                        <h4 className="text-warning mt-10">608</h4>
                                    </Col>
                                </Row>
                            </CardBody>
                         </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBfqH9LV7E0y3DvblpSUoAHkA33S7pWCII'
  })(Dashboard2);