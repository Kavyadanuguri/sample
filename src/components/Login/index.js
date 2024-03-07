import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import {
  LoginMainContainer,
  LoginContainer1,
  LoginContainer2,
  LoginContainer3,
  LoginContainer4,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginInput2,
  LoginImage,
  LoginError,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', isValue: false, errorMsg: ''}

  getSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  getFailureView = error => {
    this.setState({errorMsg: `*${error}`})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.getSuccessView(data.jwt_token)
    } else {
      this.getFailureView(data.error_msg)
    }
  }

  onUserName = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onValueType = () => {
    this.setState(prevState => ({isValue: !prevState.isValue}))
  }

  render() {
    const {username, password, isValue, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return Redirect('/')
    }

    return (
      <CartContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const back1 = !isLightTheme && '#000000'

          const back = !isLightTheme && '#231f20'
          const text = !isLightTheme && '#ffffff'
          const col = !isLightTheme && 'black 0px 0px 0px 0px'
          const HeaderLogo = isLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const buttonBorder = !isLightTheme && '#94a3b8'

          return (
            <LoginMainContainer style={{background: back}}>
              <LoginContainer1
                style={{background: back1, boxShadow: col}}
                onSubmit={this.onSubmitForm}
              >
                <LoginContainer2>
                  <LoginImage src={HeaderLogo} alt="website-logo" />
                </LoginContainer2>
                <LoginContainer3>
                  <LoginLabel htmlFor="input1" style={{color: text}}>
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    onChange={this.onUserName}
                    value={username}
                    style={{background: back1, borderColor: buttonBorder}}
                    id="input1"
                    type="text"
                    placeholder="Username"
                  />
                </LoginContainer3>
                <LoginContainer3>
                  <LoginLabel htmlFor="input2" style={{color: text}}>
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    style={{background: back1, borderColor: buttonBorder}}
                    onChange={this.onPassword}
                    id="input2"
                    value={password}
                    type={isValue ? 'text' : 'password'}
                    placeholder="Password"
                  />
                </LoginContainer3>
                <LoginContainer4>
                  <LoginInput2 onChange={this.onValueType} type="checkbox" />
                  <p style={{color: text}}>Show Password</p>
                </LoginContainer4>
                <LoginButton type="submit">Login</LoginButton>
                <LoginError>{errorMsg}</LoginError>
              </LoginContainer1>
            </LoginMainContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Login
