import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import CartContext from '../../context/CartContext'
import './index.css'
import {
  SideMainContainer,
  SideCon1,
  SideFacebook,
  SideP1,
  SideHeading,
  SideColorContainer,
} from './styledComponents'

const SideBar = () => (
  <CartContext.Consumer>
    {value => {
      const {isLightTheme} = value
      console.log(isLightTheme)
      const SideColor = !isLightTheme && '#ffffff'
      const back = !isLightTheme && '#231f20'
      return (
        <SideColorContainer style={{background: back}}>
          <SideMainContainer>
            <div>
              <Link className="link" to="/">
                <SideCon1>
                  <AiFillHome color="#616e7c" size={25} />
                  <SideP1 style={{color: SideColor}}>Home</SideP1>
                </SideCon1>
              </Link>
              <Link className="link" to="/trending">
                <SideCon1>
                  <HiFire color="#616e7c" size={25} />
                  <SideP1 style={{color: SideColor}}>Trending</SideP1>
                </SideCon1>
              </Link>
              <Link className="link" to="/gaming">
                <SideCon1>
                  <SiYoutubegaming color="#616e7c" size={25} />
                  <SideP1 style={{color: SideColor}}>Gaming</SideP1>
                </SideCon1>
              </Link>
              <Link className="link" to="/saved-videos">
                <SideCon1 type="button">
                  <BiListPlus color="#616e7c" size={25} />
                  <SideP1 style={{color: SideColor}}>Saved Videos</SideP1>
                </SideCon1>
              </Link>
            </div>
            <div>
              <SideHeading style={{color: SideColor}}>CONTACT US</SideHeading>
              <SideCon1>
                <SideFacebook
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                />

                <SideFacebook
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
                <SideFacebook
                  alt=" linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </SideCon1>
              <SideHeading style={{color: SideColor}} heading>
                Enjoy! Now to see your channels and recommendations!
              </SideHeading>
            </div>
          </SideMainContainer>
        </SideColorContainer>
      )
    }}
  </CartContext.Consumer>
)

export default SideBar
