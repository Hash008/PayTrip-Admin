import React from 'react';
import './Pricing2.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';


class Pricing2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Pricing 2</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Pricing 2</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
				
                {/* main body */}
                <Row>
                    <Col xl={3} sm={6} className="mb-30">
                        <Card className="card-statistics pricing-card pricing-card-style-2 h-100 card">
                            <div className="card-header bg-dark">
                                <h5 className="card-title">BASIC</h5>
                            </div>
                            <CardBody>
                                <div className="pricing-content">
                                    <div className="price">
                                        <h2>$100</h2>
                                        <p>/ Monthly</p>
                                    </div>
                                    <ul className="py-2">
                                        <li><i className="fa fa-check"></i> 10 post jobs</li>
                                        <li><i className="fa fa-times text-danger"></i> advanced instructors search</li>
                                        <li><i className="fa fa-check"></i> 10 invite candidates</li>
                                        <li><i className="fa fa-check"></i> 10 post events</li>
                                        <li><i className="fa fa-times text-danger"></i> cancel any time</li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="btn-wrap">
                                    <Button href="javascript:void(0)" className="button black btn btn-secondary btn-md">purchase</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className="mb-30">
                        <Card className="card-statistics pricing-card pricing-card-style-2 h-100 card">
                            <div className="card-header bg-dark">
                                <h5 className="card-title">Premium</h5>
                            </div>
                            <CardBody>
                                <div className="pricing-content">
                                    <div className="price">
                                        <h2>$150</h2>
                                        <p>/ Monthly</p>
                                    </div>
                                    <ul className="py-2">
                                        <li><i className="fa fa-check"></i> 20 post jobs</li>
                                        <li><i className="fa fa-times text-danger"></i> advanced instructors search</li>
                                        <li><i className="fa fa-check"></i> 20 invite candidates</li>
                                        <li><i className="fa fa-check "></i> 20 post events</li>
                                        <li><i className="fa fa-check"></i> cancel any time</li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="btn-wrap">
                                    <Button href="javascript:void(0)" className="button black btn btn-secondary btn-md">purchase</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className="mb-30">
                        <Card className="card-statistics pricing-card pricing-card-style-2 h-100 card">
                            <div className="card-header theme-bg">
                                <h5 className="card-title">STANDARD</h5>
                            </div>
                            <CardBody>
                                <div className="pricing-content">
                                    <div className="price">
                                        <h2>$250</h2>
                                        <p>/ Monthly</p>
                                    </div>
                                    <ul className="py-2">
                                        <li><i className="fa fa-check"></i> 30 post jobs</li>
                                        <li><i className="fa fa-check"></i> advanced instructors search</li>
                                        <li><i className="fa fa-check"></i> 30 invite candidates</li>
                                        <li><i className="fa fa-check"></i> 30 post events</li>
                                        <li><i className="fa fa-check"></i> cancel any time</li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="btn-wrap">
                                    <Button href="javascript:void(0)" className="button btn btn-secondary btn-md">purchase</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={3} sm={6} className="mb-30">
                        <Card className="card-statistics pricing-card pricing-card-style-2 h-100 card">
                            <div className="card-header bg-dark">
                                <h5 className="card-title">ADVANCE</h5>
                            </div>
                            <CardBody>
                                <div className="pricing-content">
                                    <div className="price">
                                        <h2>$350</h2>
                                        <p>/ Monthly</p>
                                    </div>
                                    <ul className="py-2">
                                        <li><i className="fa fa-check"></i> Unlimited post jobs</li>
                                        <li><i className="fa fa-check"></i> advanced instructors search</li>
                                        <li><i className="fa fa-check"></i> Unlimited invite candidates</li>
                                        <li><i className="fa fa-check"></i> Unlimited post events</li>
                                        <li><i className="fa fa-check"></i> cancel any time</li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="btn-wrap">
                                    <Button href="javascript:void(0)" className="button black btn btn-secondary btn-md">purchase</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Pricing2;