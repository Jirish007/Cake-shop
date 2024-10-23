
import React from 'react';
import image16 from './components images/cake 16.jpg';
import image17 from './components images/cake 17.jpg';
import image18 from './components images/cake 18.jpg';
import image19 from './components images/cake 19.jpg'
import  Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/fonts/slick.svg"

import video from './components images/Blueberry.mp4'
import Testimonial from './Testimonial'
import Navbar from './Navbar'
import Shoplink from './Homelink';
import Shoppinglink from './Shoppinglink';



function Home(){
   
    var testify = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="App">

<Navbar/>

        <div className='second'>
       
  <div className='second_link'>
    <div className='second_link_button'>
<Shoppinglink style="Shoplink"/>
    </div>
        </div>
        <div className='second_slider'>
  <Slider {...testify}>
    <div className='second_slider_one'>
  <h3>Just for you</h3>
  <p>Our cakes are made entirely to suit a wide variety of occassions.
    From your little one's birthday to an elderly person
  </p>
    </div>
    <div className='second_slider_two'>
  <h3>Areas</h3>
  <p>We always make sure all our customers around SA have easy access to our shops around all 9 provinces</p>
    </div>
    <div className='second_slider_three'>
  <h3>Loyalty</h3>
  <p>We always make sure our loyal customers are better taken care of with free discounts and cake giveaways</p>
    </div>
  </Slider>
      </div>
      </div>
      <div className='third'>
      <div className='third_1'>
  <Slider {...testify}>
    <div className='third_slider_one'>
  <h3>Fine ingredients</h3>
  <p>With carefully selected baking ingredients, our cakes are sure to leave you wanting more</p>
    </div>
    <div className='third_slider_two'>
  <h3>Over 1000</h3>
  <p>We have produced over 1000 unique cake designs over the past decade.</p>
    </div>
    <div className='third_slider_three'>
  <h3>Best choice</h3>
  <p>Our bakery is known worldwide as the best bakery in South Africa</p>
    </div>
  </Slider>
      </div>
      <div className='third_2'>






<Shoppinglink style="Shoplink" />




      </div>
      </div>
      <div className='fourth'>
        <div className='fourth_1'>
          <div className='fourth_1_text'>
  <h1>Scones and milk</h1>
  <p>Greasy Taste</p>
  </div>
        </div>
        <div className='fourth_2'>
          <div className='fourth_2_text'>
  <h1>Cakes and tea</h1>
  <p>Great Taste</p>
  </div>
        </div>
      </div>
      <div className='fifth'>
        <h3>Preffered product</h3>
        <br>
        </br>
        <p>The cakes are maade from the combination of fresh fruit and creamy cream</p>
        <div className='cakes'>
         <div className='cakes_1' >
         <img src={image19}></img>
  <img src={image18}></img>
  <img src={image17}></img>
  <img src={image16}></img>
    </div>
    <div className='cakes_2'>
          <img src={image18}></img>
  <img src={image17}></img>
  <img src={image16}></img>
  <img src={image19}></img>
  </div>

<Shoppinglink style="Shoplink"/>




 






        </div>
      
      </div>
      <div className='sixth'>
        <p>
          <video controls>
  <source src={video} type='video/mp4'></source>
          </video>
          
  <p>Recipe for cakes</p>
  <br></br>
  <h2>Blueberry cake</h2>
  <br></br>
  Celebrate the special arrival of your little one with baby shower collection.
  Baked fresh onsite from the finest ingredients
  <br></br>
  <br></br>
  and decorated lovingly by hand.
  Our cupcakes are freshly baked to order from scratch at each of our bakeries using quality ingredients,
  <br></br>
  <br></br>
   and we pride ourselves
  in not using preservatives.
  <br></br>
  <br></br>
  Layers of sponge with classic hummingbird Bakery-style banded frosting design,
   decorated by hand with edible nonpareil sprinkles. 
  
  </p>
      </div>
      <br></br>
      <div className='sixth_button'>




<Shoppinglink style="Shoplink"/>

     







        </div>
      <div className='seventh'>
        
      
      <Testimonial/>
        
      </div>
    
      <div className='eight'>
  <h3>Contact info</h3>
  <p>email: easybake@gmail.com</p>
  <p>contact: 0343434349</p>
  <p>Address: 7 Bezuidenhout Valley 3rd str no 15, JOHANNESBURG</p>
      </div>
      
      </div>
    );
}
export default Home;