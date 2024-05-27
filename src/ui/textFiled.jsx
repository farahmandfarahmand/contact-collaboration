import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function TextFiled({ label, name, type = "text", placeholder, formik }) {
  return (
    <div className=" w-full flex flex-wrap sm:grid sm:grid-cols-1 sm:grid-rows-2 sm:mb-2  ml-4">
      <span className=" flex  h-12   w-full sm:mr-1   justify-between sm:p-0 p-2 ">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </span>
      {formik.touched[name] && formik.errors[name] ? (
        <input
          className="textFiled__input hover:shadow-md  "
          placeholder={placeholder}
          id={name}
          type={type}
          name={name}
          autoComplete="off"
          {...formik.getFieldProps(name)}
          //   value={value}
          //   onChange={onChange}
          //  onBlur={onBlur}
        />
      ) : (
        <input
          className="textFiled__input  sm:h-10 sm:w-full sm:-mt-4 mr-2 hover:shadow-md text-[0.75rem] mb-5"
          placeholder={placeholder}
          id={name}
          type={type}
          name={name}
          autoComplete="off"
          {...formik.getFieldProps(name)}
        />
      )}
    </div>
  );
}

export default TextFiled;
