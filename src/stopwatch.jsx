import React from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {startTime: Date.now(), currentTime: Date.now()}
      this.start = this.start.bind(this);
    }

    start(){
      this.setState({startTime: Date.now(), currentTime: Date.now()})
      setInterval(
        () => this.setState({currentTime: Date.now()})
      , 1000);
    }


    render() {
      return (
        <div>
          <h1>{this.state.currentTime - this.state.startTime}</h1>
          <button onClick={this.start}>Start</button>
          <button>Reset</button>
        </div>
      )
    }
}

export default Stopwatch;
