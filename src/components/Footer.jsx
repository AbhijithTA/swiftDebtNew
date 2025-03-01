import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Services */}
        <div>
          <Link to="/services">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
             
              <li>Criminal Record Verification</li>
              <li>Credit Assessment Report</li>
              <li>Court-Issued Legal Notices</li>
              <li>Police Case Initiation</li>
              <li>Field Investigation Reports</li>
              <li>Certified Legal Translations</li>
            </ul>
          </Link>
        </div>

        {/* Legal Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Legal Services
          </h3>
          <ul className="space-y-2">
            <li>Civil Lawsuit</li>
            <li>Arbitration</li>
            <li>Legal Consultation</li>
            <li>Criminal Law</li>
            <li>Corporate Law</li>
          </ul>
        </div>

        {/* Coverage Areas */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            We Are Covering
          </h3>
          <Link to="/">
            <ul className="space-y-2">
              <li>Normal Debt Collection</li>
              <li>Default Debt Collection</li>
              <li>Financial Settlements between Creditor and Debtors</li>
              <li>Disputed Debt Collection</li>
              <li>Bounced Cheque Debt Collection</li>
              <li>Filing Criminal Cases</li>
              <li>Filing Civil Cases</li>
            </ul>
          </Link>
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
