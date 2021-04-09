const MenuItems = ({item}) => {
    return ( 
        <div>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h3>{item.ingridient}</h3>
            {/* {item.price.map(element => 
                <h3>{element}</h3>
            )} */}
            {/* {item.ingridient.map(element => 
                <h4>{element}</h4>
            )} */}
        </div>
     );
}
 
export default MenuItems;