import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <button onClick={logout} type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
