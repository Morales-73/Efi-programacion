import React, {useContext} from 'react'
import {langcontext} from '../../context/langContext'
import {themeContext} from '../../context/themeContext'

import background from '../../img/bg-login.png'
import Form from './Form'

export default function Login() {

    const {idioma} = useContext(langcontext)
    const {theme} = useContext(themeContext)

    const {bienvenido} = idioma

  return (
    <>
        <div className="container">

            <div className="row p-5">

                {/* Background */}
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={background} className="w-100 mb-5" alt="" />
                </div>

                {/* Form */}
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className={`text-${theme.color}`}>{bienvenido}</h1>
                    <Form/>
                </div>

            </div>

        </div>
    </>
  )
}
