import { motion } from "framer-motion";
import img1 from "../../assets/Images/Financial_Services_1.jpg";
import img2 from "../../assets/Images/Financial_Services_2.jpg";
import img3 from "../../assets/Images/Financial_Services_3.jpg";

const FinancialServices = () => {
  const services = [
    {
      title: "Debt Recovery Services",
      subtitle: "Rebuilding Finances, Restoring Trust",
      description:
        "Swift Debt understands the value of strong relationships. Our recovery process is driven by empathy, confidentiality, and professionalism. We go beyond reclaiming funds - we strive to restore relationships. Our experts manage every aspect, from issuing reminders and formal notices to conducting immigration and legal checks, ensuring a seamless and stress-free experience for our clients.",
      image: img1,
    },
    {
      title: "Financial Management Services",
      subtitle: "Take Control of Your Financial Future",
      description:
        "Gain clarity and control over your finances with personalized debt management strategies. Our team of financial specialists provides actionable advice on budgeting, planning, and debt prioritization. We empower you to stay ahead of debt obligations while building a strong foundation for long-term financial stability.",
      image: img2,
    },
    {
      title: "Debt Settlement Solutions",
      subtitle: "Settle Smart, Move Forward",
      description:
        "Debt settlement is a strategic approach to reduce outstanding debts. Our experts negotiate directly with creditors on your behalf to secure favorable settlements, often for less than the original balance. Whether you're dealing with a single lender or multiple creditors, our tailored approach ensures a personalized plan that works in your favor.",
      image: img3,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-gray-900 text-white py-12 px-6 md:px-20">
      {/* Main Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Our Financial Solutions
        </h1>
        <p className="text-gray-300 text-lg">
          Comprehensive support for debt recovery, financial management, and settlement strategies.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#26415A] text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg mb-4 w-full object-cover h-44"
            />
            <h2 className="text-xl font-semibold mb-2 text-center text-white">
              {service.title}
            </h2>
            <h3 className="text-lg font-medium mb-4 text-center text-gray-300">
              {service.subtitle}
            </h3>
            <p className="text-sm text-center text-white">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FinancialServices;
