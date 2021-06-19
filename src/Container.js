import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
    constructor() {
        super();
        this.state = {
            groceryItems: [
                { id: 1, title: "Brood" },
                { id: 2, title: "Havermout"},
                { id: 3, title: "Humus" },
                { id: 4, title: "Komkommer" },
                { id: 5, title: "Chips" },
            ],

            shoppingListItems: [],
            inputValue: ""
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.handleClickShoppingCartItem = this.handleClickShoppingCartItem.bind(this);
        this.emptyShoppingCart = this.emptyShoppingCart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addAmount = this.addAmount.bind(this);
    }

    async handleClickGroceryItem(item) {
        const title = item.title;
        const shoppingListItems = this.state.shoppingListItems;
        const findItem = shoppingListItems.some((item) => {
            return item.title === title;
        });

        if(!findItem) {
            await this.setState((prevState) => {
                const id = prevState.shoppingListItems.length + 1;
    
                return {
                    shoppingListItems: [
                        ...prevState.shoppingListItems,
                        { id: id, title: title, amount: 1}
                    ]
                };
            });
        } else {
            this.addAmount(title);
        }
    };
    addAmount(title) {
        const prevState = this.state.shoppingListItems;

        const updatedState = prevState.map((item) => {
            if (item.title === title) {
                item.amount = item.amount + 1;
            };

            return item;
        });

        this.setState({shoppingListItems: updatedState})
    };
    handleClickShoppingCartItem(item) {
        this.setState(prevState => {
            return {
                shoppingListItems: [
                    ...prevState.shoppingListItems.filter(el => el !== item)
                ]
            }
        })
    }

    emptyShoppingCart() {
        this.setState({ shoppingListItems: [] });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState((prevState) => {
            const id = prevState.groceryItems.length + 1;
            const title = this.state.inputValue;

            return {
                groceryItems: [
                    ...prevState.groceryItems,
                    { id: id, title: title}
                ]
            };
        });
    };

    handleChange(event) {
        const value = event.target.value;
        this.setState({ inputValue: value});
    };

    render() {
        return (
            <div className="container">
                <GroceryList 
                    items={this.state.groceryItems} 
                    clickItem={this.handleClickGroceryItem} 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    inputValue={this.state.inputValue}
                />
                <ShoppingCart 
                    items={this.state.shoppingListItems} 
                    emptyCart={this.emptyShoppingCart}
                    clickItem={this.handleClickShoppingCartItem} 
                />
            </div>
        )
    }
}

export default Container;