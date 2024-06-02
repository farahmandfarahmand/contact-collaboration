import TextFiled from "../../ui/textFiled";
import SelectOptions from "../../ui/SelectOption";

// --------------------------
const selectOptions = [
  { label: "   انتخاب کنید...", value: "" },
  { label: "  دیپلم", value: "0" },
  { label: " فوق دیپلم  ", value: "1" },
  { label: "  لیسانس ", value: "2" },
  { label: "  فوق لیسانس ", value: "3" },
  { label: "   دکترا ", value: "4" },
  { label: "   فوق دکترا ", value: "5" },
];
//  !------------------------------------------
function EducationalInfo({ formik }) {
  return (
    <div className="sm:mt-10">
      <div
        className=" flex flex-wrap gap-4 sm:grid sm:grid-cols-2  sm:gap-4 "
     
      >
        <SelectOptions
          selectOptions={selectOptions}
          formik={formik}
          name="degree"
          label=" مدرک تحصیلی "
        />
        <TextFiled
          label="  دانشگاه محل تحصیل "
          placeholder=" دانشگاه ... "
          name="university"
          type="text"
          id="text"
          formik={formik}
        />
        <TextFiled
          label="رشته تحصیلی"
          placeholder="  "
          type="text"
          name="speciality"
          id="speciality"
          formik={formik}
        />
      </div>
    </div>
  );
}

export default EducationalInfo;
