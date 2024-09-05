//let fooditems=["dal", "roti" ,"rice" ]


const Item = (props) =>{
    return(
        <>
        <li >{props.fooditems}</li>
        </>
    );
// const Item = ({fooditems}) =>{
//         return(
//             <>
//             <li >{fooditems}</li>
//             </>
//         );    
};
export default Item;