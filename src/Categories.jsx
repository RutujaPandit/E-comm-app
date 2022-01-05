import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import './Categories.css';
    function calculateRender(categories) {
      return ( 
        <ul>
            { categories.map((category) => {
                return <li><Link to={"/categories/" + category}>{category}</Link></li>
            })}

        </ul>)

    }
const Categories = () => {

    const [categories,setCategories] = useState(null);

    useEffect( ()=>{

        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
 },[])
    return (
        <div className="categories">
            {categories === null ?<p> Data is loading</p> : calculateRender(categories)}
            
        </div>
    )
}

export default Categories;
