import { useCallback } from "react";
import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function TextFiled({ label, name, type = "text", placeholder, formik }) {
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  const inputRef = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div className=" w-full flex flex-wrap   ">
      <span className=" flex  w-full sm:mr-1 justify-between  p-2 ">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </span>

      <input
        ref={inputRef}
    
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
    </div>
  );
}

export default TextFiled;
