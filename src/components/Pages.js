import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from './Layout'
import { Home } from './Home'
import { HeroAbout } from './HeroAbout'
import { About } from './About'
import { HeroClass } from './HeroClass'
import { Class1 } from './Class1'
import { HeroTrainers } from './HeroTrainers'
import { Trainer } from './Trainer'
import { HeroContact } from './HeroContact'
import { Contact } from './Contact'
import { HeroBlog } from './HeroBlog'
import { Blog } from './Blog'

export const Pages = () => {
  return (
    <div>
       <Router>
           <Routes>
             <Route path="/" element={<Layout><Home /></Layout>} />
             <Route path='/about' element={<Layout><HeroAbout /><About /></Layout>}/>
             <Route path='/class1' element={<Layout><HeroClass /><Class1 /></Layout>}/>
             <Route path='/trainer' element={<Layout><HeroTrainers /><Trainer /></Layout>}/>
             <Route path='/blog' element={<Layout><HeroBlog /><Blog /></Layout>}/>
             <Route path='/contact' element={<Layout><HeroContact /><Contact /></Layout>}/>
           </Routes>
       </Router>
    </div>
  )
}
