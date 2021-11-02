import React from 'react';
import './Documentation.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
class Global extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Global</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Global</BreadcrumbItem>
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
                                        <span className="doc-sec-count">Global</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <p>This section covers global elements which are used throughout in application.</p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Logo</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <p>To change logo go to the layout directory inside of the component directory. Open layout directory and open inheader.js add below code.</p>
                                        <p><img src="assets/images/document/Screenshot_4.png" alt="" class="img-fluid" /></p>
                                        <br/>
                                        <p>You need to change the image path for both mobile and desktop version</p>
                                        <p>>> .brand-logo for desktop version</p>
                                        <p>>> .brand-logo-mini for mobile version</p>
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
export default Global;