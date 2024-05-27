import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function selectOptions({ label, formik, name, selectOptions }) {
  return (
    <div className=" w-full flex flex-wrap sm:grid sm:grid-cols-1 sm:grid-rows-2   justify-between ml-4">
    <span className="flex   sm:row-span-1 w-full sm:mr-1 justify-between sm:p-0 p-2 ">
      <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name}/>
       
      </span>

      <div className="sm:row-span-2 sm:col-span-2 w-full ml-4">
      {formik.errors[name] && formik.touched[name] ? (
        <select
          className="selectOption__input "
          name={name}
          {...formik.getFieldProps(name)}
        >
          {selectOptions.map((item) => (
            <option
              className="text-[0.85rem] sm:text-[1rem]"
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <select
          className="selectOption__input"
          name={name}
          {...formik.getFieldProps(name)}
        >
          {selectOptions.map((item) => (
            <option
              className="text-[0.65rem] sm:text-md"
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      )}
      </div>
    </div>
  );
}

export default selectOptions;
