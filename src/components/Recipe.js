

import video from './components images/Blueberry.mp4'
import Shoppinglink from './Shoppinglink';
function Recipe(){
return(
    <>
 <div className='sixth'>
        <section>
          <video controls>
  <source src={video} type='video/mp4'></source>
          </video>
          </section>
          <section>
  <p>Recipe for cakes</p>
  <br></br>
  <h2>Blueberry cake</h2>
  <br></br>
  <p>
  Celebrate the special arrival of your little one with baby shower collection.
  Baked fresh onsite from the finest ingredients</p>
  <br></br>
  <p>
  and decorated lovingly by hand.
  Our cupcakes are freshly baked to order from scratch at each of our bakeries using quality ingredients,</p>
  <br></br>
  <p>
   and we pride ourselves
  in not using preservatives.</p>

  <br></br>
  <p>
  Layers of sponge with classic hummingbird Bakery-style banded frosting design,
   decorated by hand with edible nonpareil sprinkles. 
  
  </p>
  </section>
      </div>
      <br></br>
      <div className='sixth_button'>
<Shoppinglink style="Shoplink"/>
        </div>
    </>
)
}
export default Recipe;