function selectOptions({label, formik, name, selectOptions }) {
  return (
    <div className="mt-2  ">
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
      <select className="w-44 mr-2 rounded-md text-[0.75rem]" name={name} {...formik.getFieldProps(name)}>
        {selectOptions.map((item) => (
          <option className="text-sm sm:text-md" key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name]}
      <div className=" mt-1 text-[0.65rem] mb-2 sm:mb-0 sm:text-[0.75rem] text-red-600 mr-2">
        {formik.errors[name]}
      </div>
    </div>
  );
}

export default selectOptions;
