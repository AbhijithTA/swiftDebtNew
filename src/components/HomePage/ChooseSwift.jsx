import React from "react";
import {
  FaMoneyBillWave,
  FaHandshake,
  FaBullseye,
  FaAward,
  FaUsers,
  FaBalanceScale,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const WhyChooseUsComponent = () => {
  const points = [
    {
      id: 1,
      title: "Efficient and Cost-Effective Debt Recovery",
      description:
        "SDC aims to collect outstanding debt with the highest efficiency and at comparatively lower costs.",
      icon: <FaMoneyBillWave className="w-12 h-6" />,
    },
    {
      id: 2,
      title: "No-Win, No-Fee Guarantee",
      description:
        "SDC services operate on a purely no-win, no-fee basis, ensuring that you receive an invoice only after funds have safely cleared into your account.",
      icon: <FaHandshake className="w-12 h-6" />,
    },
    {
      id: 3,
      title: "Focused and Result-Driven Approach",
      description:
        "The no-win, no-fee model not only benefits your business but also ensures we remain focused on recovering the debt in full within the shortest time possible.",
      icon: <FaBullseye className="w-12 h-6" />,
    },
    {
      id: 4,
      title: "Commitment to Excellence and Professionalism",
      description:
        "Swift Debt Collection's vision is results-oriented, striving to exceed expectations and provide top-class service while maintaining professionalism.",
      icon: <FaAward className="w-12 h-6" />,
    },
    {
      id: 5,
      title: "Preserving Business Relationships",
      description:
        "Delegating debt collection to a third party not only secures delinquent debt but also helps maintain relationships with long-term customers without jeopardizing business connections.",
      icon: <FaUsers className="w-12 h-6" />,
    },
    {
      id: 6,
      title: "Legal Action as a Last Resort",
      description:
        "We consider legal action only when the creditor has a strong chance of winning and after all legal negotiations have been exhausted.",
      icon: <FaBalanceScale className="w-12 h-6" />,
    },
    {
      id: 7,
      title: "Transparent Communication and Timely Updates",
      description:
        "We ensure clear and timely communication regarding your case progress, whether in debt collection or litigation.",
      icon: <FaEnvelopeOpenText className="w-12 h-6" />,
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