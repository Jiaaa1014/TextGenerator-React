import React from 'react'
import axios from 'axios'
import { ControlLabel } from 'react-bootstrap'
import Output from './Output'
import Text from './Controls/Text'
import Select from './Controls/Select'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getText()
  }
  getText() {
    const url = `http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`
    axios.get(url)
      .then((res) => {
        this.setState({ text: res.data.text }, function () {
        })
      })
      .catch((err) => console.log("err", err)
      )
  }
  changeParas(num) {
    this.setState({ paras: num }, this.getText())
  }
  showHtml(bool) {
    this.setState({ html: bool }, this.getText())
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Dummy Text Generaor</h1>
          <Output value={this.state.text} />
          <h3>Real Time Options</h3>
          <form>
            <div>
              <ControlLabel>Paragraph: </ControlLabel>
              <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
            </div>
            <div>
              <ControlLabel>Include HTML: </ControlLabel>
              <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
            </div>
          </form>
        </div></div>
    )
  }
}