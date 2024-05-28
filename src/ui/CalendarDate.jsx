// import { format } from "date-fns";

import ErrorFiled from "./ErrorFiled";
import { DatePicker } from "@nextui-org/date-picker";

import LabelFiled from "./LabelFiled";

function CalendarDate({ label, formik, name }) {
  return (
    <div className="flex w-full  flex-wrap ">
      <span className="flex w-full   justify-between">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </span>

      <DatePicker
      
        isRequired
        className="selectOption__input    "
      />
    </div>
  );
}

export default CalendarDate;
