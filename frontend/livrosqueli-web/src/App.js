import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Route'

import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes />
      </Router>
    </div>
  )
}
