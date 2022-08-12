import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return (
      <section>
        <button onClick={this.handleClick}>
          Increament
        </button>
        {this.state.counter}
      </section>
    )
  }
}

export default Counter;



