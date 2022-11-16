import React, {useContext} from 'react'
import {themeContext} from '../../context/themeContext'
import Carousel from './Carousel'

import homeCalidad from "../../img/homeCalidad.jpg"

export default function Home() {

  const {theme} = useContext(themeContext)

  return (
    <>
      <div className={`bg-${theme.theme}`}>
        <Carousel/>

        <div className="container mt-5 mb-5">
          <img src={homeCalidad} className="rounded-4" alt="Img" />
        </div>

      </div>
    </>
  )
}
