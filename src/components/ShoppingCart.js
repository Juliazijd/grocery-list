import List from "./List.js";

function ShoppingCart(props) {
    return (
        <div className="shopping-cart">
            <h4>Shopping Cart</h4>
            <List 
                items={props.items}
                clickItem={props.clickItem}
            />
            <button 
                className="empty-shoppingcart-button"
                onClick={props.emptyCart}>
                    Empty Shopping Cart
            </button>
        </div>
    )
}

export default ShoppingCart;