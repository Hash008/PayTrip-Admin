import React from 'react';
import './Knowledge.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
class Knowledge extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Knowledge</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Knowledge</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                
                {/* main body */}
                <Row>
                    <Col md={12}>
                        <div className="knowledge">
                            <Row>
                                <Col md={6} className="mb-30">
                                    <div className="card card-statistics">
                                        <div className="card-body">
                                            <h4 className="card-title">Adoption Strategy</h4>
                                            <Row>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-joomla"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">Which versions of React include Hooks?</h6>
                                                            <p class="mb-0">Starting with 16.8.0, React includes a stable implementation of React Hooks for: We recommend trying Hooks in new code.</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Home <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-ge"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">Do I need to rewrite all my class components?</h6>
                                                            <p class="mb-0">No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. </p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Account <i className="fa fa-times"></i></a>
                                                            <a href="#" className="feature-info-category-item">Work <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <button class="button gray icon btn btn-secondary btn-xsmall">View More <i class="fa fa-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-30">
                                    <div className="card card-statistics">
                                        <div className="card-body">
                                            <h4 className="card-title">From Classes to Hooks</h4>
                                            <Row>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-empire"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">How do lifecycle methods correspond to Hooks</h6>
                                                            <p class="mb-0">constructor: Function components don’t need a constructor. You can initialize the state in the useState call. </p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Home <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-gittip"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">How can I do data fetching with Hooks?</h6>
                                                            <p class="mb-0">Here is a small demo to get you started. To learn more, check out this article about data fetching with Hooks.</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Account <i className="fa fa-times"></i></a>
                                                            <a href="#" className="feature-info-category-item">Work <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <button class="button gray icon btn btn-secondary btn-xsmall">View More <i class="fa fa-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-30">
                                    <div className="card card-statistics">
                                        <div className="card-body">
                                            <h4 className="card-title">Performance Optimizations</h4>
                                            <Row>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-slack"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">Can I skip an effect on updates?</h6>
                                                            <p class="mb-0">Yes. See conditionally firing an effect. Note that forgetting to handle updates often introduces bugs, which is why</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Home <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-html5"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">Is it safe to omit functions from the list of dependencies?</h6>
                                                            <p class="mb-0">It’s difficult to remember which props or state are used by functions outside of the effect. This is why</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Account <i className="fa fa-times"></i></a>
                                                            <a href="#" className="feature-info-category-item">Work <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <button class="button gray icon btn btn-secondary btn-xsmall">View More <i class="fa fa-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="mb-30">
                                    <div className="card card-statistics">
                                        <div className="card-body">
                                            <h4 className="card-title">Under the Hood</h4>
                                            <Row>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-openid"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">How does React associate Hook calls with components?</h6>
                                                            <p class="mb-0">React keeps track of the currently rendering component. Thanks to the Rules of Hooks, we know that Hooks are only called</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Home <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div class="feature-info h-100">
                                                        <div class="feature-info-icon">
                                                            <i class="fa fa-codepen"></i>
                                                        </div>
                                                        <div class="feature-info-content">
                                                            <h6 class="mb-3 feature-info-title">What is the prior art for Hooks?</h6>
                                                            <p class="mb-0">Sebastian Markbåge came up with the original design for Hooks, later refined by Andrew Clark, Sophie Alpert,</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <a href="#" className="feature-info-category-item">Account <i className="fa fa-times"></i></a>
                                                            <a href="#" className="feature-info-category-item">Work <i className="fa fa-times"></i></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <button class="button gray icon btn btn-secondary btn-xsmall">View More <i class="fa fa-long-arrow-right"></i></button>
                                            </div>  
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Knowledge;