import React from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {startTime: Date.now(), currentTime: Date.now()}
      this.start = this.start.bind(this);
      this.reset = this.reset.bind(this);
    }

    start(){
      this.setState({startTime: Date.now(), currentTime: Date.now()})
      this.tickTock = setInterval(
        () => this.setState({currentTime: Date.now()})
      , 1000);
    }

    reset() {
      clearInterval(this.tickTock);
    }


    render() {
      return (
        <div>
          <h1>{this.state.currentTime - this.state.startTime}</h1>
          <button onClick={this.start}>Start</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      )
    }
}

export default Stopwatch;
