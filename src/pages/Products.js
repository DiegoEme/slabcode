import React, {useEffect} from 'react'
import axios from 'axios';

function Products() {
    

     useEffect(() => {
        const baseUrl = "https://www.wonapp.co/products/top";
        
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        axios.get(baseUrl, config)
        .then((response) => {console.log('products', response)})
        .catch((error) => {console.log(error)})
    }) 

    return (
        <div>
            hola desde productos
        </div>
    )
}

export default Products
