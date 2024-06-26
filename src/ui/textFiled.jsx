// import { useCallback } from "react";

import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function TextFiled({ label, name, type = "text", placeholder, formik }) {
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  // const inputRef = useCallback((inputElement) => {
  //   if (inputElement) {
  //     inputElement.focus();
  //   }
  // }, []);


    //use this function to focus on next field
    // focusNextField = (id) => {
    //   this.inputs[id]._root.focus();
    //   }

  //   const refValue = useRef();

  // useEffect(() => {
  //   if(refValue){
  //     console.log('empty filed');
  //     refValue.current.focus();
  //   }
  // }, []);
   
  return (
    <div className=" h-24 relative w-full flex flex-col   ">
   
      <span className=" flex  w-full sm:mr-1 justify-between  p-2 ">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </span>

      <input
        // ref={refValue}
       
        className=" textFiled__input hover:shadow-md absolute bottom-0"
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
