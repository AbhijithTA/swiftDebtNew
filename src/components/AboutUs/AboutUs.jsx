import { motion } from "framer-motion";
import handShake from "../../assets/Icons/HandShake.png";
import Honesty from "../../assets/Icons/Honesty.png";
import wisdom from "../../assets/Icons/wisdom.png";
import sincerity from "../../assets/Icons/sincerity.png";

const OurCompany = () => {
  const values = [
    {
      title: "Solid Relationships",
      description:
        "Whether our clients approach us during times of crisis or return to us regularly, we prioritize building strong and trusting relationships with every individual and business we work with.",
      image: handShake,
    },
    {
      title: "Honesty & Integrity",
      description:
        "From the first point of contact with Swift Debt Collection, we ensure complete transparency. We promise no false promises, no shortcuts, and no mixed messages.",
      image: Honesty,
    },
    {
      title: "Wisdom & Understanding",
      description:
        "Our team brings a wealth of experience across various business sectors. This expertise, combined with our intuitive wisdom, ensures we handle each case with care, attention to detail, and the best chance of success.",
      image: wisdom,
    },
    {
      title: "Sincerity & Respect",
      description:
        "Every member of the Swift Debt Collection team is personally invested in supporting our clients. We understand the human impact of financial challenges, and we work with empathy and respect in every case.",
      image: sincerity,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-6 md:px-20">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Our Company</h1>
      </motion.div>

      {/* Intro Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center"
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
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
            Welcome to Swift Debt Collection
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            We are a Debt Recovery and Financial Management Services company based in Dubai, UAE. Swift Debt Collection handles a wide range of financial recoveries, including invoices, insurance payments, supplier and rent payments, personal and business loans, and more. Our team is built on traditional values, offering client-focused service with efficiency and expertise.
          </p>
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
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
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-gray-100 to-blue-100 text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={value.image}
              alt={value.title}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-sm text-center text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurCompany;
