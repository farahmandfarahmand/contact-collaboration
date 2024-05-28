import React from "react";
import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function RadioInput({ name, formik, radioOptions, label }) {
  return (
    <div>
      {/* ---------label section------------- */}
      <div className=" w-full  justify-between    ">
        <LabelFiled formik={formik} name={name} label={label} />

        {/* -----------input section------------ */}
        <div className=" flex ">
          {radioOptions.map((item) => (
            <React.Fragment key={item.value}>
              <input
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
