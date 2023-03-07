import {Routes,BrowserRouter as Router, Route}from 'react-router-dom'

import NotFound from './pages/NotFound.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Category from './pages/Category.jsx'
import Recipe from './pages/Recipe.jsx'

function App() {
  return <>
  <Router basename='/reactShop4'>
    <Header />
      <main className='container content'>
      
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contact/>}/>
            <Route path='/category/:name' element={<Category/>}/>
            <Route path='/meal/:name' element={<Recipe/>}/>
            <Route path='*'element={<NotFound/>}/>
        </Routes>
     
      </main>
    <Footer />
    </Router>
    </>;
}

export default App;
