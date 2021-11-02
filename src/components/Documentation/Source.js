import React from 'react';

import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
import './Documentation.css';
class Source extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Source & Credits</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Source & Credits</BreadcrumbItem>
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
                                        <span className="doc-sec-count">Source & Credits</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Images</h5>
                                        <ul>
                                            <li>Pexels <a href="https://www.pexels.com/" className="theme-color">Pexels</a></li>
                                        </ul>
                                        <h5>React Scripts</h5>
                                        <ul>
                                            <li><a href="https://reactjs.org/" className="theme-color">react</a></li>
                                            <li><a href="https://reactstrap.github.io/" className="theme-color">reactstrap</a></li>
                                            <li><a href="https://reactjs.org/docs/react-dom.html" className="theme-color">react-dom</a></li>
                                            <li><a href="Bootstrap 4" className="theme-color">Bootstrap 4</a></li>
                                            <li><a href="http://jerairrest.github.io/react-chartjs-2/" className="theme-color">react-chartjs-2</a></li>
                                            <li><a href="https://www.npmjs.com/package/react-nice-scrollbar" className="theme-color">nicescroll</a></li>
                                            <li><a href="https://www.npmjs.com/package/@fullcalendar/core" className="theme-color">@fullcalendar/core</a></li>
                                            <li><a href="http://allenfang.github.io/react-bootstrap-table/" className="theme-color">datatables</a></li>
                                            <li><a href="https://www.npmjs.com/package/react-switch" className="theme-color">react-switch</a></li>
                                            <li><a href="https://www.npmjs.com/package/react-validation" className="theme-color">react-validation</a></li>
                                            <li><a href="https://casesandberg.github.io/react-color/" className="theme-color">react-color</a></li>
                                            <li><a href="https://www.npmjs.com/package/alerts" className="theme-color">npm-alert</a></li>
                                            <li><a href="https://www.npmjs.com/package/react-accessible-accordion" className="theme-color">react-accessible-accordion</a></li>
                                            <li><a href="https://www.npmjs.com/package/tooltip" className="theme-color">npm-tooltip</a></li>
                                            <li><a href="https://www.npmjs.com/package/@tinymce/tinymce-react" className="theme-color">tinymce-react</a></li>
                                            <li><a href="https://reactdatepicker.com/" className="theme-color">react-datepicker</a></li>
                                            <li><a href="https://www.npmjs.com/package/react-rating" className="theme-color">react-rating</a></li>
                                            <li><a href="https://www.npmjs.com/package/google-maps-react" className="theme-color">google-maps-react</a></li>
                                            <li><a href="https://www.npmjs.com/package/react-circular-progressbar" className="theme-color">react-circular-progressbar</a></li>
                                        </ul>
                                        <h5>CSS & Fonts</h5>
                                        <ul>
                                            <li><a href="http://fortawesome.github.io/Font-Awesome/" className="theme-color">Font Awesome</a></li>
                                            <li><a href="https://www.google.com/fonts" className="theme-color">Google Fonts</a></li>
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
export default Source;
<a href="http://themes2.potenzaglobalsolutions.com/dlautomobile/#pgs_home_referesection" class="text-white">
        Earn $500 Now   </a>