import TextFiled from "../../ui/textFiled";
import RadioInput from "../../ui/RadioInput";
import SelectOptions from "../../ui/SelectOption";
import ExtraTextFiled from "../../ui/ExtraTextFiled";
import CalendarDate from "../../ui/CalendarDate";



// ------------------
const radioOptions = [
  { label: " مرد", value: "0" },
  { label: " زن", value: "1" },
];
const marrideOptions = [
  { label: " مجرد", value: "00" },
  { label: " متاهل", value: "11" },
];

const selectOptions = [
  { label: "   انتخاب کنید...", value: "" },
  { label: " درحال خدمت", value: "0" },
  { label: " کارت پایان خدمت", value: "1" },
  { label: " معاف از خدمت", value: "2" },
  { label: "  مشمول خدمت", value: "3" },
  { label: "   بانو هستم", value: "4" },
];
//   ----------------
function PersonalInfo({ formik }) {
  
  return (
    <div className="sm:mt-10">
      
      <form
        className=" flex flex-wrap gap-4 sm:grid sm:grid-cols-2  sm:gap-4 "
        onSubmit={formik.handleSubmit}
      >
        
        <TextFiled
          label="نام"
          placeholder=" نام "
          name="name"
          id="name"
          formik={formik}
        />
        <TextFiled
          label="نام خانوادگی"
          placeholder=" نام خانوادگی"
          name="family"
          type="text"
          id="family"
          formik={formik}
        />
        {/* ---------- birth date---------------- */}
        <CalendarDate label="تاریخ تولد" formik={formik} name="birthdate" />
        {/* ----------- select options for soldier ----------- */}
        <SelectOptions
          selectOptions={selectOptions}
          formik={formik}
          name="soldier"
          label="وضعیت نظام وظیفه"
        />
        {/* <TextFiled
                label="شماره تماس "
                placeholder=" 09xxxxxxxxx  "
                name="phoneNumber"
                type="number"
                id="number"
                formik={formik}
              />
              <TextFiled
                label="ایمیل"
                placeholder=" your@gmail.com "
                type="email"
                name="email"
                id="email"
                formik={formik}
              /> */}
        {/* ----------------address Data------------ */}
        <ExtraTextFiled
          formik={formik}
          placeholder="    نشانی محل سکونت ..."
          label="آدرس محل سکونت"
          name="address"
        />

        {/* ----------- RadioButton for marrid & gender----------- */}
        <RadioInput
          label="جنسیت"
          formik={formik}
          radioOptions={radioOptions}
          name="gender"
          value="value"
        />
        <RadioInput
          label="وضعیت تاهل"
          formik={formik}
          radioOptions={marrideOptions}
          name="marride"
          value="value"
        />
       

        
      </form>
    </div>
  );
}

export default PersonalInfo;
