import { Route, Routes} from 'react-router-dom'

// Pages
import Home from '../pages/Home/Home'
import NewBook from '../pages/NewBook/NewBook'
import About from '../pages/About/About'

const Rotas = () => {
  return(
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/new-book' element={ <NewBook/> } />
      <Route path='/about' element={ <About/> } />
    </Routes>
  )
}

export default Rotas