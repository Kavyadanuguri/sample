import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'
import {
  TrendingItemList,
  TrendingItemImage,
  TrendingItemHeading1,
  TrendingItemContainer,
  TrendingItemP1,
} from './styledComponents'

const TrendingItem = props => (
  <CartContext.Consumer>
    {value => {
      const {itemDetails} = props
      const {
        thumbnailUrl,
        id,
        title,
        viewCount,
        channel,
        publishedAt,
      } = itemDetails
      const {isLightTheme} = value
      const text = !isLightTheme && '#ffffff'
      return (
        <>
          <Link className="link" to={`/video/${id}`}>
            <TrendingItemList key={id}>
              <TrendingItemImage alt="kav" src={thumbnailUrl} />
              <TrendingItemContainer>
                <TrendingItemHeading1 style={{color: text}}>
                  {title}
                </TrendingItemHeading1>
                <TrendingItemP1>{channel.name}</TrendingItemP1>
                <TrendingItemP1>
                  {viewCount} views . {publishedAt}
                </TrendingItemP1>
              </TrendingItemContainer>
            </TrendingItemList>
          </Link>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default TrendingItem
