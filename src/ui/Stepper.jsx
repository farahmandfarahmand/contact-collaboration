import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

function Stepper() {
  return (
    <div className="w-full sm:hidden max-w-2xl mx-auto bg-indigo-100 border-2 border-indigo-600 rounded-md">
      <div className="flex items-center justify-between gap-3 p-3 bg-white rounded">
        <button className="border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600">
          <span className="flex gap-1.5 items-center text-center">
            <GrFormNext className="w-5 h-5" />
            <p className="mt-1"> Next</p>
          </span>
        </button>

        <ul className="flex gap-1 items-center">
          <li className="text-lg font-medium text-gray-900">1</li>
          <li className="text-base font-normal text-gray-900">/</li>
          <li className="text-base font-normal text-gray-600">3</li>
        </ul>

        <button className="   border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600">
          <span className="flex gap-1.5 items-center text-center">
            <p className="mt-1"> Back</p>
            <IoIosArrowBack className="w-4 h-4 " />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Stepper;
