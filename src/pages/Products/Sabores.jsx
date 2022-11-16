import React, {useContext} from 'react';
import {themeContext} from '../../context/themeContext';
import {langcontext} from "../../context/langContext";


export default function Sabores() {

  const {theme} = useContext(themeContext)
  const {idioma} = useContext(langcontext)

  const {sabores, categorias} = idioma

  return (
    <>
        <div className="container mb-5 p-5">
          <div className="d-flex justify-content-evenly align-items-center flex-wrap p-5 gap-4">
            {sabores.map(s =>
              <div key={s.id} className="text-center mb-5 p-2" style={{width:"265px",height:"450px"}}>
                <div>
                  <img className="rounded-4 img-fluid mb-3 rounded-circle" src={s.img} style={{width:"245px", height:"245px"}} alt="img" />
                  <h4 className={`text-${theme.color} mb-3`}>{s.name}</h4>
                  <h6 className={`mb-5 text-${theme.color}`}>{s.descripcion}</h6>
                </div>
                <button className="btn btn-outline-primary w-100">Texto</button>
              </div>
            )}
          </div>
        </div>
    </>
  )
}
