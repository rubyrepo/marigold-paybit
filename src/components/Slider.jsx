import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { NavLink } from 'react-router';


const Slider = () => {
    return (
        <div className="w-full flex justify-center px-4 py-10">
            <Swiper
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="w-13/14"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center h-130 md:h-80 bg-gray-200 rounded-lg px-6 text-center md:text-left">
                        <img
                            src="/assets/credit-card-illust.svg"
                            alt="Credit Card Illustration"
                            className="w-40 md:w-60"
                        />
                        <div className="flex flex-col items-center md:items-start">
                            <p className="text-2xl font-semibold text-gray-700 max-w-2xl">
                                Paybit now supports all bank cards to pay your utility bills effortlessly.
                            </p>
                            <p className="text-gray-600 mt-2 max-w-md">
                                Pay your bills easily with a secure and user-friendly platform. Experience hassle-free transactions with just a few clicks.
                            </p>
                            <NavLink to={'bills'}>
                                <button className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all">
                                    Learn More
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center h-130 md:h-80 bg-gray-200 rounded-lg px-6 text-center md:text-left">
                        <img
                            src="/assets/paybit-manage.svg"
                            alt="Manage Payments"
                            className="w-40 md:w-60"
                        />
                        <div className="flex flex-col items-center md:items-start">
                            <p className="text-2xl font-semibold text-gray-700 max-w-2xl">
                                Manage all your payments securely through our platform.
                            </p>
                            <p className="text-gray-600 mt-2 max-w-md">
                                With Paybit, you can manage all your transactions in one place, ensuring security and ease of use.
                            </p>
                            <NavLink to={'bills'}>
                                <button className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all">
                                    Get Started
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center h-130 md:h-80 bg-gray-200 rounded-lg px-6 text-center md:text-left">
                        <img
                            src="/assets/paybit-enjoy.svg"
                            alt="Enjoy Integration"
                            className="w-40 md:w-60"
                        />
                        <div className="flex flex-col items-center md:items-start">
                            <p className="text-2xl font-semibold text-gray-700 max-w-2xl">
                                Enjoy seamless integration with various payment methods.
                            </p>
                            <p className="text-gray-600 mt-2 max-w-md">
                                Paybit supports a wide range of payment methods for your convenience. Simplify your financial life with us.
                            </p>
                            <NavLink to={'bills'}>
                                <button className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all">
                                    Explore Options
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center h-130 md:h-80 bg-gray-200 rounded-lg px-6 text-center md:text-left">
                        <img
                            src="/assets/paybit-secure.svg"
                            alt="Secure Payment"
                            className="w-40 md:w-60"
                        />
                        <div className="flex flex-col items-center md:items-start">
                            <p className="text-2xl font-semibold text-gray-700 max-w-2xl">
                                Paybit guarantees the highest level of security for your transactions.
                            </p>
                            <p className="text-gray-600 mt-2 max-w-md">
                                Trust Paybit for secure, encrypted transactions that protect your financial data every step of the way.
                            </p>
                            <NavLink to={'bills'}>
                                <button className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all">
                                    Learn More
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
