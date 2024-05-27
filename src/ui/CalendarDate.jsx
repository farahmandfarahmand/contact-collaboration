// import { format } from "date-fns";

import ErrorFiled from "./ErrorFiled";
import { DatePicker } from "@nextui-org/date-picker";

import LabelFiled from "./LabelFiled";

function CalendarDate({ label, formik, name }) {
  return (
    <div className="flex w-full  flex-wrap md:flex-nowrap sm:grid sm:grid-cols-1  sm:p-0 gap-4">
      <span className="flex w-full  sm:-mb-5 sm:content-start  sm:py-1 sm:mr-1 justify-between sm:grid sm:grid-cols-1 sm:grid-rows-2  p-2 mr-1 ">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </span>

      <DatePicker
      
        isRequired
        className="selectOption__input  mr-2 sm:-mt-9 -mt-4 h-10 overflow-hidden w-[95%] "
      />
    </div>
  );
}

export default CalendarDate;
