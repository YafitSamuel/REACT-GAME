import React from "react";

function SlotNumber(props) {
  console.log(props);
  return <div className="slot_number">{props.num}</div>;
}

class SlotMachine extends React.Component {
  constructor() {
    super();
    this.state = { first: 1, second: 2, third: 3 };
  }
  render() {
    return (
      <div>
        <h1 className="title">SLOT MACHINE</h1>
        <div className="slot_number-app">
          <SlotNumber num={this.state.first} />
          <SlotNumber num={this.state.second} />
          <SlotNumber num={this.state.third} />
        </div>
        <button
          className="run"
          onClick={() => {
            const random = Math.floor(Math.random() * 10);
            const random2 = Math.floor(Math.random() * 10);
            const random3 = Math.floor(Math.random() * 10);

            this.setState({
              first: random,
              second: random2,
              third: random3,
            });
          }}
        >
          Run!
        </button>
      </div>
    );
  }
}
export default SlotMachine;
