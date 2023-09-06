// Write your code here
import './index.css'

import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {details} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = details

    return (
      <div>
        <h1>Latest Matches</h1>
        <div className="cont">
          <div>
            <h1>{competingTeam}</h1>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <div>
            <img className="img" src={competingTeamLogo} alt={competingTeam} />
          </div>
          <div>
            <div>
              <p>First Innings</p>
              <p>{firstInnings}</p>
            </div>
            <div>
              <p>Second Innings</p>
              <p>{secondInnings}</p>
            </div>
            <div>
              <p>Man Of The Match</p>
              <p>{manOfTheMatch}</p>
            </div>
            <div>
              <p>Umpires</p>
              <p>{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
