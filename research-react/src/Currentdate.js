import React, { Component } from "react";

export default class Currentdate extends Component {

  constructor() {
    super();

    var today = new Date()
    today = Date.now();

    this.state = {
        today: today
    };
}

  render() {
    return (
      <div className="Currentdate">
          <p>It is now {this.state.today}</p>
      </div>
    );
  }
}