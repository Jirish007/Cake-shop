import  Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/fonts/slick.svg"
function Navigation() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide:0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakPoint: 600,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinte: true,
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    ]
  };
    return(
        <>
        <h3>Testimonials</h3>
      <Slider {...settings}>
        
         <div className='card'>
          <p>The most delicious cakes I have ever tasted in my life.
            I was never a cake person but after this one, I became a fan of easy bake cakes.
          </p>
          <h3>Jacob Zuma</h3>
         </div>
    
         <div className='card'>
          <p>Perfect cake design worthy of a museaum display.
            Truly easy bake can not be beat with the quality cakes they are producing each and every time
          </p>
          <h3>Pierrot Janvier</h3>
         </div>

         <div className='card'>
          <p>So delighted with my 21st Birthday cake that Kelly made for my daughter.
            You should have seen the smile on her face.
          </p>
          <h3>Gigi Hadid</h3>
         </div>
    
         <div className='card'>
          <p>I am placing my second order after buying one out of hunger, it's so addictive.The flavors are a perfect match for each other and tingles your taste buds.</p>
          <h3>Cherry Gingers</h3>
         </div>
    
         <div className='card'>
          <p>One word : PERFECTO!</p>
          <h3>Lerato Shabalala</h3>
         </div>
         <div className='card'>
          <p>How do you guys manage to make me love all 1000 flavors of your cakes.
            Truly you guys are doing a good job in that department
          </p>
          <h3>Rishvi Kuthra</h3>
         </div>
      </Slider>
        </>

    );
}

export default Navigation;