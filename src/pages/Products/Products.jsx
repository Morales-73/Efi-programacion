import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {langcontext} from "../../context/langContext";

import Sabores from "../Products/Sabores"
import Postres from "../Products/Postres"
import Palitos from "../Products/Palitos"
import Bombones from "../Products/Bombones"

export default function Catalogue() {

    const {idioma} = useContext(langcontext)

    const {categorias} = idioma

    const [option, setOption ] = useState(categorias[0].titulo)

    const handleLink = (e) => {
        const value = e.target.text
        setOption(value)
    }

  return (
    <>
          <div className="container">

            <div className="mt-2 d-flex justify-content-center p-4 gap-3 flex-column flex-md-row">
                {categorias.map(c =>
                    <ul className="nav bg-warning rounded-4" key={c.id}>
                        <li className="nav-item px-5"><Link className="text-decoration-none text-white fs-5" onClick={handleLink} href="">{c.titulo}</Link></li>
                    </ul>
                )}
            </div>

            <div>
                {option === categorias[0].titulo ? <Sabores/> : null}
                {option === categorias[1].titulo ? <Postres/> : null}
                {option === categorias[2].titulo ? <Palitos/> : null}
                {option === categorias[3].titulo ? <Bombones/> : null}
            </div>

          </div>
    </>
  )
}
