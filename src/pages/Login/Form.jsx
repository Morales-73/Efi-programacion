import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {langcontext} from '../../context/langContext'
import {themeContext} from '../../context/themeContext'

export default function Form() {

    const {idioma} = useContext(langcontext)
    const {theme} = useContext(themeContext)

    const {correo, contraseña, recuerdame, contraseñaOlvidada, sesion, noTienesCuenta, registrar} = idioma

  return (
    <>
        <div className="mb-6 pb-5">
            <form className="d-flex flex-column p-3">

                <label className={`text-${theme.color}`} htmlFor="correo">{correo}</label>
                <input id="correo" className="form-control mb-3" type="text" />

                <label className={`text-${theme.color}`} htmlFor="contraseña">{contraseña}</label>
                <input id="contraseña" className="form-control mb-3" type="text" />

                <div>
                    <input type="checkbox" className="form-check-input mb-5 me-2" name="" id="checkbox" />
                    <label className={`text-${theme.color} me-5`} htmlFor="checkbox">{recuerdame}</label>

                    <Link className={`text-${theme.color}`}>{contraseñaOlvidada}</Link>
                </div>
                
                <button className="d-grid col-6 btn btn-primary mb-2">{sesion}</button>

                <div className="d-flex">
                    <span className={`text-${theme.color} me-2`}>{noTienesCuenta}</span>
                    <Link to={"/registrarse"} className="text-danger fs-6">{registrar}</Link>
                </div>

            </form>
        </div>
    </>
  )
}
