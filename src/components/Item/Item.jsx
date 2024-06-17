import React from "react"
import { Form, Link } from "react-router-dom"
import './Item.css'

const Item = ( {producto} ) => {
    return (
        <div className="container">
            <img src={producto.image} alt={producto.title} />
            <div>
                <h4>{producto.title}</h4>
                <p>Precio: ${producto.price}</p>
                <p>Categoria: {producto.categoria}</p>
                <Link className="ver_mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>          
        </div>
    )
}

export default Item