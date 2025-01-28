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
        "Whether our clients come to us in a rare moment of crisis or return to us again and again, we take the time to establish strong and trusting relationships with every individual and business that approaches us.",
      image: handShake, 
    },
    {
      title: "Honesty & Integrity",
      description:
        "From the very first point of contact with Fort Equity, you can be sure of our complete transparency. No false promises, no cutting corners, no mixed messages.",
      image: Honesty, 
    },
    {
      title: "Wisdom & Understanding",
      description:
        "Our team’s combined experience across a wide range of business sectors gives Fort Equity not only expertise but also intuitive wisdom to handle each case with care, attention to detail, and success.",
      image: wisdom, 
    },
    {
      title: "Sincerity & Respect",
      description:
        "All members of the Fort Equity team are personally invested in looking after our clients. We understand that when financial relationships break down, there’s always a human impact.",
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
            Welcome to Swift Debt
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            We are a Claims Recovery and Financial Management Services company
            based in Dubai, UAE. Fort Equity handles a comprehensive range of
            financial recoveries such as invoices, insurance payments, supplier
            and rent payments, personal and business loans, and more. Our team
            is built on traditional values, offering a client-focused service
            with efficiency and expertise.
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