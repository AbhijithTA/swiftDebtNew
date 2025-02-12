import { motion } from "framer-motion";

const MoreServices = () => {
  const services = [
    // {
    //   title: "Skip Tracing",
    //   subtitle: "Locate & Track with Precision",
    //   description:
    //     "We specialize in tracking and locating individuals for various purposes, ensuring timely recovery and accountability.",
    //   icon: "👤",
    // },
    {
      title: "Criminal Record Verification",
      subtitle: "Know the Background, Stay Informed",
      description:
        "Access detailed reports on active and closed criminal records related to the debtor, offering complete transparency and informed decision-making.",
      icon: "⚖️",
    },
    {
      title: "Credit Assessment Report",
      subtitle: "Understand Creditworthiness, Minimize Risk",
      description:
        "Get a comprehensive report on a company's financial position, assets, and credit standing to make smarter, data-driven decisions.",
      icon: "💳",
    },
    {
      title: "Court-Issued Legal Notices",
      subtitle: "Formal Notifications with Legal Backing",
      description:
        "Notify debtors of overdue payments through official court-issued legal notices, adding weight and urgency to your claims.",
      icon: "📜",
    },
    {
      title: "Police Case Initiation",
      subtitle: "Swift Action for Serious Cases",
      description:
        "We facilitate the preparation of bank reports and required documentation to activate police cases and expedite recovery.",
      icon: "🚔",
    },
    {
      title: "Field Investigation Reports*",
      subtitle: "On-Site Assessments for Deeper Insights",
      description:
        "Our agents conduct in-person visits to assess the debtor's business operations, assets, and financial standing for a complete situational overview.",
      icon: "📋",
    },
    {
      title: "Certified Legal Translations",
      subtitle: "Accurate, Certified Translations for Legal Use",
      description:
        "Our legal translation services ensure 100% accuracy for official court documents, meeting regulatory requirements and eliminating language barriers.",
      icon: "🌐",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-800 to-gray-800 text-white py-12 px-6 md:px-20">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          More About Our Services
        </h1>
        <p className="text-gray-300 text-lg">
          Explore additional ways we can help you with professional expertise.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-start bg-[#26415A] text-gray-900 rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-blue-500 text-4xl mr-4">{service.icon}</div>
            <div>
              <h2 className="text-xl font-semibold mb-1 text-white">
                {service.title}
              </h2>
              <p className="text-sm text-gray-400 mb-2">{service.subtitle}</p>
              <p className="text-gray-600 text-sm text-white">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MoreServices;