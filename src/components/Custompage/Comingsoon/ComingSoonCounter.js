/**
 * Counter Time Set
 */
import React, { Component } from "react";
export default class CommingSoonCounter extends Component {
   constructor(props) {
      super(props);
      this.state = { time: {}, seconds: props.time ? props.time : props.time };
      this.timer = 0;
      this.counter = this.counter.bind(this);
   }
   secondsToTime(secs) {
      let days = Math.floor(secs / (60 * 60 * 24 ));

      let hours = Math.floor(secs / (60 * 60 ));

      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;

      let seconds = Math.ceil(divisor_for_seconds);

      let obj = {
         d:days,
         h: hours,
         m: minutes,
         s: seconds
      };
      return obj;
   }

   componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      this.startTimer();
   }

   startTimer() {
      if (this.timer === 0) {
         this.timer = setInterval(this.counter, 1000);
      }
   }

   componentWillUnmount() {
      clearInterval(this.timer);
   }

   counter() {
      let seconds = this.state.seconds - 1;
      this.setState({
         time: this.secondsToTime(seconds),
         seconds: seconds
      });
      if (seconds === 0) {
         clearInterval(this.timer);
      }
   }

   render() {
      const { d,h, m, s } = this.state.time;
      return (
             <ul className="counter">
                <li>
                  <p id="days">{d}</p>Day
                </li>
                <li>
                   <p id="hours">{h}</p>Hrs
                </li>
                <li>
                   <p id="minutes">{m}</p>Min
                </li>
                <li>
                    <p id="seconds">{s < 10 ? `0${s}` : s}</p>Sec
                </li>
            </ul>
      );
   }
}
