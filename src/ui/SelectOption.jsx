import ErrorFiled from "./ErrorFiled";
import LabelFiled from "./LabelFiled";

function selectOptions({ label, formik, name, selectOptions }) {
  return (
    <div className=" w-full flex flex-wrap ">
      <span className="flex  w-full  justify-between  p-2 ">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </span>

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
    </div>
  );
}

export default selectOptions;
