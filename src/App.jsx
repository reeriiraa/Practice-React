import { useState } from 'react'
import './App.css'
import FoodItem from './Components/foodItem';
import ErrMsg from './Components/ErrorMsg';
import Container from './Components/Container';
import FoodInput from './Components/FoodInput';

function App() {
let fooditems=["dal", "roti" ,"rice" ];
//let fooditems=[];
// if(fooditems.length===0){
//   return <h3>i am still hungry</h3>;
// }

  return (
    <>
      <Container>
        <h1>Healthy foods</h1>
        <FoodInput/>
        <ErrMsg food={fooditems} />
        <FoodItem food={fooditems} />
      </Container>
      <Container>
        <button onClick={(event)=>console.log(`${event} button clicked`) }>Buy</button>
      </Container>
    </>
  );
}

export default App;
