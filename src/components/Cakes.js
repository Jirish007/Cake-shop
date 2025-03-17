import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/fonts/slick.svg";
import Shoppinglink from './Shoppinglink';
import './stylings/cakes.css'
function Cakes(){
var testify = {
dots: true,
infinite: true,
speed: 500,
arrows: false,
slidesToShow: 1,
slidesToScroll: 1,
};

return(
<>
<div className='second'>
<div className="second_link">
<div className='second_link_button'>
<Shoppinglink style="Shoplink" />
</div>
</div>
<div className="second_slider">

<div className='second_slider_one'>
<h3>Just for you</h3>
<p>Our cakes are made entirely to suit a wide variety of occasions. From your little one's birthday to an elderly person</p>
</div>


</div>
</div>
<div className='third'>
<div className="third_1">
<Slider {...testify}>
<div className='third_slider_one'>
<h3>Fine ingredients</h3>
<p>With carefully selected baking ingredients, our cakes are sure to leave you wanting more</p>
</div>
<div className='third_slider_two'>
<h3>Over 1000</h3>
<p>We have produced over 1000 unique cake designs over the past decade.</p>
</div>
</Slider>
</div>
<div className="third_2">
<Shoppinglink style="Shoplink" />
</div>
</div>

</>
)
}
export default Cakes;