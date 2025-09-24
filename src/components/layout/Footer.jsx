import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  const contactInfo = [
    { icon: <Mail />, text: "gethaile4@gmail.com" },
    { icon: <Phone />, text: "+251 988444333" },
    { icon: <Phone />, text: "+251 911350992" },
    { icon: <Phone />, text: "+251 955334055" },
    { icon: <MapPin />, text: "Addis Ababa, Ethiopia" },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook />, to: "#" },
    { icon: <Twitter />, to: "#" },
    { icon: <Instagram />, to: "#" },
    { icon: <Youtube />, to: "#" },
    { icon: <Linkedin />, to: "#" },
  ];

  return (
    <footer className="bg-[#040d1c] text-white py-12 w-full px-6">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-[1440px] mx-auto">

        {/* Left Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold">Getnet Haile Films</h2>

          <div className="flex flex-col gap-3">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
                  {info.icon}
                </div>
                <span className="text-white">{info.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:items-end gap-6 md:w-1/2">
          {/* Quick Links */}
          <div className=" text-white flex flex-col md:items-end gap-2 ">
            <h3 className="font-semibold text-lg text-white pr-46">Quick Links</h3>
            <div className="flex flex-col md:flex-row gap-4">
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className=" !text-white hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:items-end gap-2 pr-7">
            <h3 className="font-semibold text-lg pr-42">Follow Us</h3>
            <div className="flex gap-3 flex-wrap justify-start md:justify-end">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:text-yellow-400 hover:border-yellow-400 transition-colors"
                >
                  {React.cloneElement(social.icon, { color: "white", size: 20 })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Getnet Haile Films. All rights reserved.
      </div>
    </footer>
  );
}
