import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const Countup = () => {
    const [showCountUp, setShowCountUp] = useState(false);
    const countUpRef = useRef();

    useEffect(() => {
        const onScroll = () => {
            if (!countUpRef.current) return;
            const top = countUpRef.current.getBoundingClientRect().top;
            if (top < window.innerHeight && !showCountUp) {
                setShowCountUp(true);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [showCountUp]);

    return (
        <div className="mx-20 my-20 py-10">
            <h3 className="text-3xl md:text-4xl text-center font-bold">We Provide Best Payment Services</h3>
            <p className="text-center py-4 text-sm md:text-base max-w-2xl mx-auto">
                Our platform connects you with verified payment gateways across various services — all at your convenience.
            </p>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mx-20"
                ref={countUpRef}
            >
                <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                    <img src="Group.png" alt="" className="mx-auto mb-4" />
                    <p className="text-4xl md:text-5xl font-bold">
                        {showCountUp && <CountUp start={0} end={356} duration={3} suffix="+" />}
                    </p>
                    <p className="text-gray-500 text-lg mt-2">Payment Services</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                    <img src="fi_7804340.png" alt="" className="mx-auto mb-4" />
                    <p className="text-4xl md:text-5xl font-bold">
                        {showCountUp && <CountUp start={0} end={467} duration={3} suffix="+" />}
                    </p>
                    <p className="text-gray-500 text-lg mt-2">Total Reviews</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                    <img src="fi_2854545.png" alt="" className="mx-auto mb-4" />
                    <p className="text-4xl md:text-5xl font-bold">
                        {showCountUp && <CountUp start={0} end={4506} duration={3} suffix="+" />}
                    </p>
                    <p className="text-gray-500 text-lg mt-2">Bills Paid</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                    <img src="fi_3160069.png" alt="" className="mx-auto mb-4" />
                    <p className="text-4xl md:text-5xl font-bold">
                        {showCountUp && <CountUp start={0} end={300} duration={3} suffix="+" />}
                    </p>
                    <p className="text-gray-500 text-lg mt-2">Total Staff</p>
                </div>
            </div>
        </div>
    );
};

export default Countup;
