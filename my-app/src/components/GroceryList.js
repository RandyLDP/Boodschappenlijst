import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList({products, handleClickGroceryItem, addGrocery}) {    
    return (
        <div className="Shoppinglist">
            <h2>Shoppinglist</h2>
            <InputField onSubmit={addGrocery}/>
            <List items={products} handleClickItem={handleClickGroceryItem}/>
        </div>
    )
}

export default GroceryList