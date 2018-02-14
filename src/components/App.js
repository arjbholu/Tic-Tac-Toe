import './App.css'
import React from 'react'
import Header from './Header'
import BoardState from '../containers/BoardState'
import FooterState from '../containers/FooterState'

const App = () => {
  return (
    <div className="container">
      <Header className="header" />
      <BoardState />
      <FooterState className="footer"/>
    </div>
  )
}

export default App;
