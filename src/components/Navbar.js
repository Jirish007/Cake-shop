import Navbarlink from "./Navbarlink";

import Logo from './components images/myPhoto_2024_12_14_12_42_13.webp'
 
import Shoplink from "./Homelink";




function Navbar(){
return(
<>
<nav className='intro'>
<div className="intro_style">
<section>
<Shoplink/>
</section>
<section>
<Navbarlink/>
</section>
</div>
<div className='first'>
<section>
<h2>Carrot Cake</h2>
<br></br>
<p>The resonance of cream and orange</p>
<br></br>
</section>
</div>
</nav>
</>
)
}
export default Navbar;