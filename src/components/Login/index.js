import './index.css'
import Cookies from 'js-cookie'

const Login = props => {
  const button = async () => {
    const url = 'https://apis.ccbp.in/login'

    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token

      const {history} = props

      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      const {history} = props
      history.replace('/login')
    }
  }

  return (
    <>
      <h1>Please Login</h1>
      <button onClick={button} type="button">
        Login with sample creds
      </button>
    </>
  )
}

export default Login
