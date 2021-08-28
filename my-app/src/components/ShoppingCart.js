import React from "react"
import List from "./List"

function ShoppingCart({products, handleClickEmptyBasket}) { 
    return (
        <div className="Cart">
            <h2>Shoppingcart</h2>
            <button onClick={handleClickEmptyBasket} style={{display: products.length === 0 && "none"}}>Empty Cart</button>
            <List items={products} />
        </div>
    )
}

export default ShoppingCart