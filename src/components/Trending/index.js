import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import SideBar from '../SideBar'
import Header from '../Header'
import TrendingItem from '../TrendingItem'
import CartContext from '../../context/CartContext'
import {
  TrendingContainer,
  TrendingMainContainer,
  TrendingContainer1,
  TrendingCon1,
  UlTrendingContainer,
  FireContainer,
  TrendingHeading1,
  TrendingFailButton,
  TrendingFailureHeading1,
  TrendingFailP1,
  TrendingFailureImg,
  TrendingFailureContainer,
} from './styledComponents'

const stages = {
  progress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {fetchedTrendingData: [], trendingStage: stages.progress}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({trendingStage: stages.progress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        fetchedTrendingData: updatedData,
        trendingStage: stages.success,
      })
    } else {
      this.setState({trendingStage: stages.failure})
    }
  }

  renderSuccessView = () => {
    const {fetchedTrendingData} = this.state
    return (
      <UlTrendingContainer>
        {fetchedTrendingData.map(each => (
          <TrendingItem key={each.id} itemDetails={each} />
        ))}
      </UlTrendingContainer>
    )
  }

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const back1 = !isLightTheme && '#000000'
        const text = !isLightTheme && '#ffffff'

        return (
          <TrendingFailureContainer style={{background: back1}}>
            <TrendingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="fails"
            />
            <TrendingFailureHeading1 style={{color: text}}>
              Oops! Something went wrong
            </TrendingFailureHeading1>
            <TrendingFailP1>
              We are having some trouble to complete your request. Please try
              again.
            </TrendingFailP1>
            <TrendingFailButton>Retry</TrendingFailButton>
          </TrendingFailureContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderProgressView = props => {
    console.log(props)
    return (
      <TrendingFailureContainer data-testid="loader">
        <Loader type="ThreeDots" color="blue" height="50" width="50" />
      </TrendingFailureContainer>
    )
  }

  renderExactStage = () => {
    const {trendingStage} = this.state
    switch (trendingStage) {
      case stages.success:
        return this.renderSuccessView()
      case stages.failure:
        return this.renderFailureView()
      case stages.progress:
        return this.renderProgressView()
      default:
        return null
    }
  }

  render() {
    const {trendingStage} = this.state
    console.log(trendingStage)

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
              <TrendingContainer>
                <SideBar />
                <TrendingMainContainer style={{background: back1}}>
                  <TrendingContainer1 style={{background: back}}>
                    <TrendingCon1>
                      <FireContainer style={{background: back1}}>
                        <HiFire size={30} color="red" />
                      </FireContainer>
                      <TrendingHeading1 style={{color: text}}>
                        Trending
                      </TrendingHeading1>
                    </TrendingCon1>
                  </TrendingContainer1>
                  {this.renderExactStage()}
                </TrendingMainContainer>
              </TrendingContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Trending
