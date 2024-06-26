function LabelFiled({formik,label,name}) {
    return ( 
        <span className=" flex items-center ">
        <label className="text-[0.85rem]  sm:text-[1rem] ml-2   "> {label} </label>
        {formik.errors[name] && formik.touched[name] ? (
          <p className="text-[0.65rem] sm:text-[0.75rem] text-red-600 ">(*)</p>
        ) : (
          <p className="text-[0.65rem] sm:text-[0.75rem] text-gray-500 ">(*)</p>
        )}
      </span>
     );
}

export default LabelFiled;