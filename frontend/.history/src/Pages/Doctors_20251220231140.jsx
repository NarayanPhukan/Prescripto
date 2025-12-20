import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
       <div className="flex gap-4 overflow-x-auto sm:flex-col sm:overflow-x-visible text-sm text-gray-600 px-2">
  {["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map((spec) => (
    <p
      key={spec}
      onClick={() =>
        speciality === spec ? navigate("/doctors") : navigate(`/doctors/${spec}`)
      }
      className={`min-w-[180px] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer whitespace-nowrap ${
        speciality === spec ? "bg-indigo-100 text-black" : ""
      }`}
    >
      {spec}
    </p>
  ))}
</div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filterDoc.map((item, index) => (
    <div
      onClick={() => navigate(`/appointment/${item._id}`)}
      key={index}
      className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-transform duration-500"
    >
      <img className="bg-blue-50 w-full object-cover" src={item.image} alt={item.name} />
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Available</span>
        </div>
        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
        <p className="text-gray-600 text-sm">{item.speciality}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Doctors;
