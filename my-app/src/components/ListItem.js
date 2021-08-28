import React from "react"


function ListItem({item, clickItem}) {
    return (
        <li>
            <span key={item.id} value={item.title} onClick={clickItem}>{item.title}</span>
            <span style={{display: !item.amount && "none"}}>
                <span style={{display: item.amount <= 10 && "", fontFamily: "Arial", fontSize: "15px"}}>amount:({item.amount})</span>
            </span>                    
        </li>
    )
}

export default ListItem