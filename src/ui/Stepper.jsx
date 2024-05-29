import React from "react";



function Stepper({currentStep, numberOfSteps,isFinalStep}) {
  
  const activeColor = (index) => currentStep >= index ? 'bg-blue-500' : 'bg-gray-300'
// 
 
  return (
   
        

        <ul className="flex gap-1 items-center">
          {Array.from({ length: numberOfSteps }).map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-6 h-6 rounded-full ${activeColor(index)}`}
              ></div>
              <div className={`w-12 h-1 ${activeColor(index)}`}></div>
              {isFinalStep(index) ? null : <div className={`w-12 h-1 ${activeColor(index)}`}></div>}
            </React.Fragment>
          ))}
          <li className="text-lg font-medium text-gray-900">4</li>
          <li className="text-base font-normal text-gray-900">/</li>
          <li className="text-base font-normal text-gray-600">1</li>
        </ul>

        
   
  );
}

export default Stepper;
