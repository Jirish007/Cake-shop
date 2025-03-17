import React, { lazy, Suspense } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/fonts/slick.svg";
import Navbar from './Navbar';
import Footer from './Footer';
import Cakes from './Cakes';
const Testimonial = lazy(() => import("./Testimonial"));

function Home() {
 
return (
<>
<div className="App">
<Navbar />

<Cakes/>

 
<Suspense fallback={<h1></h1>}>
<Testimonial />
</Suspense>

<Footer/>

</div>
</>
);
}

export default Home;
