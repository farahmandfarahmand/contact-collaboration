function TextFiled({ label, name, type = "text", placeholder, formik }) {
  return (
    <div className=" flex flex-wrap  justify-between ml-4">
      <span className="flex w-full justify-between sm:grid sm:grid-cols-1 sm:grid-rows-2 sm:p-0 p-2 mr-1 ">
        <span className="flex ">
          <label htmlFor={name} className="mb-1 ml-2 text-[0.75rem]">
            {label}
          </label>
          {formik.errors[name] ? (
            <p className="text-[0.65rem] text-red-600 inline-block ">(*)</p>
          ) : (
            <p className="text-[0.65rem] text-gray-500 inline-block ">(*)</p>
          )}
        </span>
        <span className="mr-1">
          {formik.errors[name] && formik.touched[name]}
          <div className="text-[0.65rem]  sm:mb-0 sm:text-[0.75rem] text-red-600">
            {formik.errors[name]}
          </div>
        </span>
      </span>
      <input
        className="textFiled__input  sm:h-10 sm:w-full  mr-2 hover:shadow-md text-[0.75rem] mb-5"
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
