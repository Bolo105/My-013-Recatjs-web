import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Hero } from './Hero'
import { About } from './About'
import { Program } from './Program'
import { Class1 } from './Class1'
import { Count } from './Count'
import { Trainer } from './Trainer'
import { Blog } from './Blog'
import { Contact } from './Contact'


export const Home = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
      }, [])
  return (
    <div>
      <Hero />
      <About />
      <Program />
      <Class1 />
      <Count />
      <Trainer />
      <Blog />
      <Contact />
    </div>
  )
}
