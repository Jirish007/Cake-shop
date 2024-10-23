
import {  Link } from "react-router-dom";

function Shoppinglink(props){
return(

<div className={props.style}>
  <button>
      <Link to="/shopsite" style={{color:"chocolate", textDecoration:"none"}}>Shopping</Link>
          </button>
    </div>
)
}
export default Shoppinglink