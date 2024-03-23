import { useContext } from "react";
import MyContext from "../context/MyContext";

const Content = ({}) => {
  const { products } = useContext(MyContext);
  
 return (
    <div className='card'>
       <ul> {products.map(product=> (<li key = {product.id}>{product.name} - ${product.price}</li>))} </ul>
    </div>
  )
}

export default Content