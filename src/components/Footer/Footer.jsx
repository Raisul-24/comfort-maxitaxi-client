import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white">
      <footer className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5 py-10 text-sm md:text-base">
        
        {/* Logo & About */}
        <div>
          <img
            src="/logo.png"
            className="w-12 md:w-20 h-12 md:h-20 rounded-lg"
            alt="Logo"
          />
          <p className="font-bold py-2 text-sm md:text-base text-red-700">
            Comfort MaxiTaxi in Perth
          </p>
          <p className="max-w-xs text-sm md:text-base font-semibold leading-relaxed">
            Reliable, spacious, and trusted MaxiTaxi service — your comfort, our priority.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold md:mb-2">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:text-red-600 transition">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-red-600 transition">
                Blogs
              </Link>
            </li>
          </ul>
          <h4 className="font-bold mt-4">Working Hours</h4>
          <p>24 × 7</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Airport Pickup
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Baby Capsule
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Wedding Transport
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Wheelchair Accessible
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold md:mb-2">Get In Touch</h3>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-red-500 flex-shrink-0" /> 
            <span>Perth, WA, Australia</span>
          </p>
          <p className="flex items-center gap-2 my-2">
            <MdOutlineMail className="text-red-500 flex-shrink-0" />
            <span className="break-all">maxitaxi.perth@gmail.com</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-red-500 flex-shrink-0" /> 
            <span>333 666 0000</span>
          </p>

          <h4 className="font-bold mt-6">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com/" className="text-sky-300 hover:scale-110 transition">
              {/* Twitter Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/" className="text-red-600 hover:scale-110 transition">
              {/* YouTube Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://web.facebook.com/" className="text-blue-600 hover:scale-110 transition">
              {/* Facebook Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-red-600 text-xs md:text-sm">
        Copyright © {new Date().getFullYear()} - All rights reserved by Comfort MaxiTaxi
      </div>
    </div>
  );
};

export default Footer;
