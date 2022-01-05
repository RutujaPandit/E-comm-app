import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ user, setCart, ...props }) => {

    const handleClick = () => {

        if (user === null) {
            alert('Please login to add to Cart')
        }
        else {
            setCart(cart => {

                let ans = cart.filter((item) => item.id === props.id)
                if (ans.length === 1) {
                    // Item is in cart => Quantity should be increase by 1
                    let newCart = cart.map((item) => {
                        if (item.id === props.id) {
                            let newItem = { ...item }
                            newItem.qty += 1;
                            return newItem;
                        }
                        return item;
                    })

                    return newCart;
                }
                else {
                    //Item is not in cart => Item should be in cart with quatity 1
                    let newCart = [...cart, { ...props, qty: 1 }]
                    return newCart

                }

            })
        }
    }

    return (

        <div className="product" style={{ width: "450px", height: "500px" }}>
            <Link to={`/product/${props.id}`}>
                <img id="img" src={props.image} alt="" width="200px" height="200px" />
                <h4>{props.title}</h4>
            </Link>
            <p>category:{props.category}</p>
            <p>RS:{props.price}₹</p>
            <p>Rating:{props.rating.count}</p>
            <p>Rate:{props.rating.rate}</p>
            <button id="btn" onClick={handleClick}>Add to cart</button>
        </div>
    )
}

export default Product;
