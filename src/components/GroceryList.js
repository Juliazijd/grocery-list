import InputField from "./InputField";
import List from "./List.js";

function GroceryList(props) {
    return (
        <div className="grocery-list">
            <h4>Grocery List</h4>
            <List 
                items={props.items} 
                clickItem={props.clickItem}
            />
            <InputField 
                handleSubmit={props.handleSubmit} 
                handleChange={props.handleChange}
                value={props.inputValue}
            />
        </div>
    )
}

export default GroceryList;