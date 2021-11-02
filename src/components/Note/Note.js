import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Note.css';
class Note extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      title: '',
      description: '',
      duedate: '',
      toDoList: [ {title: "Floor cool cinders", description: "Thunder fulfilled travellers folly, wading, lake.", duedate: "2019-11-08", toDoList: Array(0)},
                  {title: "Periods pride", description: "Accepted was mollis", duedate: "2019-10-23", toDoList: Array(1)},
                  {title: "Flags better burns pigeon", description: "Rowed cloven frolic thereby, vivamus pining gown intruding strangers prank treacherously darkling..", duedate: "2019-12-07", toDoList: Array(2)},
                  {title: "Accepted was mollis", description: "Rowed cloven frolic thereby, vivamus pining gown intruding strangers prank treacherously darkling.", duedate: "2019-11-09", toDoList: Array(3)},
                  {title: "Flags better burns pigeon", description: "Rowed cloven frolic thereby, vivamus pining gown intruding strangers prank treacherously darkling.", duedate: "2019-11-08", toDoList: Array(4)},
                  {title: "Accepted was mollis", description: "Rowed cloven frolic thereby, vivamus pining gown intruding strangers prank treacherously darkling.", duedate: "2019-10-23", toDoList: Array(5)},
                  {title: "Composed trays", description: "Hoary rattle exulting suspendisse elit paradises craft wistful. Bayonets allures prefer traits wrongs flushed. Tent wily matched bold polite slab coinage celerities gales beams...", duedate: "2019-12-07", toDoList: Array(6)},
                  {title: "Accepted was mollis", description: "Rowed cloven frolic thereby, vivamus pining gown intruding strangers prank treacherously darkling.", duedate: "2019-11-09", toDoList: Array(7)}]
  }
  }
  
  handleChange= (e)=> {
      this.setState({[e.target.name]:e.target.value});
  }
  handleFormSubmit(e) {
    
    e.preventDefault()
    if(this.state.title!=="" && this.state.description!=="" && this.state.duedate!==""){
      this.setState(prevState =>({
        toDoList: [...prevState.toDoList, this.state]
      }));
      this.setState({
        title: '',
        description: '',
        duedate: '',
      })
    }
  }
  removeTodo(index)
  {
    this.setState({
      toDoList: this.state.toDoList.filter((_, i) => i !== index)
    });
  }
  
  render() {
    console.log(this.state.toDoList)
    return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0"> Notes</h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                <BreadcrumbItem><a href="javascript:void(0);">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Notes</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        {/* main body */}
        <div>
        <div className="row">   
        <div className="col-xl-4 mb-30">     
          <div className="card card-statistics"> 
            <div className="card-body">
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <input type="date" name="duedate" className="form-control" value={this.state.duedate} onChange={this.handleChange} />
                </div>
                <button type="submit" className="button btn btn-secondary btn-xsmall">Add</button>
              </form>
            </div>
          </div>   
        </div>
        <div className="col-xl-8 mb-30">     
          <div className="card card-statistics h-100">
              <div className="card-body">
                  <div className="todo-lists single-line">
                      <div className="todo-list-wrapper">
                          <div className="todo-list todo-list-default">
                              <div className="todo-list-header">
                                  <div className="todo-list-title">Notes</div>
                              </div>
                              <div className="todo-list-body">
                                  <ul className="todo-list-items ui-sortable">
                                  {this.state.toDoList.map((itemdata,index)=>(
                                      <li className="todo-list-item">
                                          <div className="todo-list-item-title">{itemdata.title}</div>
                                          <div className="todo-list-item-description">{itemdata.description}</div>
                                          <div className="todo-list-item-duedate">{itemdata.duedate}</div>
                                          <div className="todo-actions">
                                              <div className="delete-todo todo-action"><a onClick={()=>this.removeTodo(index)}><i className="fa fa-times"></i></a></div>
                                          </div>
                                          
                                      </li>
                                       ))}
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>  
        </div>
      </div>
        </div>
      </div>

    )
  }
}
export default Note;