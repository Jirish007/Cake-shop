import Logo from './components images/myPhoto_2024_12_14_12_42_13.png'
import {Link } from "react-router-dom";
function Shoplink() {

return(
 <div className="Homelink">
 <Link to="/" style={{color:"black", textDecoration:"none"}}><img src={Logo}></img>
 </Link>
</div>

);
}
export default Shoplink;