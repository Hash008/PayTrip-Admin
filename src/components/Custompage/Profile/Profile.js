import React from 'react';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react';
import ScrollArea  from 'react-scrollbar';
import './Profile.css';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownpost = this.dropdownpost.bind(this);
        this.dropdownchat = this.dropdownchat.bind(this);
        
        this.state = {
            dropdownpost: false,
            dropdownchat: false,
        };
    }
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
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Profile</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Profile</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={12} mb={30}>
                        <div className="profile-page">
                            <Row>
                                <Col lg={12} className="mb-30">
                                    <Card>
                                        <CardBody>
                                            <div className="user-bg parallax bg" style={{backgroundImage: 'url(assets/images/login-inner-bg.jpg)'}}>
                                                <div className="user-info">
                                                    <Row>
                                                        <Col lg={6} className="align-self-center">
                                                            <div className="user-dp"><img className="img-fluid rounded-circle" src="assets/images/profile-avatar.jpg" /></div>
                                                            <div className="user-detail">
                                                                <h2 className="name">Michael Bean</h2>
                                                                <p className="designation mb-0">- Admin</p>
                                                            </div>
                                                        </Col>
                                                        <div className="col-lg-6 text-right align-self-center">
                                                            <button type="button" className="btn btn-sm btn-danger mr-1"><i className="ti-user pr-1"></i>Follow</button>
                                                            <button type="button" className="btn btn-sm btn-success"><i className="ti-email pr-1"></i>Message</button>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4} mb={30}>
                                    <Card className="mb-30 about-me">
                                        <CardBody>
                                            <div className="card-title"> About Me</div>
                                            <p>I have more than 9 years of experience in the field of Graphic/ E-Learning/Web Designing.</p>
                                            <p>Specialized in Adobe web & graphic designing tools and also in other tools. Professional in Corporate branding, Graphic designing, Web Designing, visualization, GUI, graphics & animations for e-learning, illustrations, web icons, logos, brochures, posters etc.</p>
                                            <ul className="list-unstyled ">
                                                <li className="list-item"><span className="text-info ti-email"></span>+(704) 279-15912</li>
                                                <li className="list-item"><span className="text-warning ti-direction-alt"></span>michael-bean@mail.com</li>
                                                <li className="list-item"><span className="text-success ti-facebook"></span>/michaelbean</li>
                                                <li className="list-item"><span className="text-danger ti-twitter"></span>@michaelbean</li>
                                                <li className="list-item"><span className="text-dark ti-direction-alt"></span>17504 Carlton Cuevas Rd, Gulfport, MS, 39503</li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                    <div className="card card-statistics mb-30">
                                        <CardBody>
                                            <div className="card-title"> Notifications</div>
                                            <div className="btn-group info-drop">
                                                <Dropdown isOpen={this.state.dropdownpost} toggle={this.dropdownpost}>
                                                    <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                                        <i className="ti-more" />
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem><i className="text-primary ti-reload" />Clear All</DropdownItem>
                                                        <DropdownItem><i className="text-success ti-eye" />View All</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                            <ScrollArea className="max-h-350">
                                                <ul className="list-unstyled">
                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/01.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-success"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Martin smith <small className="float-right">Just now</small> </h6>
                                                                <p>Create tailor-cut websites with the exclusive </p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>
                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative clearfix">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/02.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-success"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Paul Flavius <small className="float-right">Just now</small> </h6>
                                                                <p>Create tailor-cut websites with the exclusive </p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>
                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/03.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-danger"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Anne Smith <small className="float-right">30 min ago</small> </h6>
                                                                <p>Create tailor-cut websites with the exclusive </p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>
                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/04.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-success"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Sara Lisbon <small className="float-right">1 hours ago</small> </h6>
                                                                <p>Create tailor-cut websites with the exclusive </p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>
                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/01.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-success"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Sara Lisbon <small className="float-right">10 hours ago</small> </h6>
                                                                <p>Create tailor-cut websites with the exclusive </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </ScrollArea>
                                        </CardBody>
                                    </div>
                                </Col>
                                <div className="col-xl-8 mb-30">
                                    <div className="card mb-30">
                                        <div className="card-body">
                                            <div className="comment-block">
                                                <div className="form-group mb-0">
                                                    <div id="summernote">
                                                        <Editor apiKey="4g60ipl1td07vlbgw6ve3xc9hvdc4v5mumv67strjos5z6mz" init={{ plugins: 'link image code',toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',branding: false}}/>
                                                        <a className="button black mt-3" href="javascript:void(0);">Send</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card tickets">
                                        <div className="card-body">
                                            <div className="card-title"> Support Tickets</div>
                                            <div className="btn-group info-drop">
                                                <Dropdown isOpen={this.state.dropdownchat} toggle={this.dropdownchat}>
                                                    <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                                        <i className="ti-more" />
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem><i className="text-primary ti-reload" />Clear All</DropdownItem>
                                                        <DropdownItem><i className="text-danger ti-eye" />View All</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                            <ScrollArea className="max-h-550 tickets-info">
                                                <ul className="list-unstyled">
                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/01.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-success"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Martin smith <small className="float-right">Just now</small> </h6>
                                                                <a href="#">You will sail along until you collide with an immovable object</a>
                                                                <p className="mt-10">You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this exercise is to hypnotize yourself to be aware of two very real possibilities for your future. </p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>

                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative clearfix">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/02.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-success"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Paul Flavius <small className="float-right">Just now</small> </h6>
                                                                <a href="#">Simply by asking ourselves lots of questions</a>
                                                                <p className="mt-10">That is your imagination doing that. You know the sound that your feet make when you walk across gravel don’t you? You can imagine it, but you are not hearing it in your ears, are you? </p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>

                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/03.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-danger"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Anne Smith <small className="float-right">30 min ago</small> </h6>
                                                                <a href="#">This is perhaps the single biggest obstacle</a>
                                                                <p className="mt-10">Here, there are two different pathways, two possibilities, two ways that you could choose to go.</p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>

                                                    <li className="mb-15">
                                                        <div className="media">
                                                            <div className="position-relative">
                                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/item/04.png" alt="avatar-img" />
                                                                <i className="avatar-online bg-success"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 ">Sara Lisbon <small className="float-right">1 hours ago</small> </h6>
                                                                <a href="#">We all carry a lot of baggage, thanks to our upbringing.</a>
                                                                <p className="mt-10">Step out on to the path to your left. Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams.</p>
                                                            </div>
                                                        </div>
                                                        <div className="divider mt-15"></div>
                                                    </li>
                                                    <li className="mb-15">
                                                            <div className="media">
                                                                <div className="position-relative">
                                                                    <img className="img-fluid mr-15 avatar-small" src="assets/images/item/01.png" alt="avatar-img" />
                                                                    <i className="avatar-online bg-success"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mt-0 ">Sara Lisbon <small className="float-right">10 hours ago</small> </h6>
                                                                    <a href="#">You will sail along until you collide with an immovable object</a>
                                                                    <p className="mt-10">You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this exercise is to hypnotize yourself to be aware of two very real possibilities for your future.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                </ul>
                                            </ScrollArea>
                                        </div>
                                    </div>
                                </div>
                            </Row>                   
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Profile;