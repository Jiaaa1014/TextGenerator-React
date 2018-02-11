import React from 'react'
import axios from 'axios'

export default class Output extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  render() {
    return (
      <div className="output">
        {this.state.value}
      </div>
    )
  }
}