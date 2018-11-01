import React, { Component } from 'react';
import './App.css';
import { Sketch } from './components/sketch';
import sketch from './p5z';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { value: 0 };
    }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} onClick={() => { this.setState({ value: (this.state.value + 5)%256 }) }}>
        <p>
          A typing game
        </p>
        <Sketch
          sketch={sketch}
          width={'80%'}
          height={'80%'}
          sketchProps={{ value: this.state.value}}
        />
        <p>
          Click to change current value being passed as a prop to the sketch: {this.state.value}
        </p>

      </div>
  );
}

}

export default App;
