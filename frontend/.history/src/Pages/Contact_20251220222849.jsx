import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20">
      {/* HEADING */}
      <h1 className="text-center text-2xl pt-10 text-gray-500">
        CONTACT <span className="text-gray-700 font-semibold">US</span>
      </h1>

      {/* CONTENT */}
      <div className="flex my-12 flex-col md:flex-row items-center gap-12 mb-28 text-sm md:text-base">
        <img
          className="w-full md:max-w-[360px] rounded-lg"
          src={assets.contact_image}
          alt="Contact Prescripto"
        />

        <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
          <p className="font-semibold text-lg">OUR OFFICE</p>

          <p className="text-gray-500 leading-relaxed">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>

          <p className="text-gray-500 leading-relaxed">
            Tel: +91-8822361549 <br />
            Email: narayanphukan30@gmail.com
          </p>

          <p className="font-semibold text-lg">Careers at PRESCRIPTO</p>

          <p className="text-gray-500 leading-relaxed">
            Learn more about our teams and current job openings.
          </p>

          <button className="border border-black px-8 py-3 text-sm rounded-md hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
