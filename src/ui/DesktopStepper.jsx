import { CgChevronDoubleLeft } from "react-icons/cg";

function DesktopStepper() {
  return (
    <div className=" hidden sm:block sm:col-span-2  ">
       <ol className="sm:flex  items-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
      <li className="relative ">
          <a  href="https://pagedone.io/" className="flex items-center font-medium w-full  ">
              <span className="w-6 h-6 bg-indigo-600 border border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-8 lg:h-8"> 1 </span>
              <div className="block">
                  <h4 className="text-base mr-4 text-indigo-600">اطلاعات شخصی</h4>
              </div>
              <CgChevronDoubleLeft className="w-6 h-6 text-center mr-4 text-indigo-600" />
          </a>
      </li>
      <li className="relative  ">
          <a className="flex items-center font-medium w-full  ">
              <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">2</span>
              <div className="block">
                  <h4 className="text-base mr-4 text-gray-900 ">اطلاعات تماس</h4>
              </div>
              <CgChevronDoubleLeft className="w-6 h-6 text-center mr-4" />
          </a>
      </li>
      <li className="relative  ">
          <a className="flex items-center font-medium w-full  ">
              <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">3</span>
              <div className="block">
                  <h4 className="text-base mr-4 text-gray-900 ">اطلاعات تحصیلی</h4>
              </div>
              <CgChevronDoubleLeft className="w-6 h-6 text-center mr-4" />
          </a>
      </li>
      <li className="relative  ">
          <a className="flex items-center font-medium w-full  ">
              <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">4</span>
              <div className="block">
                  <h4 className="text-base mr-4 text-gray-900">اطلاعات شغلی</h4>
              </div>
          </a>
      </li>
      </ol>
    </div>
  );
}

export default DesktopStepper;

{/*  ol classNameName="flex items-center w-full text-sm text-gray-500 font-medium sm:text-base">
      <li classNameName="flex md:w-full items-center text-indigo-600  sm:after:content-[''] after:w-3/5 after:h-1 after:border-b-5 after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ">
          <div classNameName="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2 ">
              <span classNameName="w-6 h-6 bg-indigo-600 border border-indigo-500 rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">1</span> اطلاعات شخصی
          </div>
      </li>
      <li classNameName="flex md:w-full items-center text-gray-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ">
          <div classNameName="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2 ">
              <span classNameName="w-6 h-6 bg-gray-100 border border-gray-500 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10">2</span> اطلاعات تماس
          </div>
      </li>
      <li classNameName="flex md:w-full items-center text-gray-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ">
          <div classNameName="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2 ">
              <span classNameName="w-6 h-6 bg-gray-100 border border-gray-500 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10">3</span> اطلاعات تحصیلی
          </div>
      </li>
      <li classNameName="flex md:w-full items-center text-gray-600 ">
          <div classNameName="flex items-center  ">
              <span classNameName="w-6 h-6 bg-gray-100 border border-gray-500 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10">4</span>اطلاعات شغلی 
          </div>
      </li>
      </ol> */}

{
  /* <div classNameNameNameNameNameName="flex flex-col">
<form action="" classNameNameNameNameNameName="">
  <div classNameNameNameNameNameName="flex gap-x-6 mb-6">
    <div classNameNameNameNameNameName="w-full relative">
      <label classNameNameNameNameNameName="flex  items-center mb-2 text-gray-600 text-sm font-medium">
        First Name{" "}
        <svg
          width="7"
          height="7"
          classNameNameNameNameNameName="ml-1"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
            fill="#EF4444"
          />
        </svg>
      </label>
      <input
        type="text"
        id="default-search"
        classNameNameNameNameNameName="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
        placeholder=""
        required=""
      />
    </div>
    <div classNameNameNameNameNameName="w-full relative">
      <label classNameNameNameNameNameName="flex  items-center mb-2 text-gray-600 text-sm font-medium">
        Last Name{" "}
        <svg
          width="7"
          height="7"
          classNameNameNameNameNameName="ml-1"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
            fill="#EF4444"
          />
        </svg>
      </label>
      <input
        type="text"
        id="default-search"
        classNameNameNameNameNameName="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
        placeholder=""
        required=""
      />
    </div>
  </div>

  <button classNameNameNameNameNameName="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
    Next
  </button>
</form>
</div> */
}
