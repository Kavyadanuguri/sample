import SideBar from '../SideBar'
import Header from '../Header'
import CartContext from '../../context/CartContext'

import {
  NotVideosContainer1,
  NotVideoImg1,
  NotVideosH1,
  NotVideosP1,
  NotVideosContainer,
  NotVideosMainContainer,
} from './styledComponents'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const back1 = !isLightTheme && '#000000'
      const text = !isLightTheme && '#ffffff'
      return (
        <>
          <Header />
          <NotVideosContainer>
            <SideBar />
            <NotVideosMainContainer style={{background: back1}}>
              <NotVideosContainer1>
                <NotVideoImg1
                  alt="no saved videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                />
                <NotVideosH1 style={{color: text}}>Page Not Found</NotVideosH1>
                <NotVideosP1>
                  We are sorry, the page you requested could not be found.
                </NotVideosP1>
              </NotVideosContainer1>
            </NotVideosMainContainer>
          </NotVideosContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
