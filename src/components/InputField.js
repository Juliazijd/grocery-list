function InputField(props) {
        return (
            <form 
                className="input-field"
                onSubmit={props.handleSubmit}
            >
                <input 
                    type="text" 
                    name="itemToAdd" 
                    placeholder="Add grocery" 
                    onChange={props.handleChange} 
                    value={props.value}
                
                    />
                <button disabled={props.value < 1}>Add</button>
            </form>
        )
}

export default InputField;