import React, { Component } from 'react'
import './App.css'

import AppHeader from './AppHeader'
import AppContent from './AppContent'

class App extends Component {
  render () {
    return (
      <div className="App">
        <AppHeader />
        <AppContent />
      </div>
    )
  }
}

export default App
