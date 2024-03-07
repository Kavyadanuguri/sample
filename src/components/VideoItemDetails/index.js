import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'
import Header from '../Header'

import {
  VideoDisplayContainer,
  VideoPlayer,
  VideoFailureHeading1,
  VideoP1,
  VideoP11,
  VideoContainer1,
  VideoMainContainer,
  VideoCon1,
  VideoImg1,
  VideoFailP1,
  VideoFailureContainer,
  VideoHrLine,
  VideoFailureImg,
  VideoFailButton,
  PlusButton,
} from './styledComponents'

const videoStagesList = {
  progress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    fetchedVideoData: '',
    fetchedChannelData: '',
    isValue: false,
    videoStage: videoStagesList.progress,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({videoStage: videoStagesList.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const channelData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        fetchedVideoData: updatedData,
        fetchedChannelData: channelData,
        videoStage: videoStagesList.success,
      })
    } else {
      this.setState({videoStage: videoStagesList.failure})
    }
  }

  renderSuccessView = () => (
    <CartContext.Consumer>
      {value => {
        const {fetchedVideoData, fetchedChannelData, isValue} = this.state
        const {
          id,
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
        } = fetchedVideoData
        const {onIncrementList, isLightTheme} = value
        const back1 = !isLightTheme && '#000000'
        const text = !isLightTheme && '#ffffff'
        const onSavedVideo = () => {
          if (isValue === false) {
            onIncrementList(fetchedVideoData)
          }
          this.setState(prevState => ({
            isValue: !prevState.isValue,
          }))
        }
        return (
          <VideoMainContainer style={{background: back1}} key={id}>
            <VideoPlayer>
              <ReactPlayer
                url={videoUrl}
                controls
                width="1020px"
                height="450px"
              />
            </VideoPlayer>
            <VideoP1 style={{color: text}}>{title}</VideoP1>
            <VideoContainer1>
              <VideoP1 value>
                {viewCount} views . {publishedAt}
              </VideoP1>

              <VideoCon1 kavya>
                <VideoCon1>
                  <BiLike color="#64748b" size={25} />
                  <VideoP1 value value1>
                    Like
                  </VideoP1>
                </VideoCon1>
                <VideoCon1>
                  <BiDislike color="#64748b" size={25} />
                  <VideoP1 value value1>
                    Dislike
                  </VideoP1>
                </VideoCon1>
                <VideoCon1>
                  <PlusButton onClick={onSavedVideo} type="button">
                    <BiListPlus
                      color={isValue ? '#00306e' : '#64748b'}
                      size={25}
                    />
                  </PlusButton>
                  <VideoP11 colorValue={isValue}>Save</VideoP11>
                </VideoCon1>
              </VideoCon1>
            </VideoContainer1>
            <VideoHrLine />
            <VideoContainer1 value>
              <VideoImg1
                alt="kalyan"
                src={fetchedChannelData.profileImageUrl}
              />
              <div>
                <VideoP1 style={{color: text}}>
                  {fetchedChannelData.name}
                </VideoP1>
                <VideoP1 value>
                  {fetchedChannelData.subscriberCount} subscribers
                </VideoP1>
                <VideoP1 style={{color: text}}>{description}</VideoP1>
              </div>
            </VideoContainer1>
          </VideoMainContainer>
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
          <VideoFailureContainer style={{background: back1}}>
            <VideoFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="fails"
            />
            <VideoFailureHeading1 style={{color: text}}>
              Oops! Something went wrong
            </VideoFailureHeading1>
            <VideoFailP1>
              We are having some trouble to complete your request. Please try
              again.
            </VideoFailP1>
            <VideoFailButton>Retry</VideoFailButton>
          </VideoFailureContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderProgressView = props => {
    console.log(props)
    return (
      <VideoFailureContainer data-testid="loader">
        <Loader type="ThreeDots" color="blue" height="50" width="50" />
      </VideoFailureContainer>
    )
  }

  renderExactStage = () => {
    const {videoStage} = this.state
    switch (videoStage) {
      case videoStagesList.success:
        return this.renderSuccessView()
      case videoStagesList.failure:
        return this.renderFailureView()
      case videoStagesList.progress:
        return this.renderProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoDisplayContainer>
          <SideBar />
          {this.renderExactStage()}
        </VideoDisplayContainer>
      </>
    )
  }
}

export default VideoItemDetails
