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
    <div className="px-4 sm:px-6 md:px-10 py-6">
      <p className="text-gray-600 mb-4">Browse through the doctors specialist.</p>

      {/* Speciality Menu */}
      <div className="mb-5">
        {/* Mobile: horizontal scroll */}
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-2">
          {specialties.map((spec, idx) => (
            <p
              key={idx}
              onClick={() => handleSpecialityClick(spec)}
              className={`flex-shrink-0 px-4 py-2 border rounded-full cursor-pointer text-sm
                          ${speciality === spec ? "bg-indigo-100 text-black" : "bg-white text-gray-700"}
                          hover:bg-indigo-100 transition-colors duration-300`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Desktop: vertical sidebar */}
        <div className="hidden sm:flex flex-col gap-4 w-48">
          {specialties.map((spec, idx) => (
            <p
              key={idx}
              onClick={() => handleSpecialityClick(spec)}
              className={`px-4 py-2 border rounded cursor-pointer text-sm
                          ${speciality === spec ? "bg-indigo-100 text-black" : "bg-white text-gray-700"}
                          hover:bg-indigo-100 transition-colors duration-300`}
            >
              {spec}
            </p>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="sm:ml-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filterDoc.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
          >
            <img
              className="w-full h-48 object-cover bg-blue-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
