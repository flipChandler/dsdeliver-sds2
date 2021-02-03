import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect , useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

//responsável por trazer dinamicamicamente os dados via api
function Orders() {

    const [products, setProducts] = useState<Product[]>([]); {/* products vai inicializar com uma lista vazia */}


    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);


    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation />
        </div>
    )
}

export default Orders;