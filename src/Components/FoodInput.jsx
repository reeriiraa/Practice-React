const FoodInput = () => {
  return <input type="text" placeholder="Your Value" onChange={(e)=>{console.log(e.target.value)}}></input>;
};
export default FoodInput;
