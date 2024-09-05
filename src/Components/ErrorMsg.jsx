
//let fooditems=["dal", "roti" ,"rice" ];
//let fooditems=[];
const ErrMsg=({food})=>{
    return(
       <>
        {food.length===0 && <h3>hungry me</h3>}
       </>
    );
};
export default ErrMsg;