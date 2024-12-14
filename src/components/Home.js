import React, { useState, useEffect, lazy, Suspense } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/fonts/slick.svg";
import Navbar from './Navbar';
import Shoppinglink from './Shoppinglink';
const Testimonial = lazy(() => import("./Testimonial"));
const Recipe = lazy(() => import("./Recipe"));

function Home() {
    var testify = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [animate, setAnimate] = useState(false);
    const [animate2, setAnimate2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
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

    useEffect(() => {
        const handleScroll2 = () => {
            if (window.scrollY > 5) {
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

    useEffect(() => {
        const images = document.querySelectorAll('.pop-up');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('pop-up-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        images.forEach(image => {
            observer.observe(image);
        });

        return () => {
            images.forEach(image => {
                observer.unobserve(image);
            });
        };
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div className='second'>
                <div className={`second_link ${animate ? 'animate-left' : ''}`}>
                    <div className='second_link_button'>
                        <Shoppinglink style="Shoplink" />
                    </div>
                </div>
                <div className={`second_slider ${animate ? 'animate-right' : ''}`}>
                    <Slider {...testify}>
                        <div className='second_slider_one pop-up'>
                            <h3>Just for you</h3>
                            <p>Our cakes are made entirely to suit a wide variety of occasions. From your little one's birthday to an elderly person</p>
                        </div>
                        <div className='second_slider_two pop-up'>
                            <h3>Areas</h3>
                            <p>We always make sure all our customers around SA have easy access to our shops around all 9 provinces</p>
                        </div>
                        <div className='second_slider_three pop-up'>
                            <h3>Loyalty</h3>
                            <p>We always make sure our loyal customers are better taken care of with free discounts and cake giveaways</p>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='third'>
                <div className={`third_1 ${animate2 ? 'animate2-left' : ''}`}>
                    <Slider {...testify}>
                        <div className='third_slider_one pop-up'>
                            <h3>Fine ingredients</h3>
                            <p>With carefully selected baking ingredients, our cakes are sure to leave you wanting more</p>
                        </div>
                        <div className='third_slider_two pop-up'>
                            <h3>Over 1000</h3>
                            <p>We have produced over 1000 unique cake designs over the past decade.</p>
                        </div>
                        <div className='third_slider_three pop-up'>
                            <h3>Best choice</h3>
                            <p>Our bakery is known worldwide as the best bakery in South Africa</p>
                        </div>
                    </Slider>
                </div>
                <div className={`third_2 ${animate2 ? 'animate2-right' : ''}`}>
                    <Shoppinglink style="Shoplink" />
                </div>
            </div>

            <Suspense fallback={<h1>Loading...</h1>}>
                <Recipe />
            </Suspense>
            <Suspense fallback={<h1>Loading</h1>}>
                <Testimonial />
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
