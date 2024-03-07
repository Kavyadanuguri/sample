import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'
import {
  HomeItemList,
  HomeItemImg1,
  HomeItemContainer1,
  HomeItemImg2,
  HomeItemP1,
} from './styledComponents'

const HomeCartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {itemDetails} = props
      const {
        id,
        thumbnailUrl,
        title,
        channel,
        viewCount,
        publishedAt,
      } = itemDetails
      const {isLightTheme} = value
      const itemColor = !isLightTheme && '#ffffff'
      return (
        <>
          <Link className="link" to={`/video/${id}`}>
            <HomeItemList key={id}>
              <HomeItemImg1 alt="nxt" src={thumbnailUrl} />
              <HomeItemContainer1>
                <HomeItemImg2
                  value
                  src={channel.profileImageUrl}
                  alt={channel.name}
                />
                <div>
                  <HomeItemP1 style={{color: itemColor}} value>
                    {title}
                  </HomeItemP1>
                  <HomeItemP1>{channel.name}</HomeItemP1>
                  <HomeItemP1>
                    {viewCount} views . {publishedAt}
                  </HomeItemP1>
                </div>
              </HomeItemContainer1>
            </HomeItemList>
          </Link>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default HomeCartItem
