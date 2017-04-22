import React, { Component } from 'react'
import Loader from './Loader'
import Picture from './Picture'
import 'reddit.js'

class AppContent extends Component {
  constructor () {
    super()
    this.state = {
      pics: []
    }
  }
  render () {
    return (
      <div className="App-content">
        {(this.state.pics.length > 0) ? this.state.pics : <Loader />}
      </div>
    )
  }

  componentDidMount () {
    let pics = []
    window.reddit.hot('wallpapers').limit(9).fetch((res) => {
      const {children} = res.data
      const links = children.map(r => r.data.url)
      const thumbs = children.map(r => r.data.thumbnail)

      links.forEach((el, idx) => {
        pics.push(<Picture
            source={el}
            thumbnail={thumbs[idx]}
            key={idx}
            id={idx}
          />)
      })

      this.setState({'pics': pics})
    })
  }
}

export default AppContent