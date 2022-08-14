import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import HomeContact from './HomeContact/HomeContact';
import HomeReview from './HomeReview/HomeReview';
import HomeShop from './HomeShop/HomeShop';
import HomeWorkout from './HomeWorkout/HomeWorkout';

const Home = () => {
    return (
        <div>
           <Banner/>
           <HomeWorkout/>
           <HomeShop/>
           <HomeReview/>
           <HomeContact/>
           <Footer/>
        </div>
    );
};

export default Home;