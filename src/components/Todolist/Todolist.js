
import React from 'react';
import { Row, Col,ListGroup, Card, CardBody, CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Todolist.css';
class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      item:[
        {text: "Making the decision", desc: "I truly believe Augustine’s words are true and if you look at history you know it is true. There are many people in the world with amazing talents who realize only a small percentage of their potential.", key: 1},
        {text: "Clarity – developing the Vision", desc: "We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates.", key: 2},
        {text: "Focus – having a plan", desc: "We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.", key: 3},
        {text: "Taking action – practice Ready, Fire, Aim…", desc: "Motivation is not an accident or something that someone else can give you — you are the only one with the power to motivate you.", key: 4},
        {text: "Making the decision", desc: "Making a decision to do something – this is the first step. We all know that nothing moves until someone makes a decision.", key: 5},
        {text: "Clarity – developing the Vision", desc: "So, make the decision to move forward. Commit your decision to paper, just to bring it into focus. Then, go for it!", key: 6},
        {text: "Focus – having a plan", desc: "Having clarity of purpose and a clear picture of what you desire, is probably the single most important factor in achievement.", key: 7},
        {text: "Taking action – practice Ready, Fire, Aim…", desc: "Without clarity, you send a very garbled message out to the Universe. We know that the Law of Attraction says", key: 8},
        ]
    }
    this.addItem = this.addItem.bind(this);
    
  }
  
  addItem(event){
    if(this._inputElement.value!==""){
        var newData={
            text:this._inputElement.value,
            desc:this._inputElementDesc.value,
            key:Date.now()
        };
        this.setState((prestate)=>{
            return {
                item :prestate.item.concat(newData)
            };
        });
    }
    this._inputElement.value="";
    this._inputElementDesc.value="";
    console.log(this.state.item);
    event.preventDefault();
  }
  removeTodo(index)
  {
    this.setState({
      item: this.state.item.filter((_, i) => i !== index)
    });
  }
  
  render(){
    console.log('items Here',this.state.item);
   return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0">To Do List</h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                <BreadcrumbItem><Link to="#">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>To Do List</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        {/* main body */}
        <Row>
          <Col md={4} xl={3}>
              <div id="app"></div>
                <Card className=" card-statistics mb-30">
                  <CardBody>
                    <CardTitle>Add Task</CardTitle>
                    <form ref="form" onSubmit={this.addItem} className="form-" className="form-group">
                        <label>Task Title</label>
                        <input ref={(a)=>this._inputElement=a} className="form-control mb-20">
                        </input>
                        <label>Task Description</label>
                        <textarea rows="4" ref={(b)=>this._inputElementDesc=b} className="form-control mb-20">
                        </textarea>
                        <button type="submit" className="button btn btn-secondary btn-xsmall">Add</button> 
                    </form>
                  </CardBody>
                </Card>
          </Col>
          {/*<TodoItem entries={this.state.item}/>*/}
          <Col md={8} xl={9} className="mb-30">
            <Card className="card-statistics h-100">
                <CardBody>
                    <CardTitle>To Do List </CardTitle>
                    <div className="scrollbar" tabIndex={2} style={{ overflowY: 'hidden', outline: 'none' }}>
                        <ListGroup className="list-unstyled to-do">
                            {/*listItems*/}
                            {this.state.item.map((item,index)=>(
                                <li key={item.key}><div className="remember-checkbox mb-20"><input type="checkbox" className="form-control" name={item.key} id={item.key} /><label htmlFor={item.key}><b>{item.text}</b> <p>{item.desc}</p></label>
                                <div className="close-icon">
                                  <span onClick={()=>this.removeTodo(index)} className="text-danger"><i className="fa fa-trash-o"></i> Delete</span>
                                </div></div></li>
                              ))}
                        </ListGroup>
                    </div>
                </CardBody>
            </Card>
        </Col>
        </Row>
        <div>         
        </div>  
      </div>
    )
  }
}
export default Todolist;
