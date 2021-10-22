import { Component } from 'react';
import './style.css';

export class Home extends Component {
  state = {
    counter: 0
  }
  
  handleClick = async () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
    
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Home;
