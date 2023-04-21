import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {typedContent: ''}

  countChars = event => this.setState({typedContent: event.target.value})

  render() {
    const {typedContent} = this.state

    return (
      <div className="main-container">
        <img
          className="img"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
        />

        <div className="description-div">
          <h1>Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="inputEle">Enter the phrase</label>
            <input
              id="inputEle"
              onChange={this.countChars}
              type="text"
              value={typedContent}
              placeholder="Enter the phrase"
            />
          </div>
          <p className="btn">No.of letters: {typedContent.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
