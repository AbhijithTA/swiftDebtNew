import { motion } from "framer-motion";
import Img1 from "../../assets/Images/Services_About.jpg";

const CoreServices = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-800 text-white py-12 px-6 md:px-20">
    
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Core Services</h1>
      </motion.div>

      {/* Three Procedures Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
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
        {[
          {
            title: "Amicable Negotiation",
            content:
              "We always try to resolve cases amicably and without the involvement of third parties or legal procedures.",
          },
          {
            title: "Legal Negotiation",
            content:
              "When an amicable solution cannot be found, we follow through with legal negotiation, acting on your side every step of the way.",
          },
          {
            title: "Litigation",
            content:
              "In cases where legal negotiation is unsuccessful, we support you towards recovering your money through litigation.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center "
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-6xl font-bold text-blue-600 mb-4">{index + 1}</div>
            <h2 className="text-lg font-semibold mb-4 text-center ">
              {service.title}
            </h2>
            <p className="text-center text-white">{service.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-[#26415A] rounded-lg p-8 shadow-lg text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            About Claims Recovery and Financial Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div>
              <p>
                Intelligent lending opens doors and allows ambitious individuals
                and fledgling businesses to grow. But without careful planning
                and management, financial debt can become overwhelming. Debt
                management allows borrowers to set realistic plans, anticipate
                change, and keep promises. With the guidance of experts in the
                field, you'll be able to make the most of your borrowing.
              </p>
              <p className="mt-4">
                If things go wrong, trying to manage spiraling debt can feel
                like swimming against the tide. You need someone on your side,
                taking away the stress of dealing directly with lenders and
                applying a practical approach to your problems. Fort Equity's
                solutions will get you back on track, leaving you to focus on
                what you do best.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={Img1}
                alt="Financial Management"
                className="rounded-lg shadow-md w-full h-auto max-w-sm "
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoreServices;
    