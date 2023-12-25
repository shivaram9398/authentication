import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className="con">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </div>
  )
}
export default Header
