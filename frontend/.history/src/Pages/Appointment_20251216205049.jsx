import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  /* ------------------ Fetch Doctor ------------------ */
  const fetchDocInfo = () => {
    const doc = doctors.find((d) => d._id === docId);
    setDocInfo(doc || null);
  };

  /* ------------------ Generate Slots ------------------ */
  const getAvailableSlots = () => {
    let allSlots = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // 9 PM

      // 🔹 Today logic
      if (i === 0) {
        let hour = currentDate.getHours();
        let minutes = currentDate.getMinutes();

        if (hour < 10) {
          currentDate.setHours(10, 0, 0, 0);
        } else {
          if (minutes > 30) {
            currentDate.setHours(hour + 1, 0, 0, 0);
          } else {
            currentDate.setMinutes(30);
          }
        }
      } else {
        currentDate.setHours(10, 0, 0, 0); // From 10 AM
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
    setSlotIndex(0);
    setSlotTime("");
  };

  /* ------------------ Effects ------------------ */
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  /* ------------------ Guard ------------------ */
  if (!docInfo) return <p className="text-center mt-10">Doctor not found</p>;

  /* ------------------ UI ------------------ */
  return (
    <div>
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="bg-primary w-full sm:max-w-72 rounded-lg"
          src={docInfo.image}
          alt={docInfo.name}
        />

        <div className="flex-1 border border-gray-300 rounded-lg p-8 bg-white">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <span className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-500">{docInfo.about}</p>

          <p className="mt-4 font-medium text-gray-600">
            Appointment fee:{" "}
            <span className="text-gray-800">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* Appointment Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-6">
        <p className="font-medium text-gray-700">Appointment Slots</p>

        {/* Dates */}
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSlotIndex(index);
                setSlotTime("");
              }}
              className={`text-center py-5 min-w-16 rounded-full cursor-pointer
                ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-300 text-gray-600"
                }`}
            >
              <p>{daysOfWeek[item[0]?.dateTime.getDay()]}</p>
              <p>{item[0]?.dateTime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className="flex gap-3 flex-wrap mt-6">
          {docSlots[slotIndex]?.map((item, index) => (
            <p
              key={index}
              onClick={() => setSlotTime(item.time)}
              className={`px-5 py-2 rounded-full cursor-pointer border
                ${
                  slotTime === item.time
                    ? "bg-primary text-white"
                    : "text-gray-600"
                }`}
            >
              {item.time}
            </p>
          ))}
        </div>

        {/* Selected Info */}
        {slotTime && (
          <p className="mt-4 text-sm text-gray-700">
            Selected Time:{" "}
            <span className="font-medium text-primary">{slotTime}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Appointment;
