import "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              Head Office Opposite Adum,Kumasi - Ghana
            </p>
            <p className="text-sm mb-2">E: info@newcrystalhealth.org</p>
            <p className="text-sm mb-2">
              P: +233 244 347 239 | +233 544 347 239
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 New Crystal Health Services. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
