import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    Increment = () => {
        this.setState({ count: this.state.count + 1 })
        
    }
    
  render() {
    return (
      <div>
        <button onClick={this.Increment}>Click me</button>
        <div>Count: {this.state.count}</div>
      </div>
    )
  }
}

export default Counter
