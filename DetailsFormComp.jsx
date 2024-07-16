import React from "react";
import "./../App.css";
const Pages = () => {
  return (
    <React.Fragment>
        
          <div className="flex flex-row justify-center">
            <div className="pt-10 px-10 Inputfield1">
              <div className="flex flex-col">
                <label htmlFor="UserName" className="mt-3">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="outline-none bg-LiteLavender mt-3 px-2 input"
                  placeholder="OPM"
                  required
                />
                <label htmlFor="UserPhone" className="mt-5">
                  Phone
                </label>
                <input
                  type="text"
                  className="input outline-none bg-LiteLavender2 mt-3 px-2"
                  placeholder="+91-"
                  required
                />
                <label htmlFor="Reason" className="mt-5">
                  Reason for consultation
                </label>
                <input
                  type="text"
                  className="input outline-none bg-LiteLavender2 mt-3 px-2"
                  placeholder="Dog not eating food"
                  required
                />
              </div>
            </div>
            <div className="pt-10 px-10 Inputfield2">
              <div className="flex flex-col">
                <label htmlFor="Pet Name" className="mt-3">
                  Pet Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="input outline-none bg-LiteLavender mt-3 px-2"
                  placeholder="OPM"
                  required
                />
                <label htmlFor="PetType" className="mt-5">
                  Pet Type<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="input outline-none bg-LiteLavender2 mt-3 px-2"
                  placeholder="+91-"
                  required
                />
                <label htmlFor="medicalHistory" className="mt-5">
                  Medical History
                </label>
                <input
                  type="text"
                  className="input outline-none bg-LiteLavender2 mt-3 px-2"
                  placeholder="Dog not eating food"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn py-3 px-40 bg-Lavender ">
              Book Appointment
            </button>
          </div>
        
    </React.Fragment>
  );
};

export default Pages;
