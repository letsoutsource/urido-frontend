import React from 'react';
import './faq.css';
import Head from 'next/head';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is a per hour car rent?",
      answer: [
        "You can rent a chauffeured car on an hourly basis for a premium ride experience.",
        "Ideal for business trips, sightseeing, or personal routes with flexible stops.",
        "Simply choose start and end date/time and add details in the taxi booking comment field.",
        "To get the most accurate quote, mention all details such as stopovers, timing, and vehicle preferences."
      ]
    },
    {
      question: "How to order a delivery service?",
      answer: [
        "To order a delivery service, provide delivery date, pick-up and drop-off points, package contents and size (e.g., 10 kg suitcase or flowers).",
        "Then select an offer and add any details for the driver if needed."
      ]
    },
    {
      question: "How to order a ride as soon as possible?",
      answer: [
        "You can request a ride service for immediate needs. Check driver availability and estimated arrival time for the closest match."
      ]
    },
    {
      question: "What is included in the price?",
      answer: [
        "Our taxi services include the driver’s rate, fuel, tolls, and free waiting time (60 mins at airports, 30 mins at stations, 15 mins elsewhere)."
      ]
    },
    {
      question: "What if the driver hasn't arrived?",
      answer: [
        "First, contact the driver directly using the contact info in your booking details.",
        "If there's no response, reach out to our support team right away."
      ]
    },
    {
      question: "Can I trust Urido drivers?",
      answer: [
        "Yes. All drivers are reviewed by customers and must maintain high ratings to continue offering ride services through our platform.",
        "Ratings help you choose the most reliable driver for your journey."
      ]
    },
    {
      question: "What if my flight is delayed?",
      answer: [
        "Airport transfer bookings include 60 minutes of free waiting time.",
        "If your flight is delayed beyond this, please inform our support team."
      ]
    },
    {
      question: "How to ensure that my luggage will fit in the car?",
      answer: [
        "Mention your luggage size and quantity in the taxi booking comments — for example, 2 ski bags and 2 suitcases.",
        "Drivers will offer vehicles that meet your needs. Still unsure? Contact support."
      ]
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-content">
      <Head>
        <title>FAQs | uRido Taxi Booking & Chauffeured Rides</title>
        <meta
          name="description"
          content="Find answers to your questions about taxi booking, airport transfer, chauffeured car rentals, and delivery services with uRido."
        />
        <meta
          name="keywords"
          content="taxi booking, airport transfer, chauffeured car, ride service, delivery service, premium ride, taxi services UK"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.urido.co.uk/faq" />
      </Head>
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
