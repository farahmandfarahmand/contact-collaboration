import React from "react";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

function Stepper(currentStep, numberOfSteps,isFinalStep) {
  const activeColor = (index) => currentStep >= index ? 'bg-blue-500' : 'bg-gray-300'

 
  return (
    <div className="w-full mt-5 sm:hidden max-w-2xl mx-auto bg-indigo-100 border-2 border-primary-700 rounded-md">
      <div className="flex items-center justify-between gap-3 p-3 bg-white rounded">
        <button className="border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600">
          <span className="flex gap-1.5 items-center text-center">
            <GrFormNext className="w-5 h-5" />
            <p className="mt-1"> بعدی</p>
          </span>
        </button>

        <ul className="flex gap-1 items-center">
          {Array.from({ length: numberOfSteps }).map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-6 h-6 rounded-full ${activeColor(index)}`}
              ></div>
              {/* <div className={`w-12 h-1 ${activeColor(index)}`}></div> */}
              {isFinalStep(index) ? null : <div className={`w-12 h-1 ${activeColor(index)}`}></div>}
            </React.Fragment>
          ))}
          <li className="text-lg font-medium text-gray-900">4</li>
          <li className="text-base font-normal text-gray-900">/</li>
          <li className="text-base font-normal text-gray-600">1</li>
        </ul>

        <button className="   border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600">
          <span className="flex gap-1.5 items-center text-center">
            <p className="mt-1"> قبلی</p>
            <IoIosArrowBack className="w-4 h-4 " />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Stepper;
