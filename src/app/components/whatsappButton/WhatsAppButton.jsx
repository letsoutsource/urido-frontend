"use client";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsAppButton.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/441733201000", "_blank");
  };

  return (
    <div
      className="whatsapp-button-container"
      onClick={handleClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <FaWhatsapp size={30} color="#fff" />
    </div>
  );
};

export default WhatsAppButton;
