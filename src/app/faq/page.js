import React from 'react';
import './faq.css';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is a per hour car rent?",
      answer: [
        "You can rent a chauffeured car on an hourly basis.",
        "A favourable option, for instance, if you have many business trip appointments, or for a guided sightseeing tour, or to travel along your own route.",
        "Choose start and end date/time and provide trip details for the driver in Comment field of your order form.",
        "To receive the best and more accurately priced offers with respect to your trip details, please include any relevant information: stops along the route, their location and time, preferences for the vehicle and driver."
      ]
    },
    {
      question: "How to order a delivery service?",
      answer: [
        "To order delivery, please specify delivery date, pick-up and destination points, dimensions and contents (for example, 10 kg suitcase, bouquet of flowers). Then choose an offer and specify details for your driver, if necessary."
      ]
    },
    {
      question: "How to order a ride as soon as possible?",
      answer: [
        "You can also order a ride if you need it immediately or as soon as possible. To help you choose the nearest driver offer you can check time left till the driver's arrival."
      ]
    },
    {
      question: "What is included in the price?",
      answer: [
        "Drivers offer their own prices to your request. The driver's price includes free waiting time (60 minutes at the airports, sea or river passenger port terminals, 30 minutes at the railway stations, 15 minutes at all other places), gasoline and road tolls, if any."
      ]
    },
    {
      question: "What if the driver hasn't arrived?",
      answer: [
        "First of all, try to contact your driver. The driver's contact details are specified in the ride details in your personal account. Should you fail to contact the driver via phone or chat, please report this situation to the support team."
      ]
    },
    {
      question: "Can I trust Urido drivers?",
      answer: [
        "Customers of our service evaluate drivers performance. We analyze users feedback and continue collaboration only if the contractor has flawless record.",
        "Carrier offers also contain carrier ratings so our customers can always choose the best."
      ]
    },
    {
      question: "What if my flight is delayed?",
      answer: [
        "Free waiting time at the airport is 60 minutes. If the delay is more than an hour, please contact our support team."
      ]
    },
    {
      question: "How to ensure that my luggage will fit in the car?",
      answer: [
        "Specify your luggage dimensions and the number of pieces in Comment field of the order form. For instance, 2 ski bags 180 cm long and two suitcases. Drivers will see your requirements and you will receive offers from drivers with appropriate vehicles. If you still hesitate, please, contact our support team."
      ]
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1>Frequently Asked Questions</h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h2>{faq.question}</h2>
              <div className="faq-answer">
                {faq.answer.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;