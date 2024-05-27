import React from "react";
import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function RadioInput({ name, formik, radioOptions, label }) {
  return (
    <div className="mt-2 ">
      {/* ---------label section------------- */}
      <div className="grid grid-cols-1 w-full sm:mr-4 justify-between  sm:p-0  ">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </div>
      {/* -----------input section------------ */}
      <div className="inline-block ">
        {formik.errors[name] && formik.touched[name] ? (
          <div className=" flex w-1/3 h-3 content-center">
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
                  className="mr-2 text-[0.75rem] content-center sm:text-[0.85rem]"
                  htmlFor={item.value}
                >
                  {item.label}
                </label>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className=" flex w-1/3 h-3 -mt-2 content-center">
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
                  className="mr-2 text-[0.75rem] content-center sm:text-[0.85rem]"
                  htmlFor={item.value}
                >
                  {item.label}
                </label>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RadioInput;
