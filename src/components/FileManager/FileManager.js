import React from 'react';
import './FileManager.css';
import { Row, Col, CardBody, Breadcrumb, BreadcrumbItem,Table} from 'reactstrap';
import { Link } from 'react-router-dom';
class FileManager extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> File Manager</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><Link to="#">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active> File Manager  </BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={12} className="mb-30">
                        <div className="card-statistics h-100 card file-manager">
                            <CardBody>
                                <Row className="mb-2 mb-md-4">
                                    <div className="col-xl-6 offset-xl-6">
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
                                    </div>
                                </Row>
                                <div className="table-responsive">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Member</th>
                                                <th>Date</th>
                                                <th>Size</th>
                                                <th className="text-right">Edit &nbsp; Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="file-icon">
                                                    <div className="icon"><i className="fa fa-file-excel-o"></i></div>
                                                </td>
                                                <td className="name">Webmin_demo</td>
                                                <td className="type">.xlsx</td>
                                                <td className="member">
                                                    <div className="member-img">
                                                        <img src="assets/images/team/01.jpg" className="img-fluid" alt="user-img" />
                                                    </div>
                                                    <span>Adrian Demiandro</span>
                                                </td>
                                                <td className="date">19-10-2018</td>
                                                <td className="size">288.8 kb</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="file-icon">
                                                    <div className="icon"><i className="fa fa-file-archive-o"></i></div>
                                                </td>
                                                <td className="name">Webmin_demo</td>
                                                <td className="type">.zip</td>
                                                <td className="member">
                                                    <div className="member-img">
                                                        <img src="assets/images/team/02.jpg" className="img-fluid" alt="user-img" />
                                                    </div>
                                                    <span>Jenny Smithdro</span>
                                                </td>
                                                <td className="date">25-10-2018</td>
                                                <td className="size">208.8 kb</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="file-icon">
                                                    <div className="icon"><i className="fa fa-html5"></i></div>
                                                </td>
                                                <td className="name">Webmin_demo</td>
                                                <td className="type">.html</td>
                                                <td className="member">
                                                    <div className="member-img">
                                                        <img src="assets/images/team/03.jpg" className="img-fluid" alt="user-img" />
                                                    </div>
                                                    <span>Brian Joedro</span>
                                                </td>
                                                <td className="date">26-10-2018</td>
                                                <td className="size">28.8 kb</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary" id="edit"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger" id="delete"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="file-icon">
                                                    <div className="icon"><i className="fa fa-folder-o"></i></div>
                                                </td>
                                                <td className="name">Webmin_demo</td>
                                                <td className="type"> - </td>
                                                <td className="member">
                                                    <div className="member-img">
                                                        <img src="assets/images/team/04.jpg" className="img-fluid" alt="user-img" />
                                                    </div>
                                                    <span>Andrew dro</span>
                                                </td>
                                                <td className="date">30-10-2018</td>
                                                <td className="size">400.0 kb</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary" id="edit"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger" id="delete"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="file-icon">
                                                    <div className="icon"><i className="fa fa-css3"></i></div>
                                                </td>
                                                <td className="name">Webmin_demo</td>
                                                <td className="type">.css</td>
                                                <td className="member">
                                                    <div className="member-img">
                                                        <img src="assets/images/team/05.jpg" className="img-fluid" alt="user-img" />
                                                    </div>
                                                    <span>Garettnice</span>
                                                </td>
                                                <td className="date">09-11-2018</td>
                                                <td className="size">28.8 kb</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary" id="edit"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger" id="delete"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="file-icon">
                                                    <div className="icon"><i className="fa fa-file-code-o"></i></div>
                                                </td>
                                                <td className="name">Webmin_demo</td>
                                                <td className="type">.php</td>
                                                <td className="member">
                                                    <div className="member-img">
                                                        <img src="assets/images/team/06.jpg" className="img-fluid" alt="user-img" />
                                                    </div>
                                                    <span>Adriannyt</span>
                                                </td>
                                                <td className="date">19-01-2019</td>
                                                <td className="size">28.8 kb</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary" id="edit"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger" id="delete"><i className="ti ti-trash"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="file-icon">
                                                    <div className="icon"><i className="fa fa-file-word-o"></i></div>
                                                </td>
                                                <td className="name">Webmin_demo</td>
                                                <td className="type">.docx</td>
                                                <td className="member">
                                                    <div className="member-img">
                                                        <img src="assets/images/team/07.jpg" className="img-fluid" alt="user-img" />
                                                    </div>
                                                    <span>Michaelbrt</span>
                                                </td>
                                                <td className="date">28-02-2019</td>
                                                <td className="size">28.8 kb</td>
                                                <td className="edit">
                                                    <Link to="#" className="button button-border btn btn-secondary" id="edit"><i className="ti ti-pencil-alt"></i></Link>
                                                    <Link to="#" className="button button-border btn btn-danger" id="delete"><i className="ti ti-trash"></i></Link>
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
export default FileManager;