import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  filterCountry = () => {
    const {activeCapital} = this.state
    const getCountry = countryAndCapitalsList.find(
      eachCountry => activeCapital === eachCountry.id,
    )
    return getCountry.country
  }

  render() {
    const {activeCapital} = this.state
    const country = this.filterCountry(activeCapital)

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={activeCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="answer">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
