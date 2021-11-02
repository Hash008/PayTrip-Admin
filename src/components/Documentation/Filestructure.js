import React from 'react';
import './Documentation.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
class Filestructure extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> File Structure</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>File Structure</BreadcrumbItem>
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
                                    <h3 className="doc-sec-title"> <span className="doc-sec-count">File Structure</span></h3><hr/>
                                    <div className="doc-sec-content mb-20">
                                        <p>Below is a list of the file structure in a react app.</p>
                                        <p>Webmin React file structure in the <code>webmin-react</code> folder.</p>
                                    </div>
                                    <div className="doc-sec-content">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Path</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><code>-src </code></td>
                                                    <td>Main source folder.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>-assets</code></td>
                                                    <td>Application assets such as a custom css , js , images , scss.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--css</code></td>
                                                    <td>Compiled custom css files.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--image</code></td>
                                                    <td>Images used for the application<span>.</span></td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--js</code></td>
                                                    <td>Third parties javascript files.</td>
                                                </tr>
                                                <tr>
                                                    <td><code><code>&nbsp;--scss</code></code><code></code></td>
                                                    <td>Module wise scss files.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>-components</code></td>
                                                    <td>All components source folder.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--authentication</code></td>
                                                    <td>Authentication is used for authentic the users.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>-login</code></td>
                                                    <td>Login module Implement with firebase.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>-registration</code></td>
                                                    <td>Registration module implement with firebase.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--calendar</code></td>
                                                    <td>Calendar module is used for full page calendar.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--chart</code></td>
                                                    <td>Chart module is used for differenttype of chart.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--chat</code></td>
                                                    <td>Chat module for a chat with the users.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--custompages</code></td>
                                                    <td>Custom pages contain multiple pages like Blank page, Contact us, Error, Faq and Invoice page.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--dashboard</code></td>
                                                    <td>Dashboard of an application.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--elements</code></td>
                                                    <td>UI kit elements for entire the application.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--firebase</code></td>
                                                    <td>Firebase is used for the configuration web application with firebase project.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--fonticon</code></td>
                                                    <td>Font icon folder containsfont awesome icons.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--forms</code></td>
                                                    <td>Forms module such as Form Elements, Form Group, Form Validation etc.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--layout</code></td>
                                                    <td>Layoutfolder is used to set the layout of an application.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--mailbox</code></td>
                                                    <td>Mailbox design module used for mailing application.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--maps</code></td>
                                                    <td>Maps module use for display full-page map.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--tables</code></td>
                                                    <td>Used for a basic table and data table are used.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--widgets</code></td>
                                                    <td>Different types of data widgets module for the application.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--app.css</code></td>
                                                    <td>Main application stylesheet file.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--app.js</code></td>
                                                    <td>Main application jsFile</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--index.html</code></td>
                                                    <td>The index.html lives at the root of the front-end structure.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--index.js</code></td>
                                                    <td>Whenever an application is run, First index.js file is a load.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--router.js</code></td>
                                                    <td>Base routing for the application.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--validation.js</code></td>
                                                    <td>Application in used all validation load into this file.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>&nbsp;--vendor.js</code></td>
                                                    <td>Application in all CSS and JS load into this file.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>package.json</code></td>
                                                    <td>A package.json file contains metadata about app or module. Most importantly, it includes the list of dependencies.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>webpack.config.js</code></td>
                                                    <td><span><a href="https://webpack.js.org/">Webpack</a></span>is a module bundle which takes modules with dependencies and generates static assets by bundling them together based on configuration.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>webpack.dev.js</code></td>
                                                    <td>This file is used for development purpose and will run when the modification is going to be done on localhost.</td>
                                                </tr>
                                                <tr>
                                                    <td><code>webpack.prod.js</code></td>
                                                    <td>This file is used for production purpose when the build command is fired to run the file on server.</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
export default Filestructure;