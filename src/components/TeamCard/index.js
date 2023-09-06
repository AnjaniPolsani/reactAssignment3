// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details
  return (
    <li className="listcont">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={`${name}`} className="img1" />
        <div>
          <h1>{name}</h1>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
