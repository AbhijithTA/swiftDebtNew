import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import img from "../assets/Images/contactUs.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    inquiryType: "",
    inquiryDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
    const USER_ID = "YOUR_USER_ID"; // Replace with your EmailJS user ID

    // Send the email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Your inquiry has been submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          inquiryType: "",
          inquiryDetails: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to submit the form. Please try again.");
      });
  };

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
        {/* Form Section */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 p-8">
          <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">
            How Can We Help You?
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Mobile
              </label>
              <div className="flex">
                
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Inquiring About?
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="B2B Debt Recovery">B2B Debt Recovery</option>
                <option value="Bounced Cheque">Bounced Cheque</option>
                <option value="Legal Cases">Legal Cases</option>
                <option value="Police Cases">Police Cases</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Details of Inquiry
              </label>
              <textarea
                name="inquiryDetails"
                value={formData.inquiryDetails}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-green-500 transition-all"
            >
              Submit
            </button>
          </form>
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
              Dubai, United Arab Emirates <br />
              Mobile No.: 0503117597 <br />
              Landline: 00971-45163600 Ext : 8771 <br />
              Email: support@swiftdebtcollection.com
            </p>
          </div>
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.412007280312!2d55.30018750000001!3d25.1555625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69270f5612c3%3A0x2d7e43041843e7d8!2sMeydan%20Free%20Zone!5e0!3m2!1sen!2sin!4v1733981430930!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;