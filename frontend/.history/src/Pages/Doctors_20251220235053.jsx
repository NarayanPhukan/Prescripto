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
        {/* Change the container classes here */}
        <div className="flex flex-row sm:flex-col gap-4 text-sm text-gray-600 overflow-x-scroll sm:overflow-y-auto pb-4 sm:pb-0 hide-scrollbar">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={` hover:scale-105 transition-all duration-500 hover:bg-[#1d24aa] hover:text-white whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  cursor-pointer ${
              speciality === "General physician"
                ? "bg-primary text-black"
                : ""
            }`}
          >
            General physician
          </p>

          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={` hover:scale-105 transition-all duration-500 hover:bg-[#1d24aa] hover:text-white whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  cursor-pointer ${
              speciality === "Gynecologist" ? "bg-primary text-white" : ""
            }`}
          >
            Gynecologist
          </p>

          {/* ... Repeat the same pattern for other specialties ... */}

          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={` hover:scale-105 transition-all duration-500 hover:bg-[#1d24aa] hover:text-white whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  cursor-pointer ${
              speciality === "Dermatologist" ? "bg-primary text-white" : ""
            }`}
          >
            Dermatologist
          </p>

          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={` hover:scale-105 transition-all duration-500 hover:bg-[#1d24aa] hover:text-white whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  cursor-pointer ${
              speciality === "Pediatricians" ? "bg-primary text-white" : ""
            }`}
          >
            Pediatricians
          </p>

          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={` hover:scale-105 transition-all duration-500 hover:text-black  whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  cursor-pointer ${
              speciality === "Neurologist" ? "bg-primary text-white" : ""
            }`}
          >
            Neurologist
          </p>

          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={` hover:scale-105 transition-all duration-500 hover:bg-[#1d24aa] hover:text-white whitespace-nowrap sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-primary text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-0">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt="" />
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
