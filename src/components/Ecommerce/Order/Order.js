import React from 'react';
import './Order.css';
import { Row, Col, CardBody, Breadcrumb, BreadcrumbItem,Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class Order extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $("#Checkall").click(function() {
            $('input:checkbox').not(this).prop('checked', this.checked);
        });
      }
    
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Order</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><Link to="#">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Order</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col xl={12} className="mb-30">
                        <div className="card-statistics h-100 card order">
                            <CardBody>
                                <Row>
                                    <Col xl={6} className="offset-xl-6 mb-30">
                                        <ul className="file-list">
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
                                    </Col>
                                </Row>
                                <div className="table-responsive">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Checkall" />
                                                        <label htmlFor="Checkall">All</label>
                                                    </div>
                                                </th>
                                                <th>Order Id</th>
                                                <th>Order Status</th>
                                                <th>Payment Method</th>
                                                <th>Payment Status</th>
                                                <th>Date</th>
                                                <th>Total</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check1" />
                                                        <label htmlFor="Check1">Adrian Demiandro</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000001 </span>
                                                </td>
                                                <td>Pending</td>
                                                <td>Google Pay</td>
                                                <td><span className="label-warning">Unpaid</span></td>
                                                <td>21/01/2019</td>
                                                <td>$ 400.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>

                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" name="order[]" value="" id="Check2" />
                                                        <label htmlFor="Check2">Jenny Smithdro</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000002 </span>
                                                </td>
                                                <td>On Hold</td>
                                                <td>PayPal</td>
                                                <td><span className="label-danger">Failed</span></td>
                                                <td>22/01/2019</td>
                                                <td>$ 500.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check3" />
                                                        <label htmlFor="Check3">Brian Joedro</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000003 </span>
                                                </td>
                                                <td>Closed</td>
                                                <td>COD</td>
                                                <td><span className="label-success">Paid</span></td>
                                                <td>23/01/2019</td>
                                                <td>$ 375.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check4" />
                                                        <label htmlFor="Check4">Sandradro Garett</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000004 </span>
                                                </td>
                                                <td>Closed</td>
                                                <td>Paytm</td>
                                                <td><span className="label-success">Paid</span></td>
                                                <td>24/01/2019</td>
                                                <td>$ 325.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check5" />
                                                        <label htmlFor="Check5">Garydro</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000005 </span>
                                                </td>
                                                <td>On Hold</td>
                                                <td>Google Pay</td>
                                                <td><span className="label-warning">Unpaid</span></td>
                                                <td>25/01/2019</td>
                                                <td>$ 450.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check6" />
                                                        <label htmlFor="Check6">Andrew dro</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000007 </span>
                                                </td>
                                                <td>Closed</td>
                                                <td>Bank Transfers</td>
                                                <td><span className="label-success">Paid</span></td>
                                                <td>27/01/2019</td>
                                                <td>$ 800.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check7" />
                                                        <label htmlFor="Check7">Garettnice</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000010 </span>
                                                </td>
                                                <td>Pending</td>
                                                <td>Google Pay</td>
                                                <td><span className="label-warning">Unpaid</span></td>
                                                <td>30/01/2019</td>
                                                <td>$ 400.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check8" />
                                                        <label htmlFor="Check8">Adriannyt</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000015 </span>
                                                </td>
                                                <td>On Hold</td>
                                                <td>PayPal</td>
                                                <td><span className="label-danger">Failed</span></td>
                                                <td>02/02/2019</td>
                                                <td>$ 500.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check9" />
                                                        <label htmlFor="Check9">Michaelbrt</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000016 </span>
                                                </td>
                                                <td>Closed</td>
                                                <td>COD</td>
                                                <td><span className="label-success">Paid</span></td>
                                                <td>05/02/2019</td>
                                                <td>$ 375.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check10" />
                                                        <label htmlFor="Check10">Andrewwer</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000017 </span>
                                                </td>
                                                <td>Closed</td>
                                                <td>Paytm</td>
                                                <td><span className="label-success">Paid</span></td>
                                                <td>08/02/2019</td>
                                                <td>$ 325.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check11" />
                                                        <label htmlFor="Check11">Braincdt</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000018 </span>
                                                </td>
                                                <td>On Hold</td>
                                                <td>Google Pay</td>
                                                <td><span className="label-warning">Unpaid</span></td>
                                                <td>11/02/2019</td>
                                                <td>$ 450.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="remember-checkbox">
                                                        <input className="form-control" type="checkbox" value="" id="Check12" />
                                                        <label htmlFor="Check12">Sandrapot</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span> #000019 </span>
                                                </td>
                                                <td>Closed</td>
                                                <td>Bank Transfers</td>
                                                <td><span className="label-success">Paid</span></td>
                                                <td>20/02/2019</td>
                                                <td>$ 800.00</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>     
                                </div>                 
                            </CardBody>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Order;