import React from 'react';
import './Documentation.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
class Extra extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Extra</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Extra</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                
                {/* main body */}
                <Row>
                    <Col md={12} className=" mb-30">
                        <div className="card card-statistics h-100">
                            <div className="card-body">
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Browser Support</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <p>Webmin supports all major Browsers like Google Chrome, Mozilla Firefox, Safari, Opera and Internet Explorer 10+.</p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">How to rate this item</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <p>If you like our theme and support, Please do not forget to rate it with 5 stars in your Downloads section and write a review in Comments as it will add more value to our services!</p>
                                        <p>Kindly visit here: <a href="http://themeforest.net/downloads" className="theme-color">http://themeforest.net/downloads </a> and find “Rate this item” below the download button and rate out the theme.</p>
                                        <p><img src="assets/images/document/Screenshot_26.png" alt="" class="img-fluid" /></p>
                                        <p>Advance Thanks in Anticipation!</p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Change log</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Version 1.0 – September 23, 2019 </h5>
                                        <ul>
                                            <li>Updated: Dependencies</li>
                                            <li>Fixed: Vulnerabilities</li>
                                            <li>Fixed: Minor Issues</li>
                                            <li>Fixed: Removed Big Calendar Plugin</li>
                                            <li>Added: Fullcalener Plugin</li>
                                            <li>Added: Event Calendar</li>
                                            <li>Added: 2 new Dashboard Pages</li>
                                            <li>Added: Ecommerce Pages</li>
                                            <li>Added: Academy Pages</li>
                                            <li>Added: Pricing Pages</li>
                                            <li>Added: Coming Soon Page</li>
                                            <li>Added: Forgot Password Page</li>
                                            <li>Added: Reset Password Page</li>
                                            <li>Added: Lockscreen Page</li>
                                            <li>Added: Mail Confirmation Page</li>
                                            <li>Added: File Manager Page</li>
                                        </ul>
                                        <h5>Version 0.1.1 – January 05, 2019 </h5>
                                        <ul>
                                            <li>Updated: Dependencies</li>
                                            <li>Fixed: Vulnerabilities</li>
                                            <li>Fixed: Minor Issues</li>
                                        </ul>
                                        <h5>Version 0.1 </h5>
                                        <ul>
                                            <li>Initial Release</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Extra;