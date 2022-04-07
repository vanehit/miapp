import './ItemDetail.css'

const ItemDetail = ({ name, img}) => {
    return(
        <div className='container__detail'>
            <div className='card__container'>
            
                <div className='image__container'>
                    <img src={img} alt={name}/>
                </div>
                <div className='card__title'>
                    <h3>{name}</h3>
                </div>
                <div className='btn__card'>
                    <button>Ver Detalle</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail 