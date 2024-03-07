import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {FaMoon, FaUserCircle, FaRegLightbulb} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import {
  HeaderContainer,
  HeaderImage1,
  HeaderContainer2,
  HeaderButton,
  HeaderContainer3,
  HeaderButton1,
  HeaderMoon,
} from './styledComponents'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {onThemeValue, isLightTheme} = value

      const onLoginPage = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const modeChange = () => {
        onThemeValue()
      }
      const HeaderLogo = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const themeImg = isLightTheme ? (
        <FaMoon size={30} />
      ) : (
        <FaRegLightbulb size={30} color="#ffffff" />
      )

      const back = isLightTheme ? '#ffffff' : '#231f20'
      const HeaderProfile = isLightTheme ? '#64748b' : '#ffffff'
      const buttonBorder = !isLightTheme && '#ffffff'
      return (
        <HeaderContainer style={{background: back}}>
          <Link to="/">
            <HeaderImage1 alt="website logo" src={HeaderLogo} />
          </Link>
          <HeaderContainer2>
            <HeaderMoon onClick={modeChange} type="button">
              {themeImg}
            </HeaderMoon>
            <FaUserCircle style={{color: HeaderProfile}} size={32} />
            <Popup
              modal
              trigger={
                <HeaderButton
                  style={{borderColor: buttonBorder, color: buttonBorder}}
                  type="button"
                >
                  Logout
                </HeaderButton>
              }
            >
              {close => (
                <HeaderContainer3>
                  <p>Are you sure you want to Logout?</p>
                  <HeaderContainer2 value>
                    <HeaderButton1 onClick={() => close()} value type="button">
                      Cancel
                    </HeaderButton1>
                    <HeaderButton1 onClick={onLoginPage} type="button">
                      Confirm
                    </HeaderButton1>
                  </HeaderContainer2>
                </HeaderContainer3>
              )}
            </Popup>
          </HeaderContainer2>
        </HeaderContainer>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
