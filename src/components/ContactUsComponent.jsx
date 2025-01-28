import img from "../assets/Images/contactUs.jpg"


const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="md:text-5xl text-3xl font-bold text-green-400 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          At{" "}
          <span className="font-semibold text-green-400">
            Swift Debt Collection
          </span>
          , we are here to help you at every step of your debt recovery journey.
          Connect with our team for expert guidance and support, or visit us to
          learn more about how we can help secure your business’s financial
          stability.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image and Text Section */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 flex flex-col items-center p-8">
          <div className="w-full mb-6">
            <img
              src={img}
              alt="Swift Debt Collection Office"
              className="w-full h-64 object-contain rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-3xl font-semibold text-green-400 mb-4 text-center">
            Visit Our Office
          </h2>
          <p className="text-gray-300 leading-relaxed text-center">
            Our doors are always open for a conversation. Visit our office to
            meet our team, discuss your needs, and explore how our debt recovery
            services can help secure your financial future.
          </p>
        </div>

        {/* Contact Information and Map */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700">
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-green-400 mb-4 text-center">
              Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Business Center, 6th Floor <br />
              The Meydan Hotel Grandstand <br />
              Meydan Road, Nad Al Sheba <br />
              Dubai, United Arab Emirates <br />
              Mobile No.: 00971 55 1357953 <br />
              Landline: 00971-45163600 Ext : 8771 <br />
              Email: support@swiftdebtcollection.com
            </p>
          </div>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.412007280312!2d55.30018750000001!3d25.1555625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69270f5612c3%3A0x2d7e43041843e7d8!2sMeydan%20Free%20Zone!5e0!3m2!1sen!2sin!4v1733981430930!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
             
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
