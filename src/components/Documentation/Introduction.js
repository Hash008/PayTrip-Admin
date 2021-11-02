import React from 'react';
import './Documentation.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Introduction</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Introduction</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                
                {/* main body */}
                <Row>
                    <Col md={12} className=" mb-30">
                        <div className="card card-statistics h-100">
                            <div className="card-body">
                                <div className="documentor-section">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Introduction</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <p>ReactJS is the latest JavaScript framework that forces you to think regarding components. This model of thinking fits user interfaces well. Depending on your background it might feel alien at first. You will have to think very carefully about the concept of state.</p>
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
export default Introduction;