import React from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {startTime: Date.now(), currentTime: Date.now(), pauseTime: 0, on: false}
      this.start = this.start.bind(this);
      this.reset = this.reset.bind(this);
      this.pause = this.pause.bind(this);
    }

    start(){
      this.setState({startTime: Date.now(), currentTime: Date.now() + this.state.pauseTime, on: true})
      if(this.tickTock) {
        clearInterval(this.tickTock);
      }
      this.tickTock = setInterval(
        () => this.setState({currentTime: Date.now() + this.state.pauseTime})
      , 10);
    }

    reset() {
      clearInterval(this.tickTock);
      this.setState({startTime: 0, currentTime: 0, on: false});
    }

    pause() {
      clearInterval(this.tickTock);
      this.setState({pauseTime: this.state.currentTime - this.state.startTime, on: false})
    }

    parseTime(time) {
      let mills = Math.floor(time % 1000 / 10);
      let seconds = Math.floor(time / 1000 % 60);
      let minutes = Math.floor(time / 60000);
      let hours = Math.floor(time / 360000);

      if(hours) {
        return `${hours}h ${minutes}m ${seconds}s ${mills}`
      } else if (minutes) {
        return `${minutes}m ${seconds}s ${mills}`
      } else {
        return `${seconds}s ${mills}`
      }

    }

    render() {
      const time = this.parseTime(this.state.currentTime - this.state.startTime)
      const buttonText = this.state.on ? "Pause" : "Start"
      const buttonFunc = this.state.on ? this.pause : this.start
      return (
        <div>
          <h1>{time}</h1>
          <button onClick={buttonFunc}>{buttonText}</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      )
    }
}

export default Stopwatch;
