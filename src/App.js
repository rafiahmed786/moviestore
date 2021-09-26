import './App.css';
import { useEffect, useState } from 'react';
import Product from './components/products/Product';
import Cart from './components/cart/Cart';
import Header from './components/Header/Header';

function App() {
  const [data,setData]= useState([]);
  const [cart,setCart]= useState([]);

  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res=>res.json())
    .then(data=> setData(data))
  },[])

 
  const handleCart=(data)=>{

  const newCart = [...cart,data];    
newCart.map(cart =>  console.log(cart))

setCart(newCart)


}
  return (
    <div className="App">
      <Header></Header>
      
      <div style={{display:'flex'}}>
        <div style={{display:'flex',flexWrap:'wrap',width:'75%'}}>
        {
         data.map(product=><Product 
           data={product}
           key={product.id}
           handleCart={handleCart}
           ></Product>)
        }
        </div>
        
        <div>
          <Cart cart={cart}></Cart>
        </div>

      </div>
      
    </div>
  );
}

export default App;
