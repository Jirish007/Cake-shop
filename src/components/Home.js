
import  Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/fonts/slick.svg"
import React, { useState, useEffect,lazy,Suspense } from 'react';


import Navbar from './Navbar'

import Shoppinglink from './Shoppinglink';
const Testimonial = lazy(()=>import("./Testimonial"))
const Recipe = lazy(()=>import("./Recipe"))

function Home(){
   
    var testify = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust this value to your needs
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const [animate2, setAnimate2] = useState(false);

    useEffect(() => {
      const handleScroll2 = () => {
        if (window.scrollY > 100) { // Adjust this value to your needs
          setAnimate2(true);
        } else {
          setAnimate2(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll2);
  
      return () => {
        window.removeEventListener('scroll', handleScroll2);
      };
    }, []);

    const [animate3, setAnimate3] = useState(false);

    useEffect(() => {
      const handleScroll3 = () => {
        if (window.scrollY > 100) { // Adjust this value to your needs
          setAnimate3(true);
        } else {
          setAnimate3(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll3);
  
      return () => {
        window.removeEventListener('scroll', handleScroll3);
      };
    }, []);

    return (
      <div className="App">

<Navbar/>

        <div className='second'>
       
  <div className={`second_link ${animate ? 'animate-left' : ''}`}>
    <div className='second_link_button'>
<Shoppinglink style="Shoplink"/>
    </div>
        </div>
        <div  className={`second_slider ${animate ? 'animate-right' : ''}`}>
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
      <div className={`third_1 ${animate2 ? 'animate2-left' : ''}`}>
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
      <div className={`third_2 ${animate2 ? 'animate2-right' : ''}`}>






<Shoppinglink style="Shoplink" />




      </div>
      </div>
      <div className='fourth'>
        <div className={`fourth_1 ${animate3 ? 'animate3-left' : ''}`}>
          <div className='fourth_1_text'>
  <h1>Scones and milk</h1>
  <p>Greasy Taste</p>
  </div>
        </div>
        <div className={`fourth_2 ${animate3 ? 'animate3-left' : ''}`}>
          <div className='fourth_2_text'>
  <h1>Cakes and tea</h1>
  <p>Great Taste</p>
  </div>
        </div>
      </div>
    <Suspense fallback={<h1>Loading...</h1>}>
     <Recipe/>
</Suspense>
  <Suspense fallback={<h1>Loading</h1>}>
      <Testimonial/>
      </Suspense>
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