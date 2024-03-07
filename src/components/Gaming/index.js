import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import GamingItemDetails from '../GamingItemDetails'
import Header from '../Header'
import CartContext from '../../context/CartContext'

import {
  GamingContainer,
  GamingMainContainer,
  GamingContainer1,
  GamingCon1,
  GamingFireContainer,
  GamingHeading1,
  UlGamingContainer,
  GamingFailButton,
  GamingFailureHeading1,
  GamingFailP1,
  GamingFailureImg,
  GamingFailureContainer,
} from './styledComponents'

const gamingStages = {
  progress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {fetchedGamingData: [], gamingStage: gamingStages.progress}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({gamingStage: gamingStages.progress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        fetchedGamingData: updatedData,
        gamingStage: gamingStages.success,
      })
    } else {
      this.setState({gamingStage: gamingStages.failure})
    }
  }

  renderSuccessView = () => {
    const {fetchedGamingData} = this.state
    return (
      <UlGamingContainer>
        {fetchedGamingData.map(each => (
          <GamingItemDetails key={each.id} itemDetails={each} />
        ))}
      </UlGamingContainer>
    )
  }

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const back1 = !isLightTheme && '#000000'
        const text = !isLightTheme && '#ffffff'
        return (
          <GamingFailureContainer style={{background: back1}}>
            <GamingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="fails"
            />
            <GamingFailureHeading1 style={{color: text}}>
              Oops! Something went wrong
            </GamingFailureHeading1>
            <GamingFailP1>
              We are having some trouble to complete your request. Please try
              again.
            </GamingFailP1>
            <GamingFailButton>Retry</GamingFailButton>
          </GamingFailureContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderProgressView = () => (
    <CartContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const back1 = !isLightTheme && '#000000'

        return (
          <GamingFailureContainer
            style={{background: back1}}
            data-testid="loader"
          >
            <Loader type="ThreeDots" color="blue" height="50" width="50" />
          </GamingFailureContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderExactStage = () => {
    const {gamingStage} = this.state
    switch (gamingStage) {
      case gamingStages.success:
        return this.renderSuccessView()
      case gamingStages.failure:
        return this.renderFailureView()
      case gamingStages.progress:
        return this.renderProgressView()
      default:
        return null
    }
  }

  render() {
    const {gamingStage} = this.state
    console.log(gamingStage)
    return (
      <CartContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const back = !isLightTheme && '#0f0f0f'
          const back1 = !isLightTheme && '#000000'
          const text = !isLightTheme && '#ffffff'
          return (
            <>
              <Header />
              <GamingContainer>
                <SideBar />
                <GamingMainContainer style={{background: back1}}>
                  <GamingContainer1 style={{background: back}}>
                    <GamingCon1>
                      <GamingFireContainer style={{background: back1}}>
                        <SiYoutubegaming size={30} color="red" />
                      </GamingFireContainer>
                      <GamingHeading1 style={{color: text}}>
                        Gaming
                      </GamingHeading1>
                    </GamingCon1>
                  </GamingContainer1>
                  {this.renderExactStage()}
                </GamingMainContainer>
              </GamingContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Gaming
