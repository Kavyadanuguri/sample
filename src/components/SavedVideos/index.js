import {BiListPlus} from 'react-icons/bi'
import TrendingItem from '../TrendingItem'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'
import Header from '../Header'

import {
  SavedVideosContainer,
  SavedVideosMainContainer,
  SavedVideosContainer1,
  SavedVideoImg1,
  SavedVideosH1,
  SavedVideosP1,
  SavingContainer1,
  SavingCon1,
  SavingFireContainer,
  SavingHeading1,
} from './styledComponents'

const SavedVideos = () => (
  <CartContext.Consumer>
    {value => {
      const {cartItemsList, isLightTheme} = value
      const isValue = cartItemsList.length === 0
      const back1 = !isLightTheme && '#000000'
      const text = !isLightTheme && '#ffffff'
      const back = !isLightTheme && '#0f0f0f'

      return (
        <>
          <Header />
          <SavedVideosContainer>
            <SideBar />
            <SavedVideosMainContainer style={{background: back1}}>
              {isValue ? (
                <SavedVideosContainer1>
                  <SavedVideoImg1
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  />
                  <SavedVideosH1 style={{color: text}}>
                    No saved videos found
                  </SavedVideosH1>
                  <SavedVideosP1 style={{color: text}}>
                    You can save your videos while watching them
                  </SavedVideosP1>
                </SavedVideosContainer1>
              ) : (
                <>
                  <SavingContainer1 style={{background: back}}>
                    <SavingCon1>
                      <SavingFireContainer style={{background: back1}}>
                        <BiListPlus size={30} color="red" />
                      </SavingFireContainer>
                      <SavingHeading1 style={{color: text}}>
                        Saved Videos
                      </SavingHeading1>
                    </SavingCon1>
                  </SavingContainer1>
                  <ul>
                    {cartItemsList.map(each => (
                      <TrendingItem itemDetails={each} />
                    ))}
                  </ul>
                </>
              )}
            </SavedVideosMainContainer>
          </SavedVideosContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default SavedVideos
