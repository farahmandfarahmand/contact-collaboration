import TextFiled from "../../ui/textFiled";
import SelectOptions from "../../ui/SelectOption";
import RadioInput from "../../ui/RadioInput";
import UploadFile from "../../ui/UploadFile";

// --------------------------
const selectOptions = [
  { label: "   انتخاب کنید...", value: "" },
  { label: "  طراحی ui", value: "0" },
  { label: " فرانت اند ", value: "1" },
  { label: "  بک اند ", value: "2" },
  { label: "  ui و فرانت اند ", value: "3" },
  { label: "   فرانت اند و بک اند ", value: "4" },
];
const radioOptions = [
  { label: " ندارم", value: "0" },
  { label: " دارم", value: "1" },
];
//  !------------------------------------------
function JobInfo({ formik }) {
  return (
    <div className="sm:mt-10 sm:col-span-2">
      <div
        className=" flex flex-wrap gap-4 sm:grid sm:grid-cols-2  sm:gap-4 "
       
      >
        <SelectOptions
          selectOptions={selectOptions}
          formik={formik}
          name="requestForJob"
          label=" درخواست برای همکاری  "
        />
        <TextFiled
          label=" وضعیت اشتغال "
          placeholder="  "
          name="stateOfJob"
          type="text"
          id="number"
          formik={formik}
        />
        <TextFiled
          label="حقوق درخواستی(تومان در ماه)"
          placeholder="  "
          type="number"
          name="salary"
          id="number"
          formik={formik}
        
        />
        <RadioInput
      
          label="آیا سابقه کار دارید؟"
          formik={formik}
          radioOptions={radioOptions}
          name="historyJob"
          value="value"
      
        />
        <UploadFile
          label="بارگذاری رزومه کاری"
          name="uploadFiles"
          formik={formik}
        />
      </div>
    </div>
  );
}

export default JobInfo;
