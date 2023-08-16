import { useReducer } from "react"
import productReducer, { initialProduct } from "./reducers/productReducer"

export default function ProductApp() {

    const [productState, dispatch] = useReducer(productReducer, initialProduct);
    const { products, cart, activeProduct } = productState;

    return (
        <div>
            <h2>ProductApp</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                        <button>
                            Show
                        </button>
                        <button>
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Cart</h2>
            <ul>
             {cart.map((product) => (
                   <li key={product.id}>
                   {product.title}
                   <button>
                       Remove  from Cart
                   </button>
               </li>
             ))}
            </ul>

            <h2>Preview</h2>
           <p>
           {activeProduct.title}
           </p>
        </div>
    )
}