function ExtraTextFiled({ label, name, type = "text", placeholder, formik }) {
  return (
    <span className="w-full justify-between flex flex-wrap sm:col-span-2  sm:place-items-center  sm:ml-2">
      <span className="flex p-2">
        <label className="text-[0.75rem] ml-2 mr-2  "> {label} </label>
        {formik.errors[name] ? (
          <p className="text-[0.65rem] text-red-600 ">(*)</p>
        ) : (
          <p className="text-[0.65rem] text-gray-500 ">(*)</p>
        )}
      </span>
      <span className="p-2 ml-4">
        {formik.errors[name] && formik.touched[name]}
        <div className="text-[0.65rem]  sm:mb-0 sm:text-[0.75rem] text-red-600">
          {formik.errors[name]}
        </div>
      </span>
      <div className="flex flex-col w-full m-2 text-[0.75rem] sm:mr-2  ">
        <textarea
          type={type}
          id="large-input"
          placeholder={placeholder}
          rows="4"
          // cols="45"
          className="content-start p-2 block   w-full
        justify-center  text-gray-900 border-b-2
        bg-gray-50   transition-all duration-300 ease-out
        focus:shadow-lg focus:shadow-primary-200
        text-sm hover:shadow-md  rounded-lg shadow-sm
        border border-gray-300
        focus:ring-primary-500 focus:border-primary-500
         sm:text-[0.65rem]
        "
          {...formik.getFieldProps(name)}
        ></textarea>
      </div>
    </span>
  );
}

export default ExtraTextFiled;
