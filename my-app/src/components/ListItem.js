import React from "react"


function ListItem({item, clickItem}) {
    return (
        <li>
            <span key={item.id} value={item.title} onClick={clickItem}>{item.title}</span>
            <span style={{display: !item.amount && "none"}}>
                <span style={{display: item.amount <= 10 && "none", fontFamily: "Arial", fontSize: "35px"}}>({item.amount})</span>
            </span>                    
        </li>
    )
}

export default ListItem