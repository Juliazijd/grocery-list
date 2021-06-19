function ListItem(props) {
    const { item, clickItem } = props;
    return (
            <li
                key={item.id}
                className="list-item"
                onClick={() => clickItem(item)}
                value={item.title}>
                    {props.amount ? <span>{props.amount} x</span> : " "} {item.title}
            </li>
    )
}

export default ListItem;