import { useEffect, useState } from 'react';
import firebase from "../firebase"
import MenuItems from './MenuItems';
// import { uuid } from 'uuidv4';

const Admin = () => {
  const [datas, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState("starters")
  const ref =firebase.firestore().collection(type)
  
  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoading(false);
    });
  }

  const handleSelect = (e) => {
    e.preventDefault();
    const {types} = e.target;
    setType(types.value)
  }
  const addSchool = (newItem) => {
    ref
      .doc(newItem.id)
      .set(newItem)
      .catch((err) => {
        console.error(err);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, price, ingridient} = e.target;
    addSchool({
      name: name.value,
      price: price.value,
      ingridient: ingridient.value.split(","),
      // id: uuid()
    })
    getData()
    e.target.reset();
  }
  useEffect(() =>{
    getData()
  }, [type])

  if(loading){
    return <h1>Loading...</h1>
  }
    return ( 
        <div>
          <form onSubmit={handleSelect}>
            <label>Type</label>
            <select name="types">
              <option value='starters'>Starters</option>
              <option value='beef burger'>Beef Burger</option>
              <option value='chicken burger'>Chicken Burger</option>
            </select>
            <button type="submit">Select</button>
          </form>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" type="text" />
          <label>Price</label>
          <input name="price" type="text" />
          <label>Ingridient</label>
          <input name="ingridient" type="text" />
          <button type="submit">Submit</button>
      </form>
      {/* {datas.map(item => {
        return <div>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
          <h4>{item.ingridient}</h4>
        </div>
      })} */}
      {datas.map(item => <MenuItems item={item} />)}
        </div>
     );
}
 
export default Admin;