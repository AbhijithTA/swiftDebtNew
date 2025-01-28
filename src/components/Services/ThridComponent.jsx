
import { motion } from "framer-motion";

const MoreServices = () => {
  const services = [
    {
      title: "Skip Tracing",
      description:
        "The process of locating a person's whereabouts for any number of purposes.",
      icon: "👤", // Replace this with an SVG or icon if needed
    },
    {
      title: "Criminal Record Checks",
      description:
        "Report will indicate the number of active and closed criminal records against the client.",
      icon: "⚖️",
    },
    {
      title: "Credit Rating Report",
      description:
        "A report that indicates information on the business including assets and credit ability.",
      icon: "💳",
    },
    {
      title: "Legal Notice by Court",
      description:
        "Legal notice sent directly from court to notify the debtor of the overdue amount.",
      icon: "📜",
    },
    {
      title: "Initiating Police Case",
      description:
        "Include obtaining a bank report and submitting required documents to activate a police case.",
      icon: "🚔",
    },
    {
      title: "Field Visit Report",
      description:
        "A field visit where an agent meets with the debtor to gather details on business size, assets, and liabilities.",
      icon: "📋",
    },
    {
      title: "Legal Translation",
      description:
        "Legal translation of texts accompanied by certified accuracy for court documents.",
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">More About Our Services</h1>
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
              <h2 className="text-xl font-semibold mb-2 text-white">{service.title}</h2>
              <p className="text-gray-600 text-sm text-white">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MoreServices;
