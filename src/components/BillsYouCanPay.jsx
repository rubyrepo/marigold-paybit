import React, { useEffect, useState } from 'react';
import billsData from '../data/PayBillFor.json'; 

const BillsYouCanPay = () => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        setBills(billsData);
    }, []);

    return (
        <div className='px-4 md:px-20'>
            <h3 className='text-2xl font-semibold mb-4'>Pay Bills for</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {bills.map((bill, index) => (
                    <div key={index} className="border p-4 rounded-md flex items-center bg-white shadow-sm hover:shadow-md transition">
                        <img width="48" height="48" src={bill.image} alt={bill.text} />
                        <h4 className='text-base pl-4 font-medium'>{bill.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BillsYouCanPay;
