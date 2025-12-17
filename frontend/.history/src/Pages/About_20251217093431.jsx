import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <p>
          ABOUT <span>US</span>
        </p>
      </div>
      
      <div>
        <img src={assets.about_image} alt="" />
        <div>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
