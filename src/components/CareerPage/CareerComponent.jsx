import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    position: "",
    resumeLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_jrocaug"; // Replace with your EmailJS service ID
    const TEMPLATE_ID = "template_6t74ei9"; // Replace with your EmailJS template ID
    const USER_ID = "RZMrYDvxXjxy3tSuq"; // Replace with your EmailJS user ID

    // Send the email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Your application has been submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          position: "",
          resumeLink: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to submit the form. Please try again.");
      });
  };

  return (
    <div className="P-3 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">CAREERS</h2>
        <p className="text-gray-400 text-center mb-6">Work With Us</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.mobile}
            required
          />
          <select
            name="position"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.position}
            required
          >
            <option value="">Select Position</option>
            <option value="Debt Collector">Debt Collector</option>
            <option value="Sales Executive">Sales Executive</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="url"
            name="resumeLink"
            placeholder="Link to your Resume"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.resumeLink}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerPage;