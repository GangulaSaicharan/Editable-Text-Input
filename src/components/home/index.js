import './index.css'
import {Component} from 'react'

class Home extends Component {
  state = {show: true, text: ''}

  changeState = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  onEnterInput = event => {
    this.setState({text: event.target.value})
  }

  renderInput = () => {
    const {text} = this.state
    return (
      <div className="input-container">
        <input value={text} onChange={this.onEnterInput} type="text" />
        <button onClick={this.changeState} type="button">
          Save
        </button>
      </div>
    )
  }

  renderOutput = () => {
    const {text} = this.state
    return (
      <div className="input-container">
        <p>{text}</p>
        <button onClick={this.changeState} type="button">
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {show} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>Editable Text Input</h1>
          {show ? this.renderInput() : this.renderOutput()}
        </div>
      </div>
    )
  }
}

export default Home
