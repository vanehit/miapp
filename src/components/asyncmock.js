

const products = [
    { 
        id: 1, 
        name: 'Espatula Plastica Condor', 
        price: 290, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/30987/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 25, 
        description:'Espatula Plastica Condor Para Decoracion'
    },
    { id: 2, 
        name: 'Carpeta Carton A4', 
        price: 565, 
        category: 'Comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/30436/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Carpeta Carton A4 2 Aro 20mm Rab Azul'},
    { id: 3, 
        name: 'Tyrannosaurus Rex Dna', 
        price: 6860, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/33720/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'4m-Fm002 Tyrannosaurus Rex Dna'},

    { id: 4, 
        name: 'Pad Gamer ', 
        price: 450, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/40864/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Pad Gamer Hvmp837 Acolchonado Gamenote'}
]

const categories = [
    {id: 'Artistica', description: 'Espatula Plastica Condor Para Decoracion'},
    {id: 'comercial', description: 'Carpeta Carton A4 2 Aro 20mm Rab Azul'},
    {id: 'regaleria', description: '4m-Fm002 Tyrannosaurus Rex Dna'},
    {id: 'tecnologia', description: 'Pad Gamer Hvmp837 Acolchonado Gamenote'}
]
export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 500)
    })
}