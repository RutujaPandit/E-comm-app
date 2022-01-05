import Product from "./Product";
import './ProductList.css'
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({products,user,setCart}) => {

   return (
      <div className="product-list">
         {products.map((product) => <Product user={user} setCart={setCart} key={product.id} {...product}></Product>)}
      </div>
   )
}

export default ProductList;
