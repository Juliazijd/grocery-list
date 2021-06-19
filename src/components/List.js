import React from "react";
import ListItem from "./ListItem";

function List(props) {
    const { items } = props;
    const groceryListItem = items.map(item => 
        <ListItem 
            key={item.id} 
            item={item} 
            amount={item.amount}
            clickItem={props.clickItem} 
        />
        )
        return (
            <ul className="list">
                {groceryListItem}
            </ul>
        )
}

export default List;