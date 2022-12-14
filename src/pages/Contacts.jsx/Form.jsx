import React, {useContext} from 'react'
import {themeContext} from '../../context/themeContext'
import {langcontext} from "../../context/langContext";

export default function Form() {

    const {theme} = useContext(themeContext)
    const {idioma} = useContext(langcontext)

    const {nombre, correo, mensaje, enviar} = idioma

  return (
    <>
        <div className="p-5 mb-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className={`form-label text-${theme.color}`}>{nombre}</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className={`form-label text-${theme.color}`}>{correo}</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${theme.color}`}>{mensaje}</label>
                    <textarea className="form-control" style={{resize: "none"}} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">{enviar}</button>
                </div>
            </form>
        </div>
    </>
  )
}
