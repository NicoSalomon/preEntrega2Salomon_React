import './ItemDetail.css'

const ItemDetail = ( {item} ) => {
    return (
        <div className="iDetail_div_principal">
            <div className="iDetail_div">
                <img src={item.image} alt={item.title} />
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Categoria: {item.categoria}</p>
                    <p>${item.price}</p>
                </div>     
            </div>     
        </div>
    )
}

export default ItemDetail