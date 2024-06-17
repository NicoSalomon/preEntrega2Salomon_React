import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ( {productos, titulo} ) => {
    return (
        <div>
            <h2 className="titulo-itemList">{titulo}</h2>
            <div className="itemList_div">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList