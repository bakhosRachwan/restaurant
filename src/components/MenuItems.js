const MenuItems = ({ item, handleDelete }) => {
    return ( 
        <div>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h3>{item.ingridient}</h3>
            <button onClick={() => handleDelete(item)}>DELETE</button>
        </div>
     );
}
 
export default MenuItems;