import "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-bold mb-2">Contact Us</h3>
      <p className="text-sm mb-2">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Adum,Kumasi-Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          Head Office Opposite Adum, Kumasi - Ghana
        </a>
      </p>
      <p className="text-sm mb-2">
        <a
          href="mailto:info@newcrystalhealth.org"
          className="hover:text-gray-400"
        >
          E: info@newcrystalhealth.org
        </a>
      </p>
      <p className="text-sm mb-2">
        <a href="tel:+233244347239" className="hover:text-gray-400">
          P: +233 244 347 239
        </a>{" "}
        |
        <a href="tel:+233544347239" className="hover:text-gray-400">
          +233 544 347 239
        </a>
      </p>
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="text-center">
      <h3 className="text-lg font-bold mb-2">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          {/* <Link to="/" className="text-sm hover:text-gray-400">
            Home
          </Link> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-400"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-400"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-400"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-400"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const SocialLinks = () => {
  const socialIcons = [
    {
      icon: <FaFacebook size={24} />,
      link: "https://www.facebook.com/newcrystalhospital",
    },
    {
      icon: <FaTwitter size={24} />,
      link: "https://www.x.com/newcrystalhospital",
    },
    {
      icon: <FaInstagram size={24} />,
      link: "https://www.instagram.com/newcrystalgroup",
    },
    {
      icon: <FaLinkedin size={24} />,
      link: "https://www.Linkedin.com/newcrystalhospital",
    },
  ];

  return (
    <div className="text-center md:text-right">
      <h3 className="text-lg font-bold mb-4">Follow Us</h3>
      <div className="flex justify-center md:justify-end space-x-4">
        {socialIcons.map(({ icon, link }, index) => (
          <a
            target="_blank"
            key={index}
            href={link}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactUs />
          <QuickLinks />
          <SocialLinks />
        </div>
        <div className="border-t border-gray-700 mt-2 pt-4 text-center">
          <p className="text-sm">
            © 2024 New Crystal Health Services. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
