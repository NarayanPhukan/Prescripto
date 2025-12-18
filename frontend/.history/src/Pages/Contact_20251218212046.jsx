import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div>
        <img src={assets.contact_image} alt="" />

        <div>
          <p>OUR OFFICE</p>
          <p>54709 Willms Station <br />Suite 350, Washington, USA</p><br />
          <p>Tel: (415) 555‑0132</p>
          <p>Email: narayanphukan30s@gmail.com</p>
          <p></p>

          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
