import React from 'react';
import './Knowledge.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button,Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
class Knowledge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            rewritemdl:false,
            lifecyclemdl: false,
            fetchingmdl:false,
            effectmdl: false,
            safemdl:false,
            callsmdl: false,
            artmdl:false,
        };
        this.toggle = this.toggle.bind(this);
        this.rewrite = this.rewrite.bind(this);
        this.lifecycle = this.lifecycle.bind(this);
        this.fetching = this.fetching.bind(this);
        this.effect = this.effect.bind(this);
        this.safe = this.safe.bind(this);
        this.calls = this.calls.bind(this);
        this.art = this.art.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    rewrite() {
        this.setState({
            rewritemdl: !this.state.rewritemdl
        });
    }
    lifecycle() {
        this.setState({
            lifecyclemdl: !this.state.lifecyclemdl
        });
    }
    fetching() {
        this.setState({
            fetchingmdl: !this.state.fetchingmdl
        });
    }
    effect() {
        this.setState({
            effectmdl: !this.state.effectmdl
        });
    }
    safe() {
        this.setState({
            safemdl: !this.state.safemdl
        });
    }
    calls() {
        this.setState({
            callsmdl: !this.state.callsmdl
        });
    }
    art() {
        this.setState({
            artmdl: !this.state.artmdl
        });
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Knowledge Base</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><Link to="#">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Knowledge Base</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={12}>
                        <div className="knowledge">
                            <Row>
                                <Col md={6} className="mb-30">
                                    <Card className="card-statistics">
                                        <CardBody>
                                            <div className="card-title">Adoption Strategy</div>
                                            <Row>
                                                <Col xl={6}>
                                                    <Link to="#" onClick={this.toggle}>
                                                        <div className="feature-info h-100">
                                                            <div className="feature-info-icon text-primary">
                                                                <i className="fa fa-joomla"></i>
                                                            </div>
                                                            <div className="feature-info-content">
                                                                <h6 className="mb-3 feature-info-title">Which versions of React include Hooks?</h6>
                                                                <p className="mb-0">Starting with 16.8.0, React includes a stable implementation of React Hooks for: We recommend trying Hooks in new code.</p>
                                                            </div>
                                                            <div className="divider py-2"></div>
                                                            <div className="feature-info-category">
                                                                <p className="feature-info-category-item">Home </p>
                                                            </div>
                                                        </div>
                                                        <Modal fade={false} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                                                <ModalHeader toggle={this.toggle}>Which versions of React include Hooks?</ModalHeader>
                                                                    <ModalBody>
                                                                        <p>Starting with 16.8.0, React includes a stable implementation of React Hooks for: We recommend trying Hooks in new code.Starting with 16.8.0, React includes a stable implementation of React Hooks for: We recommend trying Hooks in new code.</p>
                                                                    </ModalBody>
                                                        </Modal>
                                                    </Link>
                                                </Col>
                                                <Col xl={6}>
                                                    <Link to="#" onClick={this.rewrite}>
                                                        <div className="feature-info h-100">
                                                            <div className="feature-info-icon text-success">
                                                                <i className="fa fa-ge"></i>
                                                            </div>
                                                            <div className="feature-info-content">
                                                                <h6 className="mb-3 feature-info-title">Do I need to rewrite all my class components?</h6>
                                                                <p className="mb-0">No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. </p>
                                                            </div>
                                                            <div className="divider py-2"></div>
                                                            <div className="feature-info-category">
                                                                <p className="feature-info-category-item mb-2">Account</p>
                                                                <p className="feature-info-category-item">Work </p>
                                                            </div>
                                                        </div>
                                                        <Modal fade={false} isOpen={this.state.rewritemdl} toggle={this.rewrite} className={this.props.className}>
                                                            <ModalHeader toggle={this.rewrite}>Do I need to rewrite all my class components?</ModalHeader>
                                                                <ModalBody>
                                                                    <p>No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. </p>
                                                                </ModalBody>
                                                        </Modal>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <Button className="button gray icon btn btn-secondary btn-xsmall">View More <i className="fa fa-long-arrow-right"></i></Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-30">
                                    <Card className="card-statistics">
                                        <CardBody>
                                            <div className="card-title">From Classes to Hooks</div>
                                            <Row>
                                                <Col xl={6}>
                                                    <Link to="#" onClick={this.lifecycle}>
                                                        <div className="feature-info h-100">
                                                            <div className="feature-info-icon text-info">
                                                                <i className="fa fa-empire"></i>
                                                            </div>
                                                            <div className="feature-info-content">
                                                                <h6 className="mb-3 feature-info-title">How do lifecycle methods correspond to Hooks</h6>
                                                                <p className="mb-0">constructor: Function components don’t need a constructor. You can initialize the state in the useState call. </p>
                                                            </div>
                                                            <div className="divider py-2"></div>
                                                            <div className="feature-info-category">
                                                                <p className="feature-info-category-item ">Home </p>
                                                            </div>
                                                        </div>
                                                        <Modal fade={false} isOpen={this.state.lifecyclemdl} toggle={this.lifecycle} className={this.props.className}>
                                                            <ModalHeader toggle={this.lifecycle}>How do lifecycle methods correspond to Hooks</ModalHeader>
                                                                <ModalBody>
                                                                    <p>constructor: Function components don’t need a constructor. You can initialize the state in the useState call. constructor: Function components don’t need a constructor. You can initialize the state in the useState call. </p>
                                                                </ModalBody>
                                                        </Modal>
                                                    </Link>
                                                </Col>
                                                <Col xl={6}>
                                                    <Link to="#" onClick={this.fetching}>
                                                        <div className="feature-info h-100">
                                                            <div className="feature-info-icon text-dark">
                                                                <i className="fa fa-gittip"></i>
                                                            </div>
                                                            <div className="feature-info-content">
                                                                <h6 className="mb-3 feature-info-title">How can I do data fetching with Hooks?</h6>
                                                                <p className="mb-0">Here is a small demo to get you started. To learn more, check out this article about data fetching with Hooks.</p>
                                                            </div>
                                                            <div className="divider py-2"></div>
                                                            <div className="feature-info-category">
                                                                <p className="feature-info-category-item mb-2">Account</p>
                                                                <p className="feature-info-category-item">Work</p>
                                                            </div>
                                                        </div>
                                                        <Modal fade={false} isOpen={this.state.fetchingmdl} toggle={this.fetching} className={this.props.className}>
                                                            <ModalHeader toggle={this.fetching}>How can I do data fetching with Hooks?</ModalHeader>
                                                                <ModalBody>
                                                                    <p>Here is a small demo to get you started. To learn more, check out this article about data fetching with Hooks.Here is a small demo to get you started. To learn more, check out this article about data fetching with Hooks. </p>
                                                                </ModalBody>
                                                        </Modal>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <Button className="button gray icon btn btn-secondary btn-xsmall">View More <i className="fa fa-long-arrow-right"></i></Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-30">
                                    <Card className="card-statistics">
                                        <CardBody>
                                            <div className="card-title">Performance Optimizations</div>
                                            <Row>
                                                <Col xl={6}>
                                                    <Link to="#" onClick={this.effect} className="feature-info-category-item"> 
                                                    <div className="feature-info h-100">
                                                        <div className="feature-info-icon text-warning">
                                                            <i className="fa fa-slack"></i>
                                                        </div>
                                                        <div className="feature-info-content">
                                                            <h6 className="mb-3 feature-info-title">Can I skip an effect on updates?</h6>
                                                            <p className="mb-0">Yes. See conditionally firing an effect. Note that forgetting to handle updates often introduces bugs, which is why</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <p className="feature-info-category-item">Home </p>
                                                        </div>
                                                    </div>
                                                    <Modal fade={false} isOpen={this.state.effectmdl} toggle={this.effect} className={this.props.className}>
                                                    <ModalHeader toggle={this.effect}>Can I skip an effect on updates?</ModalHeader>
                                                        <ModalBody>
                                                            <p>Yes. See conditionally firing an effect. Note that forgetting to handle updates often introduces bugs, which is whyYes. See conditionally firing an effect. Note that forgetting to handle updates often introduces bugs, which is why </p>
                                                        </ModalBody>
                                                </Modal>
                                                    </Link>
                                                </Col>
                                                <Col xl={6}>
                                                    <Link to="#" onClick={this.safe}>
                                                        <div className="feature-info h-100">
                                                            <div className="feature-info-icon text-danger">
                                                                <i className="fa fa-html5"></i>
                                                            </div>
                                                            <div className="feature-info-content">
                                                                <h6 className="mb-3 feature-info-title">Is it safe to omit functions from the list of dependencies?</h6>
                                                                <p className="mb-0">It’s difficult to remember which props or state are used by functions outside of the effect. This is why</p>
                                                            </div>
                                                            <div className="divider py-2"></div>
                                                            <div className="feature-info-category">
                                                                <p className="feature-info-category-item mb-2">Account</p>
                                                                <p className="feature-info-category-item">Work</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Modal fade={false} isOpen={this.state.safemdl} toggle={this.safe} className={this.props.className}>
                                                        <ModalHeader toggle={this.safe}>Is it safe to omit functions from the list of dependencies?</ModalHeader>
                                                            <ModalBody>
                                                                <p>It’s difficult to remember which props or state are used by functions outside of the effect. This is whyIt’s difficult to remember which props or state are used by functions outside of the effect. This is why</p>
                                                            </ModalBody>
                                                    </Modal>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <Button className="button gray icon btn btn-secondary btn-xsmall">View More <i className="fa fa-long-arrow-right"></i></Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-30">
                                    <Card className="card-statistics">
                                        <CardBody>
                                            <div className="card-title">Under the Hood</div>
                                            <Row>
                                                <Col xl={6}>
                                                <Link to="#" onClick={this.calls}>
                                                    <div className="feature-info h-100">
                                                        <div className="feature-info-icon text-success">
                                                            <i className="fa fa-openid"></i>
                                                        </div>
                                                        <div className="feature-info-content">
                                                            <h6 className="mb-3 feature-info-title">How does React associate Hook calls with components?</h6>
                                                            <p className="mb-0">React keeps track of the currently rendering component. Thanks to the Rules of Hooks, we know that Hooks are only called</p>
                                                        </div>
                                                        <div className="divider py-2"></div>
                                                        <div className="feature-info-category">
                                                            <p className="feature-info-category-item">Home</p>
                                                        </div>
                                                    </div>
                                                    <Modal fade={false} isOpen={this.state.callsmdl} toggle={this.calls} className={this.props.className}>
                                                        <ModalHeader toggle={this.calls}>How does React associate Hook calls with components?</ModalHeader>
                                                            <ModalBody>
                                                                <p>React keeps track of the currently rendering component. Thanks to the Rules of Hooks, we know that Hooks are only calledReact keeps track of the currently rendering component. Thanks to the Rules of Hooks, we know that Hooks are only called </p>
                                                            </ModalBody>
                                                    </Modal>
                                                    </Link>
                                                </Col>
                                                <Col xl={6}>
                                                    <Link to="#" onClick={this.art}> 
                                                        <div className="feature-info h-100">
                                                            <div className="feature-info-icon text-warning">
                                                                <i className="fa fa-codepen"></i>
                                                            </div>
                                                            <div className="feature-info-content">
                                                                <h6 className="mb-3 feature-info-title">What is the prior art for Hooks?</h6>
                                                                <p className="mb-0">Sebastian Markbåge came up with the original design for Hooks, later refined by Andrew Clark, Sophie Alpert,</p>
                                                            </div>
                                                            <div className="divider py-2"></div>
                                                            <div className="feature-info-category">
                                                                <p className="feature-info-category-item mb-2">Account </p>
                                                                <p className="feature-info-category-item">Work</p>
                                                            </div>
                                                        </div>
                                                         <Modal fade={false} isOpen={this.state.artmdl} toggle={this.art} className={this.props.className}>
                                                            <ModalHeader toggle={this.art}>What is the prior art for Hooks?</ModalHeader>
                                                                <ModalBody>
                                                                    <p>Sebastian Markbåge came up with the original design for Hooks, later refined by Andrew Clark, Sophie Alpert,Sebastian Markbåge came up with the original design for Hooks, later refined by Andrew Clark, Sophie Alpert, </p>
                                                                </ModalBody>
                                                        </Modal>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div className="view-btn text-right">
                                                <Button className="button gray icon btn btn-secondary btn-xsmall">View More <i className="fa fa-long-arrow-right"></i></Button>
                                            </div>  
                                        </CardBody>
                                    </Card>
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