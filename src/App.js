import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Styles
import { GlobalStyle } from "./GlobalStyles"

// Components
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Movie } from './components/Movie'
import { NotFound } from './components/NotFound'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
