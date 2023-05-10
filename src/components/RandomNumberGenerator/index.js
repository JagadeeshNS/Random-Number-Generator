// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickButton = () => {
    const randomNo = Math.ceil(Math.random() * 100)

    this.setState({number: randomNo})
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Generate
            </button>
          </div>
          <p className="random-no">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
