import { CgChevronDoubleLeft } from "react-icons/cg";

const steps = [
  { label: " اطلاعات شخصی", id: "1" },
  { label: "اطلاعات تماس", id: "2" },
  { label: "اطلاعات تحصیلی", id: "3" },
  { label: "اطلاعات شغلی", id: "4" },
];

function DesktopStepper({ currentStep, numberOfStep }) {
  return (
    <div className=" hidden sm:block sm:col-span-2  ">
      <ol className="sm:flex  items-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
        {steps.map((step) => (
          <li key={step.id} className="relative ">
            {console.log(step.id)}
            <a href="" className="flex items-center font-medium w-full  ">
              <span
                className={`${
                  step.id == currentStep
                    ? "w-6 h-6 bg-indigo-600 border border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-8 lg:h-8"
                    : "w-6 h-6 bg-gray-300 border border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-8 lg:h-8"
                }`}
              ></span>
              <div className="block">
                <h4
                  className={`${
                    step.id == currentStep
                      ? "text-base mr-4 text-indigo-600"
                      : "text-base mr-4 text-gray-500"
                  }`}
                >
                  {step.label}
                </h4>
              </div>
              {step.id == numberOfStep ? (
                <CgChevronDoubleLeft className="hidden w-6 h-6 text-center mr-4" />
              ) : step.id == currentStep ? (
                <CgChevronDoubleLeft className="w-6 h-6 text-indigo-600 text-center mr-4" />
              ) : (
                <CgChevronDoubleLeft className="w-6 h-6 text-gray-600 text-center mr-4" />
              )}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DesktopStepper;
