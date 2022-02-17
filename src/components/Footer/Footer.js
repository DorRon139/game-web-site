import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      &#169;This project was made by Dor Ron using React and Node.js{" "}
      {date.getYear() + 1900}
    </div>
  );
};

export default Footer;
