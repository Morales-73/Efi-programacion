import React, {useContext} from 'react'
import {themeContext} from '../../context/themeContext'
import {langcontext} from '../../context/langContext'
import Carousel from './Carousel'

import homeCalidad from "../../img/homeCalidad.jpg"

export default function Home() {

  const {theme} = useContext(themeContext)

  const {idioma} = useContext(langcontext)
  const {nuestraHistoria, historia} = idioma

  return (
    <>
      <div className={`bg-${theme.theme}`}>
        <Carousel/>

        <div className="container mt-5 mb-5">
          <img src={homeCalidad} className="rounded-4 img-fluid" alt="Img" />
        </div>

        <div className="container mt-5 mb-5">
          <div>
            <h1 className="mt-5 mb-5 text-warning fw-bold" style={{fontSize:"70px"}}>
              {nuestraHistoria}
            </h1>
            <p className={`text-${theme.color} lh-lg`} style={{fontSize:"20px"}}>
              {historia}
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
