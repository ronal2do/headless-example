import React, { Component } from 'react'

export default class Headless extends Component {
  state = { value: 0 }
  handleClick = () => {
    console.log('click')
    this.setState({ value: this.state.value + 1 })
  }
  handleOtherClick = () => console.log('hendle other click')

  render() {
    return this.props.children({
      click: this.handleClick,
      otherClick: this.handleOtherClick,
      value: this.state.value,
      other: this.props.other,
    });
  }
}
