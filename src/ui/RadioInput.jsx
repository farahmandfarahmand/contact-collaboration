import React from "react";

function RadioInput({ name, formik, radioOptions, label }) {
  return (
    <div className=" gap-x-2 grid grid-cols-1 grid-rows-2 mt-2 ">
      {/* ---------label section------------- */}
      <span className="flex ">
        <label htmlFor={name} className="mb-1 ml-2 mr-2 text-[0.65rem]">
          {label}
        </label>
        {formik.errors[name] ? (
          <p className="text-[0.65rem] text-red-600 inline-block ">(*)</p>
        ) : (
          <p className="text-[0.65rem] text-gray-500 inline-block ">(*)</p>
        )}
      </span>
      {/* -----------input section------------ */}
      <div className="flex">
        {radioOptions.map((item) => (
          <React.Fragment key={item.value}>
            <input
              type="radio"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name] === item.value}
              className="mr-2"
            />

            <label
              className="mr-2 text-[0.65rem] sm:text-[0.75rem]"
              htmlFor={item.value}
            >
              {item.label}
            </label>
          </React.Fragment>
        ))}
      </div>
{/* -------------error section--------------- */}
      {formik.errors[name] && formik.touched[name]}

      <div className="mt-1 text-[0.65rem] sm:text-[0.75rem] mb-2 sm:mb-0  text-red-600 mr-2">
        {formik.errors[name]}
      </div>
    </div>
  );
}

export default RadioInput;
