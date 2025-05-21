import React from 'react';
import Slider from '../components/Slider';
import BillsYouCanPay from './BillsYouCanPay';
import MarqueeComponent from './MarqueeComponent';
import FAQ from './Faq';
import Newsletter from './Newsletter';
import Countup from './Countup';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <BillsYouCanPay></BillsYouCanPay>
            <Newsletter></Newsletter>
            <MarqueeComponent></MarqueeComponent>
            <FAQ></FAQ>
            <Countup></Countup>
        </div>
    );
};

export default Home;