import { useEffect, useState } from 'react';
import firebase from "./firebase"

const Admin = () => {
    const [datas, setData] = useState(null)
  const ref =firebase.firestore().collection("starters")

  const getData = () =>{
    const items = [];
    ref.get().then((item) => {
      item.docs.forEach(doc => {

        items.push(doc.data())
      })
      setData(items)
      setTimeout(() => {
        console.log(datas)
      }, 3000)
      // console.log(item.docs)
      // const items = item.docs.map(doc => (doc.data))
      // setData(items)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, price, ingridient} = e.target;
    ref.add({
      name: name.value,
      price: price.value,
      ingridient: ingridient.value.split(",")
    })
  }
    return ( 
        <div>
        <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <input name="price" type="text" />
        <input name="ingridient" type="text" />
        <button type="submit">Submit</button>
      </form>
        </div>
     );
}
 
export default Admin;