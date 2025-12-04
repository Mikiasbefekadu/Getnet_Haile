import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  const contactInfo = [
    { icon: faEnvelope, text: "info@getnethailefilms.com", link: "mailto:info@getnethailefilms.com" },
    { icon: faPhone, text: "+251 988444333", link: "tel:+251988444333" },
    { icon: faPhone, text: "+251 911350992", link: "tel:+251911350992" },
    { icon: faPhone, text: "+251 955334055", link: "tel:+251955334055" },
    { icon: faMapMarkerAlt, text: "Addis Ababa, Ethiopia", link: "https://maps.google.com/maps?q=8.998818,38.785735&ll=8.998818,38.785735&z=16" },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const socialLinks = [
    { icon: faFacebookF, to: "https://www.facebook.com/profile.php?id=61581552699172" },
    { icon: faInstagram, to: "https://www.instagram.com/getnethailefilms/" },
    { icon: faYoutube, to: "https://www.youtube.com/@GetnetHailefilmproduction" },
    { icon: faLinkedinIn, to: "https://www.linkedin.com/notifications/?filter=all" },
    { icon: faTiktok, to: "https://www.tiktok.com/@getnethailefilms" },
    { icon: faXTwitter, to: "https://x.com/getnetfilms" },
  ];

  return (
    <footer className="bg-[#040d1c] text-white py-6 w-full px-4">
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-[1440px] mx-auto">

        {/* Left Section */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h2 className="text-xl md:text-2xl font-bold">Getnet Haile Films</h2>
          <div className="flex flex-col gap-2 text-xs">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center border border-white rounded-full">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="!text-white hover:!text-yellow-400 transition-colors text-xs"
                  >
                    {info.text}
                  </a>
                ) : (
                  <span className="text-white text-xs">{info.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Quick Links) */}
        <div className="hidden md:flex absolute right-4 flex-col items-end">
          <h3 className="font-semibold text-sm">Quick Links</h3>
          <div className="flex flex-wrap gap-2 mt-4 justify-end">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="!text-white hover:!text-yellow-400 transition-colors text-xs"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links in the Middle */}
      <div className="flex justify-center gap-2 mt-4">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.to}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center border border-white rounded-full !text-white hover:text-yellow-400 hover:border-yellow-400 transition-colors"
          >
            <FontAwesomeIcon icon={social.icon} size="sm" />
          </a>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Getnet Haile Films. All rights reserved.
      </div>
    </footer>
  );
}