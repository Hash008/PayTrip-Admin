import React from 'react';
import './Product.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Input,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import countriesList from  './Product.json'
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }
    renderproduct = product => {
        const { search } = this.state;
    
        if( search !== "" && product.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }
    
        return (
          <Col md={6} xl={4} className="mb-30" key={product.id}>
            <Card className="card-statistics h-100">
                <CardBody>
                    <div className="product-item">
                        <div className="product-img">
                            <img src={product.image} className="img-fluid" alt="product-img" />
                        </div>
                        <div className="product-content">
                            <h5><Link to="/product-detail" >{product.name}</Link></h5>
                            <p className="description">{product.description}</p>
                            <div className="details">
                                <p><b>Size :-</b> {product.size}</p>
                                <p><b>Price :-</b><ins>{product.Price}</ins></p>
                                <p><b>Quantity :-</b> {product.Quantity}</p>
                                <p><b>Category :- </b> <Link to="#">{product.Category}</Link></p>
                            </div>
                        </div>
                        <div className="edit">
                            <Link to="#" className="button button-border btn btn-secondary"><i className="ti ti-pencil-alt"></i></Link>
                            <Link to="#" className="button button-border btn btn-danger"><i className="ti ti-trash"></i></Link>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </Col>
            
        );
      };
    onchange = e => {
        this.setState({ search: e.target.value });
      };
    render() {
        const { search } = this.state;
        const filteredProducts = countriesList.filter(product => {
          return product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Product</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><Link to="#">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Product</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <div className="product">
                    <Row>
                        <Col>
                            <div className="search-wrapper">
                              <div className="form-group">                                
                                <Input
                                placeholder="Search Product..."
                                icon="search"
                                id="search"
                                onChange={this.onchange}
                                className="form-control"
                                />
                                <label htmlFor="search"><i className="fa fa-search"></i></label>
                              </div> 
                            </div> 
                        </Col>
                    </Row>
                <br/>
                    <Row>
                        {filteredProducts.map(product => {
                            return this.renderproduct(product);
                        })}
                    </Row>
                    {filteredProducts.length !== 0 ? 
                    <Row>
                        <Col md={12} className="mb-30">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                <span className="page-link"><i className="ti ti-angle-double-left"></i></span>
                                </li>
                                <li className="page-item active" aria-current="page">
                                <span className="page-link">
                                    1
                                    <span className="sr-only">(current)</span>
                                </span>
                                </li>
                                <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                                <li className="page-item">
                                <a className="page-link" href="javascript:void(0)"><i className="ti ti-angle-double-right"></i></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    : <p className="mb-30 text-center"><b>No Product Found</b></p>  }
                 </div>
            </div>
        );
    }
}
export default Product;