import React from 'react';
import './NewProduct.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem, Row, Col,CardBody } from 'reactstrap';
import classnames from 'classnames';

class NewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.tabhorizontal = this.tabhorizontal.bind(this);
        this.state = {
            tabhorizontal: '1',
        };
    }
    tabhorizontal(tab) {
        if (this.state.tabhorizontal !== tab) {
            this.setState({
                tabhorizontal: tab
            });
        }
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> New Product</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>New Product</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col md={12}>
                        <div className="new-product">
                            <div className="card-statistics h-100 card mb-30">
                                <CardBody>
                                    <div className="tab tab-border">
                                        <Nav tabs>
                                            <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '1' })} onClick={() => { this.tabhorizontal('1'); }}>Product Details</NavLink></NavItem>
                                            <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '2' })} onClick={() => { this.tabhorizontal('2'); }}>Product Images</NavLink></NavItem>
                                            <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '3' })} onClick={() => { this.tabhorizontal('3'); }}>Product Price</NavLink></NavItem>
                                            <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '4' })} onClick={() => { this.tabhorizontal('4'); }}>Product Inventory</NavLink></NavItem>
                                            <NavItem><NavLink className={classnames({ active: this.state.tabhorizontal === '5' })} onClick={() => { this.tabhorizontal('5'); }}>Product Shipping</NavLink></NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.tabhorizontal} >
                                            <TabPane tabId="1">
                                                <div className="form-group">
                                                    <label className="" htmlFor="pname">Product Name</label>
                                                    <input type="text" className="form-control" id="pname" placeholder="Enter Your Product Name" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="pdescription">Product Description</label>
                                                    <textarea rows="3" className="form-control" id="pdescription" placeholder="Description" ></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="pcategory">Product Categories</label>
                                                    <input type="text" className="form-control" id="pcategory" placeholder="Select Multiple Categories" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="pname">Product Tags</label>
                                                    <input type="text" className="form-control" id="pname" placeholder="Select Multiple Tags" />
                                                </div>
                                                <div className="text-right">
                                                    <button className="button button-border gray icon btn btn-secondary btn-xsmall">Next<i className="fa fa-long-arrow-right"></i></button>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="2">
                                                <div className="form-group upload-file">
                                                    <label htmlFor="pfile"><img src="assets/images/upload-icon.svg" className="img-fluid" /></label>
                                                    <p>Upload Image</p>
                                                    <input type="file" className="form-control-file" id="pfile" placeholder="Select Multiple Tags" />
                                                </div>
                                                <div className="text-right">
                                                    <button className="button button-border gray icon btn btn-secondary btn-xsmall"><i className="fa fa-long-arrow-left"></i>Back</button>
                                                    <button className="button button-border gray icon btn btn-secondary btn-xsmall">Next<i className="fa fa-long-arrow-right"></i></button>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="3">
                                                <div className="form-group">
                                                    <label className="" htmlFor="pprice1">Product Tax Excluded Price </label>
                                                    <input type="number" className="form-control"  pattern="[0-9]*" placeholder="0" id="pprice1" />  
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="pprice2">Product Tax Included Price </label>
                                                    <input type="number" className="form-control" placeholder="0" id="pprice2"/>  
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="pprice3">Product Tax Rate </label>
                                                    <input type="number" className="form-control" placeholder="0" id="pprice3"  />  
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="pprice4">Product Compared Price </label>
                                                    <input type="number" className="form-control" placeholder="0" id="pprice4"  />  
                                                </div>
                                                <div className="text-right">
                                                    <button className="button button-border gray icon btn btn-secondary btn-xsmall"><i className="fa fa-long-arrow-left"></i>Back</button>
                                                    <button className="button button-border gray icon btn btn-secondary btn-xsmall">Next<i className="fa fa-long-arrow-right"></i></button>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="4" >
                                                <div className="form-group">
                                                    <label className="" htmlFor="psku">Product SKU </label>
                                                    <input type="text" className="form-control" id="psku" placeholder="Product SKU" />  
                                                </div>
                                                <div className="form-group">
                                                    <label className="" htmlFor="pquantity">Product Quantity</label>
                                                    <input type="number" className="form-control" id="pquantity" placeholder="Quantity" />  
                                                </div>
                                                <div className="text-right">
                                                    <button className="button button-border gray icon btn btn-secondary btn-xsmall"><i className="fa fa-long-arrow-left"></i>Back</button>
                                                    <button className="button button-border gray icon btn btn-secondary btn-xsmall">Next<i className="fa fa-long-arrow-right"></i></button>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="5" >
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label className="" htmlFor="psize">Product Width</label>
                                                            <input type="text" className="form-control" id="psize" placeholder="Size" />  
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label className="" htmlFor="pheight">Product Height </label>
                                                            <input type="text" className="form-control" id="pheight" placeholder="Height" />  
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label className="" htmlFor="pdepth">Product Depth</label>
                                                            <input type="text" className="form-control" id="pdepth" placeholder="Depth" />  
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label className="" htmlFor="pweight">Product Weight </label>
                                                            <input type="text" className="form-control" id="pweight" placeholder="Weight" />  
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label className="" htmlFor="pfee">Product Extra Shipping Fee </label>
                                                            <input type="text" className="form-control" id="pfee" placeholder="Extra Shipping Fee" />  
                                                        </div>
                                                    </Col>
                                                    <Col md={12}  className="text-right">
                                                        <button className="button button-border gray icon btn btn-secondary btn-xsmall"><i className="fa fa-long-arrow-left"></i>Back</button>
                                                        <button className="button button-border gray icon btn btn-secondary btn-xsmall"><i className="fa fa-save"></i> Save</button>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
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
export default NewProduct;