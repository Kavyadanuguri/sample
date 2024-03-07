import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoMdClose, IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import HomeCartItem from '../HomeCartItem'
import SideBar from '../SideBar'
import Header from '../Header'
import CartContext from '../../context/CartContext'

import {
  HomeMainContainer,
  HomeContainer1,
  HomeImage1,
  HomeFailButton,
  HomeFailureHeading1,
  HomeBtn1,
  HomeFailP1,
  DisplayContainer,
  HomeParagraph1,
  HomeCloseBtn,
  HomeUnOrder,
  SearchIconButton,
  HomeContainer2,
  HomeInputElement,
  HomeFailureImg,
  HomeFailureContainer,
  HomeSearchContainer,
} from './styledComponents'

const stagesList = {
  progress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isTop: true,
    FetchedData: [],
    searchInput: '',
    stages: stagesList.progress,
  }

  componentDidMount() {
    this.getHomeData()
  }

  getHomeData = async () => {
    this.setState({stages: stagesList.progress})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
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
      this.setState({FetchedData: updatedData, stages: stagesList.success})
    } else {
      this.setState({stages: stagesList.failure})
    }
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onHomeTopView = () => {
    this.setState({isTop: false})
  }

  getResultBySearch = () => {
    this.getHomeData()
  }

  renderSuccessView = () => (
    <CartContext.Consumer>
      {value => {
        const {FetchedData} = this.state
        const lengthOfData = FetchedData.length === 0
        const {isLightTheme} = value
        const SideColor = !isLightTheme && '#ffffff'
        return (
          <>
            {lengthOfData ? (
              <HomeFailureContainer>
                <HomeFailureImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                  alt="no videos"
                />
                <HomeFailureHeading1 style={{color: SideColor}} value1>
                  No Search results found
                </HomeFailureHeading1>
                <HomeFailP1 style={{color: SideColor}} value1>
                  Try different key words or remove search filter.
                </HomeFailP1>
                <HomeFailButton value1>Retry</HomeFailButton>
              </HomeFailureContainer>
            ) : (
              <HomeUnOrder>
                {FetchedData.map(each => (
                  <HomeCartItem key={each.id} itemDetails={each} />
                ))}
              </HomeUnOrder>
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const back1 = !isLightTheme && '#000000'
        const text = !isLightTheme && '#ffffff'

        return (
          <HomeFailureContainer style={{background: back1}}>
            <HomeFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="fails"
            />
            <HomeFailureHeading1 style={{color: text}}>
              Oops! Something went wrong
            </HomeFailureHeading1>
            <HomeFailP1>
              We are having some trouble to complete your request. Please try
              again.
            </HomeFailP1>
            <HomeFailButton>Retry</HomeFailButton>
          </HomeFailureContainer>
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
          <HomeFailureContainer
            style={{background: back1}}
            data-testid="loader"
          >
            <Loader type="ThreeDots" color="blue" height="50" width="50" />
          </HomeFailureContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderExactStage = () => {
    const {stages} = this.state
    switch (stages) {
      case stagesList.success:
        return this.renderSuccessView()
      case stagesList.failure:
        return this.renderFailureView()
      case stagesList.progress:
        return this.renderProgressView()
      default:
        return null
    }
  }

  render() {
    const {isTop, stages} = this.state
    console.log(stages)

    return (
      <CartContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const back = !isLightTheme && '#0f0f0f'
          const back1 = !isLightTheme && '#909090'
          const buttonBorder = !isLightTheme && '#909090'
          const SideColor = !isLightTheme && '#ffffff'
          return (
            <>
              <Header />
              <DisplayContainer>
                <SideBar />
                <HomeMainContainer style={{background: back}}>
                  {isTop && (
                    <HomeContainer1>
                      <div>
                        <HomeImage1
                          alt="website logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        />
                        <HomeParagraph1>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </HomeParagraph1>
                        <HomeBtn1>GET IT NOW</HomeBtn1>
                      </div>
                      <HomeCloseBtn onClick={this.onHomeTopView} type="button">
                        <IoMdClose size={25} />
                      </HomeCloseBtn>
                    </HomeContainer1>
                  )}
                  <HomeContainer2 style={{background: back}}>
                    <HomeSearchContainer
                      style={{outlineColor: buttonBorder, background: back}}
                    >
                      <HomeInputElement
                        placeholder="Search"
                        style={{background: back, color: SideColor}}
                        onChange={this.getSearchInput}
                        type="search"
                      />
                      <SearchIconButton
                        style={{background: back1}}
                        onClick={this.getResultBySearch}
                        type="button"
                      >
                        <IoIosSearch color="black" size={20} />
                      </SearchIconButton>
                    </HomeSearchContainer>
                    {this.renderExactStage()}
                  </HomeContainer2>
                </HomeMainContainer>
              </DisplayContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Home
