import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import CartContext from './context/CartContext'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {cartItemsList: [], isLightTheme: true}

  onIncrementList = video => {
    const {cartItemsList} = this.state
    const filteredId = cartItemsList.find(each => each.id === video.id)
    if (filteredId === undefined) {
      this.setState(prevState => ({
        cartItemsList: [...prevState.cartItemsList, video],
      }))
    }
  }

  onThemeValue = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  render() {
    const {cartItemsList, isLightTheme} = this.state
    return (
      <CartContext.Provider
        value={{
          cartItemsList,
          isLightTheme,
          onThemeValue: this.onThemeValue,
          onIncrementList: this.onIncrementList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/video/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
