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
        
        {/* --- LEFT SIDE: SPECIALITY LIST --- */}
        <div className="flex flex-row sm:flex-col gap-4 text-sm text-gray-600 overflow-x-auto w-full sm:w-auto pb-4 sm:pb-0">
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((item, index) => (
            <p
              key={index}
              onClick={() => speciality === item ? navigate('/doctors') : navigate(`/doctors/${item}`)}
              className={`whitespace-nowrap min-w-max px-4 py-2 border border-gray-300 rounded transition cursor-pointer ${
                speciality === item ? "bg-indigo-100 text-black" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* --- RIGHT SIDE: DOCTORS GRID --- */}
       
<div className="w-full flex flex-rows-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6">
  {filterDoc.map((item, index) => (
    <div
      onClick={() => navigate(`/appointment/${item._id}`)}
      key={index}
      className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
    >
      <img className="bg-blue-50 w-full" src={item.image} alt={item.name} />
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <p className="w-2 h-2 bg-green-500 rounded-full"></p>
          <p>Available</p>
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