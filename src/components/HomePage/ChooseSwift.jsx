import React from 'react';
import { FaMoneyBillWave, FaHandshake, FaGlobe, FaGavel, FaChartLine, FaPercentage, FaFileAlt, FaRocket, FaMobileAlt, FaSmile } from 'react-icons/fa';

const WhyChooseUsComponent = () => {
  const points = [
    {
      id: 1,
      title: "Payment Options",
      description:
        "Most popular methods: Bank Transfer, Cheques, Cash, and Installment Basis Plans",
      icon: <FaMoneyBillWave className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Goodwill",
      description:
        "Our team builds solid relationships with clients, ensuring continuous trust and partnerships.",
      icon: <FaHandshake className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "GCC Coverage",
      description:
        "Wide coverage with business partners across GCC countries for various required services.",
      icon: <FaGlobe className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Legal Compliance",
      description:
        "Registration cases forwarded to Dubai Court, handled by professional lawyers.",
      icon: <FaGavel className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Margin Outcome",
      description:
        "95% cases are resolved on time, ensuring your case is handled efficiently.",
      icon: <FaChartLine className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Low Commissions",
      description:
        "Specific commissions based on case-by-case basis and mutual agreement.",
      icon: <FaPercentage className="w-6 h-6" />,
    },
    {
      id: 7,
      title: "Advance Reporting",
      description:
        "Downloadable reports, real-time case updates, and dedicated customer support.",
      icon: <FaFileAlt className="w-6 h-6" />,
    },
    {
      id: 8,
      title: "Quick Service",
      description:
        "Our professionals cater to your needs with rapid services and customer satisfaction.",
      icon: <FaRocket className="w-6 h-6" />,
    },
    
    {
      id: 9,
      title: "100% Satisfaction",
      description:
        "We are committed to ensuring your satisfaction and meeting your needs.",
      icon: <FaSmile className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-[#1C1F24] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          Why Choose Swift Debt?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {points.map((point) => (
            <div
              key={point.id}
              className="rounded-lg p-6 text-left bg-[#2B2F36] hover:bg-[#343A40] transition-all hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold ml-4 text-white">
                  {point.id}. {point.title}
                </h3>
              </div>
              <p className="text-lg text-white">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;