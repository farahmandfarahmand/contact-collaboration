import React from "react";
import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function RadioInput({ name, formik, radioOptions, label }) {
  return (
    <div className="sm:col-span-2 sm:mr-2">
      {/* ---------label section------------- */}
      <div className=" w-full  justify-between    ">
        <LabelFiled formik={formik} name={name} label={label} />

        {/* -----------input section------------ */}
        <div className="text-secondary-600 flex gap-x-2 items-center ">
          {radioOptions.map((item) => (
            <React.Fragment key={item.value}>
              <input
              className="form-radio gap-x-1 w-4 h-4 cursor-pointer focus:ring-primary-400"
                type="radio"
                id={item.value}
                name={name}
                value={item.value}
                onChange={formik.handleChange}
                checked={formik.values[name] === item.value}
              />

              <label
                className="m-1 text-[0.75rem]  sm:text-[0.85rem]"
                htmlFor={item.value}
              >
                {item.label}
              </label>
            </React.Fragment>
          ))}
        </div>
        <ErrorFiled formik={formik} name={name} />
      </div>
    </div>
  );
}

export default RadioInput;
