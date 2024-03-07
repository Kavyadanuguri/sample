import {Link} from 'react-router-dom'
import {GamingItemList, GamingItemImg, GamingItemP1} from './styledComponents'
import './index.css'
import CartContext from '../../context/CartContext'

const GamingItemDetails = props => {
  const {itemDetails} = props
  const {id, title, thumbnailUrl, viewCount} = itemDetails
  return (
    <CartContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const text = !isLightTheme && '#ffffff'
        return (
          <>
            <Link className="link" to={`/video/${id}`}>
              <GamingItemList key={id}>
                <GamingItemImg alt={title} src={thumbnailUrl} />
                <GamingItemP1 style={{color: text}} value>
                  {title}
                </GamingItemP1>
                <GamingItemP1>{viewCount} Watching World Wide</GamingItemP1>
              </GamingItemList>
            </Link>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default GamingItemDetails
