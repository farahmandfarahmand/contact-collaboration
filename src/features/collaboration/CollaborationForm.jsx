import { FaEdit } from "react-icons/fa";
// import { IoIosArrowBack } from "react-icons/io";
// import { GrFormNext } from "react-icons/gr";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";

import PersonalInfo from "../step/PersonalInfo";
import DesktopStepper from "../../ui/DesktopStepper";
import Stepper from "../../ui/Stepper";
import AccountInfo from "../step/AccountInfo";
import EducationalInfo from "../step/EducationalInfo";
import JobInfo from "../step/JobInfo";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

import validationSchema from "../../services/Validation";
// -----------------------------------------------

// ------------------------
// //? 1. managin store
// //? 2. handeling form submition
// //? 3. validation- error message

// 1.
const initialValues = {
  name: "",
  family: "",
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

  axios
    .post("http://localhost:8000/infoForm", values)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
// //! -----------------------------------------------------------
// 3.


//   name: Yup.string()
//     .required(" لطفا نام  خود را وارد کنید.")
//     .min(4, "طول نام نباید کمتر از 6 کاراکتر باشد"),
//   family: Yup.string().required("  لطفا نام خانوادگی خود را وارد کنید."),
//   birthdate: Yup.date()
//     .required("لطفا تاریخ تولد خود را انتخاب کنید.")

//     .typeError("Invalid Date!"),
//   email: Yup.string()
//     .required(" لطفا ایمیل خود را وارد کنید.")
//     .email("فرمت ایمیل نادرست است."),

//   phoneNumber: Yup.string()
//     .required("     لطفا شماره تماس خود را وارد کنید.  ")
//     .matches(/^[0-9]{11}$/, "شماره تماس نامعتبر است")
//     .nullable(),
//   gender: Yup.string().required("لطفا جنسیت خود را مشخص کنید."),
//   marride: Yup.string().required("لطفا وضعیت تاهل خود را مشخص کنید."),
//   address: Yup.string().required("لطفا نشانی محل سکونت خود را وارد کنید. "),
//   //   .shape({
//   //     country: Yup.string().required(),
//   //     city: Yup.string().required(),
//   //   }),
//   degree: Yup.string().required("لطفا مدرک تحصیلی خود را انتخاب کنید."),
//   speciality: Yup.string().required("لطفا رشته  تحصیلی خود را انتخاب کنید."),
//   university: Yup.string().required("لطفا دانشگاه محل تحصیل خود را وارد کنید."),
//   requestForJob: Yup.string().required(
//     "لطفا نوع علاقه خود برای همکاری را انتخاب کنید."
//   ),
//   stateOfJob: Yup.string().required("لطفا وضعیت اشتغال خود را  مشخص کنید."),
//   historyJob: Yup.string().required("لطفا سابقه کاری خود را انتخاب کنید."),
//   salary: Yup.string().required("       لطفا حقوق درخواستی خود را وارد کنید. "),
//   uploadFiles: Yup.string().required("لطفا رزومه کاری خود را بارگذاری کنید."),
//   // captcha: Yup.string().required("لطفا کد امنیتی را به درستی وارد کنید."),
//   soldier: Yup.string().required("لطفا وضعیت نظام وظیفه خود را مشخص کنید."),
// });

//!----------------------------------------------------

//! ---------------------------------------------------
function CollaborationForm() {
  const [formValues, setFormValues] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);
  const NUMBER_OF_STEPS = 5;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));

  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 1 ? prev : prev - 1));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: onSubmit,
    // validate: validate,
    validationSchema:validationSchema,
    validateOnMount: true,
  });

  console.log(formik.values);
  useEffect(() => {
    axios
      .get("http://localhost:8000/infoForm/1")
      .then((res) => setFormValues(res.data))

      .catch((err) => console.log(err));
  }, []);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formik={formik} />;
      case 2:
        return <AccountInfo formik={formik} />;
      case 3:
        return <EducationalInfo formik={formik} />;
      case 4:
        return <JobInfo formik={formik} />;
      default:
        return null;
    }
  };


  return (
    <div className="relative  bg-[#dbe2ff] flex-col h-[700px] sm:h-[760px] w-full  p-4 shadow-xl rounded-t-3xl">
      <section className="z-0 w-full  flex p-2 justify-between items-center   ">
        <div className="  ">
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
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white h-[700px] sm:h-[670px] top-28  w-full rounded-t-3xl  sm:top-32 z-10  absolute  bottom-0 left-0 p-2 "
      >
        {/* -----------stepper for desktop----------- */}
        <DesktopStepper
          currentStep={currentStep}
          numberOfStep={NUMBER_OF_STEPS - 1}
        />
        {renderStep()}

        {/* -----------stepper for mobile----------- */}

        <div className="w-full absolute bottom-0 left-0 mt-5 sm:hidden max-w-2xl mx-auto bg-indigo-100 border-2 border-primary-700 rounded-md">
          <div className="flex  items-center justify-between gap-3 p-3 bg-white rounded">
            <button
              onClick={goToNextStep}
              className={`${
                currentStep === NUMBER_OF_STEPS - 1
                  ? "text-gray-400 font-medium"
                  : "border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
              }`}
            >
              <span className="flex gap-1.5 items-center text-center">
                <GrFormNext className="w-5 h-5" />
                <p className="mt-1"> بعدی</p>
              </span>
            </button>
            <Stepper currentStep={currentStep} numberOfStep={NUMBER_OF_STEPS} />
            <button
              onClick={goToPreviousStep}
              className={`${
                currentStep === 1
                  ? "text-gray-400 font-medium "
                  : " border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
              }`}
            >
              <span className="flex gap-1.5 items-center text-center">
                <p className="mt-1"> قبلی</p>
                <IoIosArrowBack className="w-4 h-4 " />
              </span>
            </button>
          </div>
        </div>

        {/*  ------buttons of step for Descktop stepper---------- */}
        <div className="flex w-full justify-evenly absolute bottom-0 mb-12  gap-4 ">
          {currentStep <= NUMBER_OF_STEPS - 2 ? (
            <button
              // disabled={!formik.isValid}
              onClick={goToNextStep}
              className="w-48 h-12  hidden mr-4 sm:block shadow-sm rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            >
              بعدی
            </button>
          ) : (
            <button
              type="submit"
              className="w-48 h-12 mb-12 block mr-4 sm:block shadow-sm rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            >
              ارسال
            </button>
          )}

          <button
            onClick={goToPreviousStep}
            className={`${
              currentStep === 1
                ? "w-48 h-12 hidden ml-4 sm:block shadow-sm rounded-md bg-gray-400 transition-all duration-700 text-white text-base font-semibold leading-7"
                : "w-48 h-12 hidden ml-4 sm:block shadow-sm rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            }`}
          >
            قبلی
          </button>
        </div>
      </form>
    </div>
  );
}

export default CollaborationForm;
