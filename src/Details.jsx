import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react';
import './Details.css';
function detailsJsx(Details){

    const Jsx= (
        <div>
            <img src={Details.image} alt=""  width="300px" height="300px"/>
            <h3>{Details.title}</h3>
            <p>Category:{Details.category}</p>
            <p>Description:{Details.description}</p>
            <p>Price:{Details.price}₹</p>
        </div>
    )
    return Jsx;
}
const Details = () => {

    const params = useParams()
    const [Details,setDetails] = useState(null)

    useEffect( ()=>{
        
        fetch('https://fakestoreapi.com/products/'+params.id)
            .then(res=>res.json())
            .then(json=>setDetails(json))
            .catch(err => alert(err))
    },[params.id])


    return (
        <div className="Details">
          {Details === null ? <p>Data is loading</p> :detailsJsx(Details)}
        </div>
    )
}

export default Details;
