import { FaEdit } from "react-icons/fa";
// import { IoIosArrowBack } from "react-icons/io";
// import { GrFormNext } from "react-icons/gr";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import TextFiled from "../../ui/textFiled";
import RadioInput from "../../ui/RadioInput";
import SelectOptions from "../../ui/SelectOption";
import ExtraTextFiled from "../../ui/ExtraTextFiled";
import CalendarDate from "../../ui/CalendarDate";
import Stepper from "../../ui/Stepper";

// -----------------------------------------------

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
// ------------------------
// //? 1. managin store
// //? 2. handeling form submition
// //? 3. validation- error message

// 1.
const initialValues = {
  name: "",
  familly: "",
  email: "",
  phoneNumber: "",
  gender: "",
  marride: "",
  soldier: "",
  birthdate: "",
  address: "",
  degree: "",
  speciality: "",
  university: "",
  requestForJob: "",
  // frontend,bachend,tailwind
  stateOfJob: "",
  historyJob: "",
  salary: "",
  uploadFiles: "",

  //   // captcha: "",
};

// 2.-------------------
const onSubmit = (values) => {
  console.log(values);
  console.log({ ...values, newData: "19 jan 1984" });
  axios
    .post("http://localhost:8000/users", values)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
// //! -----------------------------------------------------------
// 3.

const validationSchema = Yup.object({
  name: Yup.string()
    .required(" لطفا نام  خود را وارد کنید.")
    .min(4, "طول نام نباید کمتر از 6 کاراکتر باشد"),
  family: Yup.string().required("  لطفا نام خانوادگی خود را وارد کنید."),
  birthdate: Yup.date().required("لطفا تاریخ تولد خود را انتخاب کنید.")
  
    .typeError("Invalid Date!"),
  email: Yup.string()
    .required(" لطفا ایمیل خود را وارد کنید.")
    .email("فرمت ایمیل نادرست است."),

  phoneNumber: Yup.string()
    .required("     لطفا شماره تماس خود را وارد کنید.  ")
    .matches(/^[0-9]{11}$/, "شماره تماس نامعتبر است")
    .nullable(),
  gender: Yup.string().required("لطفا جنسیت خود را مشخص کنید."),
  marride: Yup.string().required("لطفا وضعیت تاهل خود را مشخص کنید."),
  address: Yup.string().required("لطفا نشانی محل سکونت خود را وارد کنید. "),
  //   .shape({
  //     country: Yup.string().required(),
  //     city: Yup.string().required(),
  //   }),
  degree: Yup.string().required("لطفا مدرک تحصیلی خود را انتخاب کنید."),
  speciality: Yup.string().required("لطفا رشته  تحصیلی خود را انتخاب کنید."),
  university: Yup.string().required("لطفا دانشگاه محل تحصیل خود را وارد کنید."),
  requestForJob: Yup.string().required(
    "لطفا نوع علاقه خود برای همکاری را انتخاب کنید."
  ),
  stateOfJob: Yup.string().required("لطفا وضعیت اشتغال خود را  مشخص کنید."),
  historyJob: Yup.string().required("لطفا سابقه کاری خود را انتخاب کنید."),
  salary: Yup.string().required("       لطفا حقوق درخواستی خود را وارد کنید. "),
  uploadFiles: Yup.string().required("لطفا رزومه کاری خود را بارگذاری کنید."),
  // captcha: Yup.string().required("لطفا کد امنیتی را به درستی وارد کنید."),
  soldier: Yup.string().required("لطفا وضعیت نظام وظیفه خود را انتخاب کنید."),
});
//! ---------------------------------------------------
function CollaborationForm() {
  const [formValues, setFormValues] = useState(null);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: onSubmit,
    // validate: validate,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/1")
      .then((res) => setFormValues(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative bg-yellow-100   flex-col    w-full h-dvh m-10 p-4 shadow-xl rounded-t-3xl">
      <section className="z-0 w-full  flex p-2 justify-between items-center   ">
        <div className="  " >
          <h3 className="sm:text-xl font-semibold">فرصت های شغلی</h3>
          <p className="text-sm sm:text-lg">
            اگر مایل به همکاری با مجموعه ما هستید، لطفا فرم زیر را به طور کامل
            پر کرده و برای ما ارسال کنید.
          </p>{" "}
        </div>
        <div className="">
      
          <FaEdit className="w-12 h-12" style={{ fill: "#0035ac" }} />
        </div>
      </section>
      <div className="bg-white top-28 sm:top-32 z-10 w-full   absolute  bottom-0 left-0 rounded-t-3xl p-2 ">
        <section className=" ">
          <div className="  sm:content-center">
            <form
              className=" sm:grid sm:grid-cols-2  sm:h-full sm:gap-1 "
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
                placeholder="  نام خانوادگی"
                name="family"
                type="text"
                id="text"
                formik={formik}
              />
              <CalendarDate
                label="تاریخ تولد"
                formik={formik}
                name="birthdate"
              />
              {/* ----------- select options ----------- */}
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

              {/* --------- RadioButton--------------- */}
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
            <Stepper/>
            </form>
          </div>
        
    
        </section>
      </div>
    </div>
  );
}

export default CollaborationForm;
