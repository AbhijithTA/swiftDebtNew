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
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Our Core Services
        </h1>
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
            title: "Amicable Settlement",
            content:
              "We prioritize peaceful resolutions by facilitating direct negotiations, aiming to settle debts without involving third parties or legal action.",
          },
          {
            title: "Legal Mediation",
            content:
              "When a mutual agreement isn't possible, we step in with structured legal mediation, ensuring your interests are represented every step of the way.",
          },
          {
            title: "Litigation Support",
            content:
              "If mediation fails, we provide full legal support, guiding you through the litigation process to ensure a fair and timely debt recovery.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center "
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {index + 1}
            </div>
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
                Effective lending empowers individuals and businesses to achieve
                their goals. However, without proper oversight, debt can quickly
                become unmanageable. Our debt management services provide
                structured plans that help borrowers maintain control, adapt to
                changes, and meet financial commitments. With expert guidance,
                you can maximize the benefits of your borrowing while minimizing
                risk.
              </p>
              <p className="mt-4">
                When debt becomes overwhelming, managing it alone can feel
                impossible. This is where Swift Debt steps in. We relieve you
                from the burden of dealing with lenders, offering practical,
                results-driven solutions. Our proven approach puts you back in
                control, so you can focus on growing your business or achieving
                your personal financial goals
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
