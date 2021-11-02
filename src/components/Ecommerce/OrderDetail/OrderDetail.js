import React from 'react';
import './OrderDetail.css';
import { Row, Col, Card, Table, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Order Detail</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><Link to="#">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Order Detail</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col xl={12}>
                        <div className="order-detail">
                            <Card className="card-statistics h-100 mb-30">
                                <CardBody>
                                    <div className="d-md-flex justify-content-md-between mb-30">
                                        <div className="mb-20">
                                          <img className="logo-small mt-0" src="assets/images/logo-dark.png" alt="logo" />
                                        </div>
                                        <ul className="file-list text-left">
                                            <li>
                                              <Link to="#"><i className="fa fa-search" /></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-floppy-o" /></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-dropbox" /></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-share-square-o" /></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-folder-open-o" /></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-download" /></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-clone" /></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-trash-o" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-title d-sm-flex justify-content-between mb-15 ">
                                        <h4 className="mb-10 mb-sm-0">Order Id :- #00000123</h4>
                                        <h6>Order  Date : February 20, 2018</h6>
                                    </div>
                                    <Row className="no-gutters">
                                        
                                    <Col md={6} xl={6} className="mb-30">
                                            <div>
                                                <h5 className="card-title">Invoice Info</h5>
                                                <ul className="invoice-info">
                                                    <li>
                                                        <span>Order Status</span>
                                                        <span className="badge badge-success">Shipping</span>
                                                    </li>
                                                    <li>
                                                        <span>Payment Type</span>
                                                        <span>Debit Card</span>
                                                    </li>
                                                    <li>
                                                        <span>Items</span>
                                                        <span>14</span>
                                                    </li>
                                                    <li>
                                                        <span>Price</span>
                                                        <span>$1465.00</span>
                                                    </li>
                                                    <li>
                                                        <span>Shipping Charge</span>
                                                        <span>$50.00</span>
                                                    </li>
                                                    <li>
                                                        <span>Discount 10%</span>
                                                        <span>$146.50</span>
                                                    </li>
                                                    <li>
                                                        <span>Total</span>
                                                        <span>$1368.50</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={6} xl={6} className="mb-30">
                                            <div>
                                                <h5 className="card-title">Shipping Address</h5>
                                                <ul className="invoice-info">
                                                    <li>
                                                        <span>Name</span>
                                                        <span>Michael Bean</span>
                                                    </li>
                                                    <li>
                                                        <span>Address</span>
                                                        <span>1405 Forest Avenue</span>
                                                    </li>
                                                    <li>
                                                        <span>City</span>
                                                        <span>San Jose</span>
                                                    </li>
                                                    <li>
                                                        <span>Zip Code</span>
                                                        <span>93455</span>
                                                    </li>
                                                    <li>
                                                        <span>State</span>
                                                        <span>California</span>
                                                    </li>
                                                    <li>
                                                        <span>Country</span>
                                                        <span>UAS</span>
                                                    </li>
                                                    <li>
                                                        <span>Phone</span>
                                                        <span>408-768-0251</span>
                                                    </li>
                                                    <li>
                                                        <span>Email</span>
                                                        <span>c35ltox58p@gmail.com</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="table-responsive">
                                      <Table className="table table-hover text-right" responsive>
                                            <thead>
                                              <tr>
                                                <th className="text-center">#</th>
                                                <th className="text-left">Images</th>
                                                <th className="text-left">Product Name</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-center">Unit rate</th>
                                                <th className="text-right">Total</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="text-center">01</td>
                                                <td className="text-left"><div className="product-img"><img src="assets/images/product/product-1.jpg" className="img-fluid" alt="product-img" /></div></td>
                                                <td className="text-left">JaipurCrafts Decorative Premium 5 Inch Wooden Hookah (Brown)</td>
                                                <td className="text-center">4</td>
                                                <td className="text-center">$95</td>
                                                <td>$380</td>
                                              </tr>
                                              <tr>
                                                <td className="text-center">02</td>
                                                <td className="text-left"><div className="product-img"><img src="assets/images/product/product-2.jpg" className="img-fluid" alt="product-img" /></div></td>
                                                <td className="text-left">Basement Bazaar Cheeku 13 Inch Glass Hookah (Black)</td>
                                                <td className="text-center">2</td>
                                                <td className="text-center">$235</td>
                                                <td>$470</td>
                                              </tr>
                                              <tr>
                                                <td className="text-center">03</td>
                                                <td className="text-left"><div className="product-img"><img src="assets/images/product/product-3.jpg" className="img-fluid" alt="product-img" /></div></td>
                                                <td className="text-left">Kingtons Copper Outside Fitting Hookah Mouth Tip (Multicolor)</td>
                                                <td className="text-center">5</td>
                                                <td className="text-center">$75</td>
                                                <td>$375</td>
                                              </tr>
                                              <tr>
                                                <td className="text-center">04</td>
                                                <td className="text-left"><div className="product-img"><img src="assets/images/product/product-8.jpg" className="img-fluid" alt="product-img" /></div></td>
                                                <td className="text-left">Basement Bazaar Karun 12 Inch Glass Hookah (Grey)</td>
                                                <td className="text-center">3</td>
                                                <td className="text-center">$80</td>
                                                <td>$240</td>
                                              </tr>
                                            </tbody>
                                      </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default OrderDetail;