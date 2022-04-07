import ItemDetail from '../ItemDetail/ItemDetail'

const ItemList = ({products}) => {

    return(
        <div>
            {products.map(prod => <ItemDetail key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList 