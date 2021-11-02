import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem,Modal, ModalHeader, ModalBody,ModalFooter,Button,CardBody} from 'reactstrap';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import './core_main.css';
import './daygrid_main.css';
import './timegrid_main.css';
import './Eventcalendar.css';

class Eventcalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      calendarEvents: [
        {
          title: "Wordcamps",
          start: new Date("2019-11-17 00:00"),
          id: "99999998"
        },
        {
          title: "Apple Event",
          start: new Date("2019-11-26 00:00"),
          id: "99999999"
        }
      ]
    };
    this.addevent = this.addevent.bind(this);
  }
  addevent() {
    this.setState({
        modal: !this.state.modal
    });
  }
  eventClick = eventClick => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };
    render() {
        return (
          <div>
            <div className="page-title">
                <Row>
                    <Col sm={6}>
                        <h4 className="mb-0"> Event Calendar</h4>
                    </Col>
                    <Col sm={6} >
                        <Breadcrumb className="float-left float-sm-right">
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Event Calendar</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>
            <div className="card-statistics card mb-30">
              <CardBody>
                <div className="animated fadeIn demo-app">
                  <Row>
                    <Col lg={12} sm={12} md={12}>
                      <div className="demo-app-calendar" id="mycalendartest">
                        <FullCalendar
                          defaultView="dayGridMonth"
                          header={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                          }}
                          rerenderDelay={10}
                          eventDurationEditable={false}
                          editable={true}
                          droppable={true}
                          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                          ref={this.calendarComponentRef}
                          weekends={this.state.calendarWeekends}
                          events={this.state.calendarEvents}
                          eventDrop={this.drop}
                          // drop={this.drop}
                          eventReceive={this.eventReceive}
                          eventClick={this.eventClick}
                          // selectable={true}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
              <div className="event-btn">
              <Button  onClick={this.addevent}>
                <i className="fa fa-plus"></i>
              </Button>
              <Modal isOpen={this.state.modal} toggle={this.addevent} className={this.props.className}>
                  <ModalHeader toggle={this.addevent}>Add Event
                </ModalHeader>
                  <ModalBody>
                      <div class="form-group">
                        <label for="event1">Event Name</label>
                        <input type="text" class="form-control" id="event1" placeholder="Your Event Name" />
                      </div>
                      <div class="form-group">
                        <label for="startdate">Start Date</label>
                        <input type="date" class="form-control" id="startdate" placeholder="Start date" />
                      </div>
                      <div class="form-group">
                        <label for="enddate">End Date</label>
                        <input type="date" class="form-control" id="enddate" placeholder="End Date" />
                      </div>
                  </ModalBody>
                  <ModalFooter>
                      <Button className="button btn btn-secondary btn-xsmall" onClick={this.addevent}>Add</Button>{' '}
                      <Button className="button black btn btn-secondary btn-xsmall" onClick={this.addevent}>Cancel</Button>
                  </ModalFooter>
              </Modal>
            </div>
            </div>
            
          </div>
        );

    }
}
export default Eventcalendar;