import React, { Component } from 'react';
import { render } from 'react-dom';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timeId = setInterval(()=>{
          this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>{this.state.date.toISOString()}</div>
    );
  }

  componentWillUnmount(){
    clearInterval(this.timeId);
  }
}