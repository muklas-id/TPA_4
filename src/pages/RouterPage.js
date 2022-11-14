import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Portofolio from './Portofolio'
import Article from './Article'

export default function RouterPage() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/portofolio' element={<Portofolio />} />
                <Route path='/article' element={<Article />} />
            </Switch>
        </Router>
    </div>
  )
}
