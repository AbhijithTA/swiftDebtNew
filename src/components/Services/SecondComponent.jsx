import { motion } from "framer-motion";
import img1 from "../../assets/Images/Financial_Services_1.jpg";
import img2 from "../../assets/Images/Financial_Services_2.jpg";
import img3 from "../../assets/Images/Financial_Services_3.jpg";

const FinancialServices = () => {
  const services = [
    {
      title: "Recovery Solutions",
      description:
        "Fort Equity values the importance of long-established relationships, and our team handles cases with sensitivity, discretion, and respect, with a view to recovering not only monies but also relationships. We offer support every step of the way, including making necessary calls, notices, and visits, and carrying out immigration and police checks.",
      image: img1,
    },
    {
      title: "Financial Management",
      description:
        "At Fort Equity, we pull together our wisdom and expertise to make debt work for you. Take charge of your debt with guidance from our experts. Education, planning, and budgeting will help you to not only manage current debt but also plan for the future.",
      image: img2,
    },
    {
      title: "Financial Settlement",
      description:
        "Debt settlement is negotiating with creditors to settle a debt for less than what is owed. This method is most often used to settle substantial debt with a single creditor, but can be used to deal with multiple creditors. We ensure a pragmatic and customized solution to suit your needs.",
      image: img3,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-gray-900 text-white py-12 px-6 md:px-20">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Our Financial Services
        </h1>
        <p className="text-gray-300 text-lg">
          Expert solutions for recovery, management, and settlement.
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
            <h2 className="text-xl font-semibold mb-4 text-center text-white">
              {service.title}
            </h2>
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
