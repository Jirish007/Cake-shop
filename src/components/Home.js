import React, { lazy, Suspense } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/fonts/slick.svg";
import Navbar from './Navbar';

const Testimonial = lazy(() => import("./Testimonial"));
const Recipe = lazy(() => import("./Recipe"));
const Cakes = lazy(() => import("./Cakes"));
const Footer = lazy(() => import("./Footer"));
function Home() {
   
    return (
        <>
        <div className="App">
            <Navbar />
            <Suspense fallback={<h1>Loading..</h1>}>
            <Cakes/>
            </Suspense>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Recipe />
            </Suspense>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Testimonial />
            </Suspense>
          <Suspense fallback={<h1>Loading...</h1>}>
          <Footer/>
          </Suspense>
        </div>
        </>
    );
}

export default Home;
