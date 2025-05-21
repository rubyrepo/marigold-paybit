import React, { useState, useEffect } from 'react';
import faqData from '../data/Faq.json';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        setFaqs(faqData);
    }, []);

    return (
        <div className="mx-20 mt-10">
            <h3 className="text-2xl font-semibold mb-5">Frequently Asked Questions</h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input 
                            type="radio" 
                            name="my-accordion-3" 
                            id={`faq-${index}`} 
                            className="peer"
                        />
                        <div className="collapse-title font-semibold">{faq.question}</div>
                        <div className="collapse-content text-sm">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
