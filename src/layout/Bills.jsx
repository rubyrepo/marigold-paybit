import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Bills = () => {
    const { user } = useContext(AuthContext); // Access user from context
    const [bills, setBills] = useState([]);
    const [balance, setBalance] = useState(10000); // Starting balance
    const [paidBills, setPaidBills] = useState([]); // Track paid bills
    const [selectedBillType, setSelectedBillType] = useState(''); // Track selected bill type

    useEffect(() => {
        fetch('/bills.json')
            .then(res => res.json())
            .then(data => setBills(data))
            .catch(err => console.error('Failed to fetch bills:', err));
    }, []);

    const handlePayment = (amount, id) => {
        if (balance >= amount) {
            // Deduct balance and mark the bill as paid
            setBalance(prev => prev - amount);
            setPaidBills(prev => [...prev, id]);
            alert(`Payment of ৳${amount} for Bill ${id} successful!`);
        } else {
            alert("Insufficient balance!");
        }
    };

    const billTypes = Array.from(new Set(bills.map(bill => bill.bill_type))); // Get unique bill types

    // Filter bills by selected type
    const filteredBills = selectedBillType
        ? bills.filter(bill => bill.bill_type === selectedBillType)
        : bills;

    return (
        <div className="min-h-screen bg-base-100 p-6">
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded shadow">
                <div>
                    {/* Display user's name and profile image */}
                    <h2 className="text-xl font-bold">Welcome, {user?.displayName || user?.email}</h2>
                    <p className="text-md text-gray-500">Available Balance: <span className="text-green-600 font-semibold">৳{balance}</span></p>
                </div>
                <div>
                    {/* Display profile picture */}
                    {user?.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="w-10 h-10 rounded-full border-2 border-gray-300"
                        />
                    )}
                </div>
            </div>

            <div className="flex">
                {/* Aside bar */}
                <div className="w-1/4 bg-gray-100 p-4 rounded shadow mr-4">
                    <h3 className="text-lg font-semibold mb-4">Bill Types</h3>
                    <ul className="space-y-2">
                        {billTypes.map(type => (
                            <li
                                key={type}
                                className={`cursor-pointer hover:text-blue-500 ${selectedBillType === type ? 'font-semibold text-blue-600' : ''}`}
                                onClick={() => setSelectedBillType(type)}
                            >
                                {type}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bills list */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-6 text-center">Your Bills</h2>
                    <div className="flex flex-wrap gap-4 justify-start">
                        {filteredBills.map(bill => (
                            <div key={bill.id} className="bg-white shadow-md rounded-lg p-4 w-full sm:w-72">
                                <img src={bill.icon} alt={bill.bill_type} className="w-12 h-12 mb-2" />
                                <h3 className="text-xl font-semibold capitalize">{bill.bill_type}</h3>
                                <p className="text-sm text-gray-500">{bill.organization}</p>
                                <p className="text-md font-medium mt-2">Amount: ৳{bill.amount}</p>
                                <p className="text-sm text-red-500">Due: {bill.due_date}</p>

                                {/* Disable payment button if bill is already paid */}
                                <div
                                    className={`border border-gray-500 text-center my-2 py-2 rounded-md cursor-pointer hover:shadow font-semibold ${paidBills.includes(bill.id) ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                                    onClick={() => !paidBills.includes(bill.id) && handlePayment(bill.amount, bill.id)}
                                    disabled={paidBills.includes(bill.id)}
                                >
                                    {paidBills.includes(bill.id) ? 'Paid' : 'Payment'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bills;
