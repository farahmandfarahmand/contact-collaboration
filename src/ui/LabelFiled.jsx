function LabelFiled({formik,label,name}) {
    return ( 
        <span className="   flex  w-1/2 sm:w-1/3 h-full mr-1 items-center -mb-2 sm:-mb-1">
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