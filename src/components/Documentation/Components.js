import React from 'react';
import './Documentation.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class Components extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
    return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Components</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Components</BreadcrumbItem>
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
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Components</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <p>Webmin comes with different types of useful components. This section will explain to you how to use them in your application.</p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Accordion</span><hr/>
                                    </h3>
                                    
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the accordion component is to show content driven data in a toggle form.</p>
                                        <p>Display accordion in this URL:<a href="http://localhost:8080/accordion" className="theme-color"> http://localhost:8080/accordion</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to use an accordion component in your project, you need to follow below steps.</p>
                                        <p>1. install react accessible accordion.</p>
                                        <code>npm install --save react-accessible-accordion</code>
                                        <p className="mb-10">2. Open the JS in which you want to add accordion.</p>
                                        <p className="mb-10">3. Import first <code> react accessible accordion </code> file in this page.</p>
                                        <code>import {'{'}  Accordion,AccordionItem, AccordionItemTitle,AccordionItemBody {'}'} from 'react-accessible-accordion';</code>
                                        <p className="mb-10 mt-10">4. Now, copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_5.png" alt="" class="img-fluid" /></p>
                                        <p className="mt-10">More different types of the accordion are available this URL :<a href="http://localhost:8080/accordion" className="theme-color"> http://localhost:8080/accordion</a></p>
                                    </div>
                                </div>  
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Alert</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the alert directive is to show an alert with various types</p>
                                        <p>It is available at given URL:<a href="http://localhost:8080/alerts" className="theme-color"> http://localhost:8080/alerts</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply an alert directive in your component, you need to follow below steps.</p>
                                        <p>1. install <code>reactstrap</code> using this command.</p>
                                        <code>npm install --save reactstrap</code>
                                        <p>2. First Create Folder for an alert with two file .js and .css. Now Open the .js file.</p>
                                        <p>3. Import<code> reactstrap</code> in .js file.</p>
                                        <code>import {'{'} Alert {'}'} from 'reactstrap';</code>
                                        <p>4. Now use below code.</p>
                                        <p><img src="assets/images/document/Screenshot_6.png" alt="" class="img-fluid" /></p>
                                        <p>More different types of styles are available for alert.</p>
                                        <p>please check given link:<a href="http://localhost:8080/alerts" className="theme-color" >http://localhost:8080/alerts</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Button</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the button directive is to show a button with various types</p>
                                        <p>It is available at given URL:<a href="http://localhost:8080/buttons" className="theme-color"> http://localhost:8080/buttons </a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply a button directive in your component, you need to follow below steps.</p>
                                        <p>1. Open The js file which you want to add Button.</p>
                                        <p>2. Import first reactstrapfile in this page.</p>
                                        <code>import {'{'} Row, Col,  Button, ButtonGroup, ButtonToolbar,ButtonDropdown,DropdownToggle ,DropdownMenu,DropdownItem,Card,CardBody,CardTitle,Breadcrumb,BreadcrumbItem  {'}'} from 'reactstrap';</code>
                                        <p>3. Now, copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_7.png" alt="" class="img-fluid" /></p>
                                        <p>More different types of styles are available for the button.</p>
                                        <p>please check  the link<a href="http://localhost:8080/buttons" className="theme-color"> http://localhost:8080/buttons</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Calendar</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the Calendar directive is to show Full calendar on a page.</p>
                                        <p>It is available at given URL:<a href="http://localhost:8080/eventcalendar" className="theme-color"> http://localhost:8080/eventcalendar</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply Calendar directive in your component, you need to follow below steps.</p>
                                        <p>1 First, install react big calendar using below command</p>
                                        <code>npm install --save react-big-calender</code>
                                        <p>2. Open the JS in which you want to add Calender.</p>
                                        <code>import {'{'} Row, Col,  Button, ButtonGroup, ButtonToolbar,ButtonDropdown,DropdownToggle ,DropdownMenu,DropdownItem,Card,CardBody,CardTitle,Breadcrumb,BreadcrumbItem  {'}'} from 'reactstrap';</code>
                                        <p>3. Import <code>react-big-calender</code> in Calendar file</p>
                                        <code>
                                            import Calendar from "react-big-calendar";<br/>
                                            import moment from "moment";
                                        </code>
                                        <p>4. Now, Copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_8.png" alt="" class="img-fluid" /></p>
                                        <p>please check the link: <a href="http://localhost:8080/eventcalendar" className="theme-color">http://localhost:8080/eventcalendar</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Chat</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>If you want to integrate chat feature on your page, then Chat page is useful.</p>
                                        <p>It is available at given URL: <a href="http://localhost:8080/chat" className="theme-color">http://localhost:8080/chat</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply chat in your project, you need to follow below steps.</p>
                                        <p>1. install <code>react-scrollbar</code> and <code>reactstrap</code> using this command.</p>
                                        <code>
                                            npm install --save reactstrap<br/>
                                            npm install --save react-scrollbar
                                        </code>
                                        <p>2. Open the JS in which you want to add Chat.</p>
                                        <p>3.  Import in<code> react-scrollbar</code> and <code>reactstrap</code> in this file.</p>
                                        <code>
                                            import {'{'}Row,Col,NavItem,Nav,Tab,MenuItem,Dropdown,DropdownItem,DropdownMenu,DropdownToggle,TabContent,TabPane,Breadcrumb,BreadcrumbItem {'}'} from 'reactstrap';<br/>
                                            import ScrollArea  from 'react-scrollbar';
                                        </code>
                                        <p>4.Now, Copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_9.png" alt="" class="img-fluid" /></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Chart</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the chart directive is to place a chart on a page. We are providing you with various styles of that.</p>
                                        <p>It is available at given URL:<a href="http://localhost:8080/chartjs" className="theme-color"> http://localhost:8080/chartjs</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply chart in your component, you need to follow below steps.</p>
                                        <p>1. Install react<code>chartjs 2</code> using below command</p>
                                        <p><code>npm install --save reacrt-chartjs-2 chart.js</code></p>
                                        <p>2. Open the JS in which you want to add Chart.</p>
                                        <p>3. Import<code> reacrt-chartjs-2</code> in chart file</p>
                                        <p><code>import {'{'} Doughnut,Line,Bar,Radar,Pie,Polar{'}'} from 'react-chartjs-2';</code></p>
                                        <p>4. Now copy below code using pieChart.</p>
                                        <p><img src="assets/images/document/Screenshot_10.png" alt="" class="img-fluid" /></p>
                                        <p>There are some more styles available on our chart page.</p>
                                        <p><a href="http://localhost:8080/chartjs" className="theme-color">http://localhost:8080/chartjs</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Color Picker</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the color picker directive is to get color code values such as HEX, RGB etc.</p>
                                        <p>It is available at this URL:<a href="http://localhost:8080/colors" className="theme-color"> http://localhost:8080/colors</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply color picker directive in your component, you need to follow below steps.</p>
                                        <p>1. install using <code>react-color</code> this command.</p>
                                        <p><code>npm install --save react-color</code></p>
                                        <p>2. Open the JS in which you want to add Color.</p>
                                        <p>3. Import in <code>react-color </code>Color file.</p>
                                        <p><code>import {'{'} SketchPicker,PhotoshopPicker,ChromePicker,AlphaPicker,BlockPicker,TwitterPicker,SwatchesPicker,CirclePicker,SliderPicker,CompactPicker,GithubPicker,HuePicker {'}'} from 'react-color';</code></p>
                                        <p>4. Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_11.png" alt="" class="img-fluid" /></p>
                                        <p>More different types of styles are available for Color picker .</p>
                                        <p>please check given link:<a href="http://localhost:8080/colors" className="theme-color">http://localhost:8080/colors</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Data Table</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the Data table directive is to put data table on a page with different styles.</p>
                                        <p>It is available at givenURL:<a href="http://localhost:8080/datatable" className="theme-color"> http://localhost:8080/datatable</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply data table in your component, you need to follow below steps.</p>
                                        <p>1. First, install react bootstrap table using below command.</p>
                                        <p><code>npm install --save react-bootstrap-table</code></p>
                                        <p>2. Open the JS in which you want to add Data table.</p>
                                        <p>3. Import <code> react-bootstrap-table</code> in data table file.</p>
                                        <p><code>import {'{'} BootstrapTable, TableHeaderColumn {'}'} from 'react-bootstrap-table';</code></p>
                                        <p>4. Now, copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_12.png" alt="" class="img-fluid" /></p>
                                        <p><a href="http://localhost:8080/datatable" className="theme-color">http://localhost:8080/datatable</a></p>
                                    </div>
                                </div>
                                 <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Date picker</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the date picker component is to show date picker on an input tag.</p>
                                        <p>It is available at givenURL:<a href="http://localhost:8080/datepicker" className="theme-color"> http://localhost:8080/datepicker</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply date picker component in your project, you need to follow below steps.</p>
                                        <p>1. First, install react date picker using below command.</p>
                                        <p><code>npm install --save react-datepicker</code></p>
                                        <p>2. Open the JS in which you want to add a date picker.</p>
                                        <p>3. Import <code>react-datepicker</code> in datepicker file.</p>
                                        <p><code>import DatePicker from 'react-datepicker';</code></p>
                                        <p>4.  Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_13.png" alt="" class="img-fluid" /></p>
                                        <p>More different types of styles are available for Date picker.</p>
                                        <p>please check given link:<a href="http://localhost:8080/datepicker" className="theme-color">http://localhost:8080/datepicker</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Dropdown</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the dropdown component is to show the actions links.</p>
                                        <p>It is available at given URL:<a href="http://localhost:8080/dropdown" className="theme-color"> http://localhost:8080/dropdown</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply dropdown component in your project, you need to follow below steps.</p>
                                        <p>1. Open the JS in which you want to add Dropdown.</p>
                                        <p>2. Import<code> reactstrap </code>in drop-down file.</p>
                                        <p><code>import {'{'} Row,Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Card,CardBody,CardTitle,Breadcrumb,BreadcrumbItem {'}'} from 'reactstrap';</code></p>
                                        <p>3.  Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_14.png" alt="" class="img-fluid" /></p>
                                        <p>More different types of styles are available for the dropdown.</p>
                                        <p>please check  the link:<a href="http://localhost:8080/dropdown" className="theme-color">http://localhost:8080/dropdown</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Form Validation</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>Form Validation is used to perform various types of validation on a page. You can find out all these types of validation in this</p>
                                        <p>URL:<a href="http://localhost:8080/formvalidation" className="theme-color"> http://localhost:8080/formvalidation</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply form validation in your component, you need to follow below steps.</p>
                                        <p>1. First, install react validation  using below command.</p>
                                        <p><code>npm install --save validator</code></p>
                                        <p>2. Open the JS in which you want to add Form Validation.</p>
                                        <p>3. Import <code>react-validation </code>in Form validation file.</p>
                                        <p><img src="assets/images/document/Screenshot_15.png" alt="" class="img-fluid" /></p>
                                        <p>4. Now, copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_16.png" alt="" class="img-fluid" /></p>
                                        <p>There are some more validations available on our page.</p>
                                        <p><a href="http://localhost:8080/formvalidation" className="theme-color">http://localhost:8080/formvalidation</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Maps</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the map directive is to show a map on a page. We are providing you with various styles of that.</p>
                                        <p>Display maps in this URL:<a href="http://localhost:8080/formvalidation" className="theme-color"> http://localhost:8080/formvalidation</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply map  in your component, you need to follow below steps.</p>
                                        <p>1. First install<code> react simple maps</code> using below command.</p>
                                        <p><code>npm install --save react-simple-maps</code></p>
                                        <p>2. Open the JS in which you want to add maps.</p>
                                        <p>3. Import<code> react-simple-maps </code>in chart file.</p>
                                        <p><img src="assets/images/document/Screenshot_17.png" alt="" class="img-fluid" /></p>
                                        <p>4. Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_18.png" alt="" class="img-fluid" /></p>
                                        <p><a href="http://localhost:8080/maps" className="theme-color">http://localhost:8080/maps</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Modal</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the Modal directive is to open the modal popup. we are providing you with various styles of that. </p>
                                        <p>It is available at given URL:<a href="http://localhost:8080/modal" className="theme-color"> http://localhost:8080/modal</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply modal in your component, you need to follow below steps.</p>
                                        <p>1. Open the JS in which you want to add Modal.</p>
                                        <p>2. Import<code> reactstrap </code>in Modal file</p>
                                        <p><code>import {'{'} Button, Row, Col,Modal, ModalHeader, ModalBody,Card,CardBody,CardTitle, ModalFooter {'}'} from 'reactstrap';</code></p>
                                        <p>3.  Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_19.png" alt="" class="img-fluid" /></p>
                                        <p>There are some more styles available on the modal page.</p>
                                        <p><a href="http://localhost:8080/modal" className="theme-color">http://localhost:8080/modal</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Popover Tooltips</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the Popover and Tooltip directive is to show Popover message on a page.</p>
                                        <p>It is available at given URL:<a href="http://localhost:8080/popover_tooltips" className="theme-color"> http://localhost:8080/popover_tooltips</a></p>
                                        <h5>How to use</h5>
                                        <p><b>>>  Add Popover</b></p>
                                        <p>Now, if you want to apply popover directive in your component, you need to follow below steps.</p>
                                        <p>1. Open the JS in which you want to add popover.</p>
                                        <p>2. Import reactstrap in<code> popover</code> file.</p>
                                        <p><code>import {'{'} Card,CardBody,CardTitle,PopoverHeader,PopoverBody,Button,Popover {'}'} from 'reactstrap';</code></p>
                                        <p>3. Now, Copy below code for Popover.</p>
                                        <p><img src="assets/images/document/Screenshot_20.png" alt="" class="img-fluid" /></p>
                                        <p><b>>> Add Tooltip </b></p>
                                        <p>Now, if you want to apply tooltip directive in your component, you need to follow below steps.</p>
                                        <p>1. Open the JS in which you want to add tooltip.</p>
                                        <p>2. Import <code>reactstrap</code> in tooltip file.</p>
                                        <p><code>import {'{'} Tooltip,Card,CardBody,CardTitle {'}'} from 'reactstrap';</code></p>
                                        <p>3. Now, Copy below code for Tooltip.</p>
                                        <p><img src="assets/images/document/Screenshot_21.png" alt="" class="img-fluid" /></p>
                                        <p>More different types of styles are available for the popover and tooltip.</p>
                                        <p>please check the link: <a href="http://localhost:8080/popover_tooltips" className="theme-color">http://localhost:8080/popover_tooltips</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Progress</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the Progress directive is to show progress on a page. we are providing you with various styles of that.</p>
                                        <p>It is available at givenURL:<a href="http://localhost:8080/progess" className="theme-color"> http://localhost:8080/progess</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply progress in your component, you need to follow below steps.</p>
                                        <p>1. Open the JS in which you want to add a progress bar.</p>
                                        <p>2. Import reactstrap in Progress bar file.</p>
                                        <p><code>import {'{'} Row, Col,Progress,Card,CardBody,CardTitle,BreadcrumbItem,Breadcrumb {'}'} from 'reactstrap';</code></p>
                                        <p>3.  Now, copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_22.png" alt="" class="img-fluid" /></p>
                                        <p>There are some more styles available on the progress page.</p>
                                        <p><a href="http://localhost:8080/progess" className="theme-color">http://localhost:8080/progess</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">RatingEdit</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the Rating directive is to rate control on a page and user can give a rating.</p>
                                        <p>It is available at givenURL :<a href="http://localhost:8080/ratings" className="theme-color"> http://localhost:8080/ratings</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply rating in your component, you need to follow below steps.</p>
                                        <p>1. First, install react rating using below command.</p>
                                        <p><code>npm install --save react-rating</code></p>
                                        <p>2. Open the JS in which you want to add Rating.</p>
                                        <p>3. Import<code> react-rating</code> in rating file.</p>
                                        <p><code>import Rating from 'react-rating';</code></p>
                                        <p>4. Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_23.png" alt="" class="img-fluid" /></p>
                                        <p>There are some more styles available on our rating page.</p>
                                        <p><a href="http://localhost:8080/ratings" className="theme-color">http://localhost:8080/ratings</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Switch</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the switch directive is to on/off the control. We are providing you with various styles of that.</p>
                                        <p>It is available at given URL : <a href="http://localhost:8080/switchs" className="theme-color"> http://localhost:8080/switchs</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to apply switch in your component, you need to follow below steps.</p>
                                        <p>1. First, install react switch using below command.</p>
                                        <p><code>npm install --save react-switch</code></p>
                                        <p>2. Open the JS in which you want to add Switch.</p>
                                        <p>3. Import<code> react-switch </code>file in this page.</p>
                                        <p><code>import Switch from "react-switch";</code></p>
                                        <p>4. Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_24.png" alt="" class="img-fluid" /></p>
                                        <p>There are some more styles available on our rating page.</p>
                                        <p><a href="http://localhost:8080/switchs" className="theme-color">http://localhost:8080/switchs</a></p>
                                    </div>
                                </div>
                                <div className="documentor-section mb-30">
                                    <h3 className="doc-sec-title">
                                        <span className="doc-sec-count">Tabs</span><hr/>
                                    </h3>
                                    <div className="doc-sec-content">
                                        <h5>Overview</h5>
                                        <p>The purpose of the tabs component is to show content driven data in a tabular form.</p>
                                        <p>It is available at given URL: <a href="http://localhost:8080/tabs" className="theme-color"> http://localhost:8080/tabs</a></p>
                                        <h5>How to use</h5>
                                        <p>Now, if you want to use tabs component in your project, you need to follow below steps.</p>
                                        <p>1. Open the JS in which you want to add tabs.</p>
                                        <p>2. Import<code> reactstrap</code> in tabs file</p>
                                        <p><code>import {'{'} TabContent, TabPane, Nav, NavItem, NavLink, Card, Button,CardBody, CardTitle,Breadcrumb,BreadcrumbItem, CardText, Row, Col {'}'} from 'reactstrap';</code></p>
                                        <p>3. Now copy below code.</p>
                                        <p><img src="assets/images/document/Screenshot_25.png" alt="" class="img-fluid" /></p>
                                        <p>More different types of styles are available for the tabs.</p>
                                        <p>4. Now copy below code.</p>
                                        <p>please check the link: <a href="http://localhost:8080/tabs" className="theme-color">http://localhost:8080/tabs</a></p>
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
export default Components;