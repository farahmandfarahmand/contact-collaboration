import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";


function ExtraTextFiled({ label, name, type = "text", placeholder, formik }) {
  return (
    <div className="w-full bg-purple-200 flex  flex-wrap md:flex-nowrap sm:grid sm:grid-cols-1 sm:col-span-2 gap-4">
    <span className="w-full justify-between flex   ">
      <LabelFiled  formik={formik} name={name} label={label} />
      <ErrorFiled formik={formik} name={name} />
        </span>
     
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
  );
}

export default ExtraTextFiled;
