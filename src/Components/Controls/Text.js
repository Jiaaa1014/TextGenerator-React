import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
export default class Text extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  onChange(e) {
    this.setState({ value: e.target.value }, () => this.props.onChange(this.state.value))
  }
  render() {
    return (
      <FormControl type='number' defaultValue={this.state.value} onChange={this.onChange.bind(this)} />
    )
  }
}