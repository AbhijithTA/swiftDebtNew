import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Services */}
        <div>
          <Link to="/services">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Recovery Solution</li>
              <li>Financial Management</li>
              <li>Financial Settlement</li>
              <li>Outsourcing</li>
              <li>Online Access</li>
            </ul>
          </Link>
        </div>

        {/* Legal Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal Services</h3>
          <ul className="space-y-2">
            <li>Civil Lawsuit</li>
            <li>Arbitration</li>
            <li>Legal Consultation</li>
            <li>Criminal Law</li>
            <li>Corporate Law</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <Link to="/about-us">
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li>Legal & Security</li>
              <li>Terms of Use</li>
              <li>Help Centre</li>
              <li>Privacy Policy</li>
            </ul>
          </Link>

          {/* Social Media */}
          <div className="mt-6">
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-white">
              <Link to="#" className="hover:text-cyan-500">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="hover:text-cyan-500">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="hover:text-cyan-500">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#" className="hover:text-cyan-500">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Swift Debt. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
