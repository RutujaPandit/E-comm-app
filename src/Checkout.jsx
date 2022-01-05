import "./Checkout.css"
import { v4 as uuidv4 } from 'uuid';
const Checkout = ({cart}) => {
    
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
      
        totalPrice += cart[i].qty * cart[i].price;
        
    }

    return (
        <div>
           {cart.map((item) => 
           <div className="cart-item" key={(uuidv4())}>
               <img src={item.image} alt="" width="200px" height="200px"></img>
               <p>Item:{item.description}</p>
               <p>Qty:{item.qty}</p>
               <p>Price:{item.price}</p>

           </div>
           )}

           <h2 className="h2">The total Price is {totalPrice} ₹</h2> 
        </div>
    )
}

export default Checkout;
