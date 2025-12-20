import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  const handleSpecialityClick = (spec) => {
    if (spec === speciality) {
      navigate("/doctor");
    } else {
      navigate(`/doctors/${spec}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 max-w-7xl mx-auto">
      <p className="text-gray-600 mb-4 text-center sm:text-left">
        Browse through the doctors specialist.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Specialties Menu */}
        <div className="sm:w-60 lg:w-64 flex sm:flex-col gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible 
                        sticky top-0 sm:static bg-white sm:bg-transparent z-10 py-2 sm:py-0 shadow-sm sm:shadow-none">
          {specialties.map((spec, idx) => (
            <p
              key={idx}
              onClick={() => handleSpecialityClick(spec)}
              className={`flex-shrink-0 w-[140px] sm:w-auto px-4 py-2 border border-gray-300 rounded-full cursor-pointer text-sm
                ${
                  speciality === spec
                    ? "bg-indigo-100 text-black"
                    : "bg-white text-gray-700"
                }
                hover:bg-indigo-100 transition-colors duration-300 text-center whitespace-nowrap`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterDoc.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500 flex flex-col min-h-[350px]"
            >
              <img
                className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover bg-blue-50"
                src={item.image}
                alt={item.name}
              />
              <div className="p-3 flex flex-col flex-1 justify-between">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
