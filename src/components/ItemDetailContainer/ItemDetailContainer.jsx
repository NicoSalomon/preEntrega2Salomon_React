import { useEffect, useState } from 'react'
import { pedirItemPorId } from '../pedirDatos/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])


  return (
    <div className='itemList_div'>
        {item && <ItemDetail item={item} />} 
    </div>
  )
}

export default ItemDetailContainer