import Item from "./item";

//let fooditems=["dal", "roti" ,"rice" ];
//let fooditems=[];
const FoodItem=({food})=>{
    return (
        <ul>
        {food.map((item)=>(<Item key={item} fooditems={item}></Item>))}
      </ul>
    );
};
export default FoodItem;