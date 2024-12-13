
import {  Link } from "react-router-dom";

function Navbarlink(){
return(
    <>
    <h1><Link to="/shopsite" style={{color:"black", textDecoration:"none"}}>
    <span class="material-symbols-outlined" id="shopping_bag">
shopping_bag
</span>
    </Link> </h1>
    </>
)
}
export default Navbarlink;