import React from 'react';
import './ProductDetail.css';
import { Row, Col, CardTitle, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardText  } from 'reactstrap';
import classnames from 'classnames';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);

        this.tabvertical = this.tabvertical.bind(this);
        this.tabhorizontal = this.tabhorizontal.bind(this);
        this.tabround = this.tabround.bind(this);
        this.tabbordericon = this.tabbordericon.bind(this);
        this.state = {
            tabvertical: '1',
            tabhorizontal: '1',
            tabround: '1',
            tabbordericon: '1'
        };
    }

    tabvertical(tab) {
        if (this.state.tabvertical !== tab) {
            this.setState({
                tabvertical: tab
            });
        }
    }
    tabhorizontal(tab) {
        if (this.state.tabhorizontal !== tab) {
            this.setState({
                tabhorizontal: tab
            });
        }
    }
    tabround(tab) {
        if (this.state.tabround !== tab) {
            this.setState({
                tabround: tab
            });
        }
    }
    tabbordericon(tab) {
        if (this.state.tabbordericon !== tab) {
            this.setState({
                tabbordericon: tab
            });
        }
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Product Detail</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Product Detail</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    < Col md={12}>
                        <div className="product-details">
                            <div className="card-statistics h-100 card mb-30">
                                <CardBody>
                                    <div className="product-item row">
                                        <Col xl={4} md={4}>
                                            <div className="product-img">
                                                <img src="assets/images/product/product-1.jpg" className="img-fluid" alt="product-img" />
                                            </div>
                                        </Col>
                                        <Col xl={8} md={8}>
                                            <div className="product-content">
                                                <h5 className=""><a href="#">JaipurCrafts Decorative Premium 5 inch Wooden Hookah (Brown)</a></h5>
                                                <p className="description">Fine art of Rajasthan , This is product is not for the consumption of tobacco. The SD DESIGN QT hookah is ready to use out of the box, comes complete with hookah tongs, ceramic bowl, rubber grommets, hose and complete instructions.</p>
                                                <div className="details">
                                                    <p className="size"><b>Size :-</b> M, L, XL</p>
                                                    <p className="price"><b>Price :-</b><ins> $ 35.00</ins></p>
                                                    <p className="quantity"><b>Quantity :-</b> 30</p>
                                                    <p className="category"><b>Category :- </b> <a href="#">Hookahs</a>, <a href="#">Hookah Hoses</a></p>
                                                    <p className="tags"><b>Tag :- </b> <a href="#">Wooden</a></p>
                                                    <p className="sku"><b>SKU :-</b> 12302</p>
                                                    <p className="mb-15 review"><b>Reviews :-</b> <span className="star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></span></p>
                                                </div>
                                                <div className="tab tab-border">
                                                    <Nav tabs>
                                                        <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '1' })} onClick={() => { this.tabhorizontal('1'); }}>Description</NavLink></NavItem>
                                                        <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '2' })} onClick={() => { this.tabhorizontal('2'); }}>Reviews</NavLink></NavItem>
                                                    </Nav>
                                                    <TabContent activeTab={this.state.tabhorizontal} >
                                                        <TabPane tabId="1">
                                                           <p className="mb-15">Fine art of Rajasthan , This is product is not for the consumption of tobacco. The SD DESIGN QT hookah is ready to use out of the box, comes complete with hookah tongs, ceramic bowl, rubber grommets, hose and complete instructions.</p>
                                                            <ul>
                                                                <li><strong>Brand</strong> : JaipurCrafts</li>
                                                                <li><strong>Model Name</strong> : Decorative Premium</li>
                                                                <li><strong>Pack of</strong> : 1</li>
                                                                <li><strong>Material</strong> : Wooden</li>
                                                                <li><strong>Color</strong> : Brown</li>
                                                                <li><strong>Number of Pipe Openings</strong> : 1</li>
                                                            </ul>
                                                        </TabPane>

                                                        <TabPane tabId="2">
                                                            <ul className="commentlist">
                                                                <li className="review">
                                                                    <div className="review-img">
                                                                        <img src="assets/images/team/04.jpg" className="img-fluid" alt="user-img"/>
                                                                    </div>
                                                                    <div className="review-content">
                                                                        <div className="meta mb-10">
                                                                            <p><strong>Melissa </strong><span>- July 5, 2018</span></p>
                                                                            <p className="star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></p>
                                                                        </div>
                                                                        <div className="description">
                                                                            <p>We specialize in innovative products that will take your hookah experience to the next level.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="review">
                                                                    <div className="review-img">
                                                                        <img src="assets/images/team/05.jpg" className="img-fluid" alt="user-img"/>
                                                                    </div>
                                                                    <div className="review-content">
                                                                        <div className="meta mb-10">
                                                                            <p><strong>Brandon </strong><span>- July 5, 2018</span></p>
                                                                            <p className="star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></p>
                                                                        </div>
                                                                        <div className="description">
                                                                            <p>Al-Alif and Company was established with the goal of selling the finest hookah products available.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </TabPane>
                                                    </TabContent>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </CardBody>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ProductDetail;