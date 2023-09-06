// Write your code here
import './index.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCardList: updatedData})
  }

  render() {
    const {teamCardList} = this.state
    return (
      <div className="bg">
        <div className="cont1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="icon"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul>
          {teamCardList.map(each => (
            <TeamCard details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
