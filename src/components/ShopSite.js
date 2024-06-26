import { useState } from "react";
import shop1 from './cake 12.jpg'
import shop2 from './cake 15.jpg'
import shop3 from './cake 19.jpg'
function ShopSite() {
    let [increment, setIncrement] = useState(0)
    let [quantity, setQuantity] = useState(0)
    let [toggle, setToggle] = useState(false)
    let [total, setTotatl] = useState(0)
    let [numberOfItems,setNumberOfItems] = useState(0)
let [empty, setEmpty] = useState([])
let [avoidPurchase,setAvoidPurchase] = useState(false)
let [buttonInfo,setButtonInfo] = useState("ADD TO CART")
    let [ProductDetails1, setProductDetails1] = useState([
        {id:1,
            photo: shop1,
            details:"Strawberry cake" ,
            price: 250
    
        },
        {
            id:2,
            photo: shop2,
            details:"Chocolate cake" ,
            price: 250
        },
        {
            id:3,
            photo: shop3,
            details:"Black forest cake" ,
            price: 300
        }
       
    ])

    function cart(id, photo, details, price, event){

    if(id == 1){
        
    }
        setIncrement(increment + 1)
       // setEmpty([...empty,  {id,price,photo,details}])
        setEmpty([...empty,{id,photo,details,price}])

       
        setToggle(!toggle)
       setToggle(false)
}
    function preventBuy(id){
        alert(id)
    }
 function purchase() {
    alert("THANK YOU FOR PURCHASING")

 }
 function increaseNumberOfItems(inc,event){
    
setNumberOfItems(numberOfItems + 1)
 }
 function decreaseNumberOfItems(dec,event){
        setNumberOfItems(numberOfItems- 1)
        if(numberOfItems === 0){
            setNumberOfItems(0)
        }

 }

 function clickToggle(){
    
if(increment === 0) {
    setToggle(false)
    alert("CART EMPTY, please add to cart first")
}
else{
    setToggle(!toggle)
}
 }
 function removeItem(id) {
        setIncrement(increment - 1)
setEmpty(empty.filter((empy) => empy.id !== id))

 }
 let mapped =  empty.map((em) => (

    <div className="em">
      <section>
        <p onClick={()=> removeItem(em.id)}><font color="red" className="remove_p">Remove</font></p>
      </section>
      <section>
        <p onClick={(e)=> increaseNumberOfItems(em.id)}>+</p>
       <p> {numberOfItems}</p>
        <p onClick={(e)=> decreaseNumberOfItems(em.id)}>-</p>
      </section>
      <section>
      <p><img src={em.photo}></img></p>
       <p>{em.details}</p>
       <p>R{em.price}</p>
       </section>
    </div>

))
let subvalue = "CHECKOUT"
let buttonExtra = <form onSubmit={purchase}><input type="submit" value={subvalue}></input></form>

    return (
    <div className="shop_cover">
        <div className="navigation">
            <h3>HOME</h3>
    <h3 onClick={clickToggle}>
CART: <font color="white">{increment}</font>
    
    </h3>
   
</div>
<div className="outcast">
    
    {toggle? mapped: <></>}
    <div className={toggle? "em" :"remove_button"}>
        {increment === 0 ? "" :buttonExtra}
    </div>

</div>
<div className="product_cover">
<div className="product_container">

       {ProductDetails1.map((product1) => (
        <div className="product_card1" key={product1.id}>
            <img src={product1.photo}></img>
            <p>{product1.details}</p>
            <p>R{product1.price}</p>
            {<button onClick={() =>cart(product1.id, product1.photo, product1.details, product1.price)} key={product1.id} disabled={avoidPurchase}>{buttonInfo}</button>}
            </div>

        ))}
    </div>
    <h2>More cakes coming soon...</h2>
</div>
    </div>
);
};
export default ShopSite;