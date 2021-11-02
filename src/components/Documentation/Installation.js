import React from 'react';
import './Documentation.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
class installation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Installation</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Installation</BreadcrumbItem>
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
                                    <h3 className="doc-sec-title"><span className="doc-sec-count">Installation</span></h3><hr/>
                                    <div className="doc-sec-content">
                                        <p>This section guides you to install all required software and libraries to utilize webmin  for your projects fully.</p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title"><span className="doc-sec-count">Node</span></h3>
                                    <hr/>
                                    <div className="doc-sec-content">
                                        <p>Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js is required to build the Webmin React. Download the latest version of Node and install it: <a href="http://nodejs.org/en/download/" className="theme-color">Download Nodejs</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title"><span className="doc-sec-count">NPM</span></h3>
                                    <hr/>
                                    <div className="doc-sec-content">
                                        <p>Npm is the package manager for JavaScript and the world’s largest software registry. Npm is a separate project from Node.js and tends to update more frequently. As a result, even if you’ve just downloaded <a href="https://nodejs.org/en/download/" className="theme-color"> Node.js </a> (and therefore npm), you’ll probably need to update your npm.</p>
                                        <p><code> npm install --global npm@latest</code></p>
                                        <p>Verify that npm in successfully installed, and version of installed npm will appear</p>
                                        <p><code> npm --version</code></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title"><span className="doc-sec-count">React</span></h3>
                                    <hr/>
                                    <div className="doc-sec-content mb-30">
                                        <h5>Installation</h5>
                                        <p>1. First, unzip the zip file that you have download from ThemeForest. You will find a webmin-react project and readme file.</p>
                                        
                                        <p>2. Then after Extract zip File (webmin-react.zip) into a folder, you have to work within.</p>
                                        <p>3. Open a Node Prompt. Go to your Working Folder, And run the Following Command and wait for finish installation.</p>
                                        <p><code> npm install</code></p>
                                        <p>4. This command will install all the required node module into <code> node_module/ </code> inside your working folder.</p>
                                        <p>5. You are ready to run the react-webmin application for the first time</p>
                                    </div>
                                    <div className="doc-sec-content mb-30">
                                        <h5>Working With React-Webmin</h5>
                                        <p>While still your working folder And run the following command</p>
                                        <p><code>npm start</code></p>
                                    </div>
                                    <div className="doc-sec-content mb-30">
                                        <h5>Production</h5>
                                        <p>While still your working folder And run the following command</p>
                                        <p>Before the production you must be changes in to the following files.</p>
                                        <p>Package.json and webpack.prod.js</p>
                                    </div>
                                    <div className="doc-sec-content mb-30">
                                        <h6>1. Package.json :-</h6>
                                        <p>In this file reaplce homepage attribute in server url.see below</p>
                                        <p><img src="assets/images/document/Screenshot_1.png" alt="" class="img-fluid" /></p>
                                    </div>
                                    <div className="doc-sec-content mb-30">
                                        <h6>2. webpack.prod.js :-</h6>
                                        <p>in this file add your server URL in pubilcPath attribute of output attribute. see below.</p>
                                        <p><img src="assets/images/document/Screenshot_2.png" alt="" class="img-fluid" /></p>
                                    </div>
                                    <div className="doc-sec-content mb-30">
                                        <p>Then after open node command prompt and go to the project directory. Type following command</p>
                                        <p><code>npm run build</code></p>
                                        <p>Now, Build is Completed and dist folder is created in your project.</p>
                                        <p>Open dist folder and change in the index.html file.</p>
                                        <p>in a base tag in href attribute and link tag in href attribute both in set your server path. see below.</p>
                                        <p><img src="assets/images/document/Screenshot_3.png" alt="" class="img-fluid" /></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title"><span className="doc-sec-count">Firebase</span></h3>
                                    <hr/>
                                    <div className="doc-sec-content">
                                        <p>Go to below link: <a href="https://firebase.google.com/" className="theme-color">https://firebase.google.com/</a></p>
                                        <p>Click On Sign In Link and Sign In with Google Account.</p>
                                        <p>Then after performing the below step.</p>
                                        <p>1. click on “<code> Go to console </code>”  display on the right side on firebase account.</p>
                                        <p>2. Then after Click on add Project.</p>
                                        <p>3. After Display popup menu, Enter Project name, Select Country  And Click on Terms and condition Checkbox.Click on Create Project Button.</p>
                                        <p>4. Now, Display The Firebase Admin panel.</p>
                                        <p>5. In Left Panel, Click on Develop option. Now Click on authentication link.</p>
                                        <p>6. Click on the “Web Setup” button.</p>
                                        <p>7. Now, copy the configuration and change in react-webmin project in ‘src/components/Firebase/firebase.js’.</p>
                                        <p>8. Now go to sign-in Method tab.Enable Email/Password and Anonymous in sign-in providers.</p>
                                        <p>9. Now, Click on database link from left Panel.</p>
                                        <p>10. Click on the create a database button.</p>
                                        <p>11. Display Popup in Select “<code> start in locked mode </code>” and Click on <code> Enable </code> Button.</p>
                                        <p>12. Now, select real-time Database.</p>
                                        <p>13. Click on rules tab. change the <code> read and write </code> rules from <code> false </code> to <code> true. </code></p>
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
export default installation;