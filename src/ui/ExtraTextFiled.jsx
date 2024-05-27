import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";


function ExtraTextFiled({ label, name, type = "text", placeholder, formik }) {
  return (
    <div className="w-full flex  flex-wrap md:flex-nowrap sm:grid sm:grid-cols-1 sm:col-span-2 sm:p-0 gap-4">
    <span className="w-full  mt-2 h-1/2  justify-between flex   sm:place-items-center sm:mr-1   sm:ml-2">
      <LabelFiled  formik={formik} name={name} label={label} />
      <ErrorFiled formik={formik} name={name} />
        </span>
      <div className=" w-full m-2 text-[0.75rem] sm:mr-1  ">
        <textarea
          type={type}
          id="large-input"
          placeholder={placeholder}
          rows="4"
          // cols="45"
          className="extraTextFiled__input "
          {...formik.getFieldProps(name)}
        ></textarea>
      </div>
    </div>
  );
}

export default ExtraTextFiled;
