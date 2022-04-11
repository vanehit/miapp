import Item from '../Item/item'
import './ItemList.css'

const ItemList = ({products}) => {

    return(
        <div className='List__group'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList 