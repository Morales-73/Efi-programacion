import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {themeContext} from '../../context/themeContext';
import {langcontext} from "../../context/langContext";

import Sabores from "../Products/Sabores"
import Postres from "../Products/Postres"
import Palitos from "../Products/Palitos"
import Bombones from "../Products/Bombones"

export default function Catalogue() {

    const {theme} = useContext(themeContext)
    const {idioma} = useContext(langcontext)

    const {categorias} = idioma

    const [option, setOption ] = useState("Sabores")

    const handleLink = (e) => {
        const value = e.target.text
        setOption(value)
    }

  return (
    <>
        {/* <h1 className={`text-center mt-5 mb-5" text-${theme.color}`}>Productos</h1> */}
          <div className="container">

            <div className="mt-2 d-flex justify-content-center p-4 gap-3">
                {categorias.map(c =>
                    <ul className="nav bg-warning rounded-4" key={c.id}>
                        <li className="nav-item"><Link className="text-decoration-none p-5 text-white fs-5" onClick={handleLink} href="">{c.titulo}</Link></li>
                    </ul>
                )}
            </div>

            <div>
                {option === "Sabores" ? <Sabores/> : null}
                {option === "Postres" ? <Postres/> : null}
                {option === "Palitos" ? <Palitos/> : null}
                {option === "Bombones" ? <Bombones/> : null}
            </div>

          </div>
    </>
  )
}
