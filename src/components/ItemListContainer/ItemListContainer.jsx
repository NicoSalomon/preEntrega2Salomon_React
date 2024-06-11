import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
// import Item from '../Item/Item.jsx'
import pedirProductos from '../pedirProductos/pedirProductos'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;