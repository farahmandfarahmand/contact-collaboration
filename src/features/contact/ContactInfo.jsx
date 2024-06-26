import { BsEnvelopeArrowUp } from "react-icons/bs";
import TextFiled from "../../ui/textFiled";

import { useFormik } from "formik";

import * as Yup from "yup";
// import Captcha from "../captcha/Captcha";
import InfoUs from "./InfoUs";
import { useEffect,  useState } from "react";
import axios from "axios";
import ExtraTextFiled from "../../ui/ExtraTextFiled";

// ---------------------------------------------

// 1. managin store
// 2. handeling form submition
// 3. validation- error message

// 1.
const initialValues = {
  name: "",
  family: "",
  phoneNumber: "",
  email: "",
  message: "",
  // captcha: "",
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
// --------------------------
// 3.
const validationSchema = Yup.object({
  name: Yup.string()
    .required(" لطفا نام خود را وارد کنید.")

    .min(4, "طول نام نباید کمتر از 6 کاراکتر باشد"),
  email: Yup.string()
    .required(" لطفا ایمیل خود را وارد کنید.")
    .email("فرمت ایمیل نادرست است."),
  family: Yup.string().required("  لطفا نام خانوادگی خود را وارد کنید."),
  phoneNumber: Yup.string()
    .required("     لطفا شماره تماس خود را وارد کنید.  ")
    .matches(/^[0-9]{11}$/, "شماره تماس نامعتبر است")
    .nullable(),
  message: Yup.string().required("لطفا متن پیام خود را وارد کنید. "),

  // captcha: Yup.string().required("لطفا کد امنیتی را به درستی وارد کنید."),
});

// const validate = (values) => {
//   // console.log(values);
//   // error={}
//   //error.name , error.email , error.password -> should be write these errors

//   let errors = {};
//   if (!values.name) {
//     errors.name = "لطفا فیلد نام را پر کنید";
//   }

//   if (!values.email) {
//     errors.email = "لطفا فیلد ایمیل را پر کنید";
//   }

//   if (!values.password) {
//     errors.password = "لطفا فیلد پسورد را پر کنید";
//   }
//   console.log(errors);
//   return errors;
// };

// -------------------------------------------------
function ContactInfo() {
  const [formValues, setFormValues] = useState(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: onSubmit,
    // validate: validate,
    validationSchema,
    validateOnMount: true,
  });
  // console.log("visited filed", formik.touched);

  // console.log(formik.values);

  //  const changeHandler=(e)=>{
  //   setInputFields({...inputFields,[e.target.name]:e.target.value})
  //  }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("submitted...");
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/1")
      .then((res) => setFormValues(res.data))

      .catch((err) => console.log(err));
  }, []);

  // const refValue = useRef();
  // const [emptyInput, setEmptyInput] = useState(false);
  // useEffect(() => {
  //   if(emptyInput){
  //     console.log('empty filed');
  //     refValue.current.focus();
  //   }
  // }, [emptyInput]);

  return (
    <div className=" sm:flex sm:max-w-screen-xl sm:h-full m-2 rounded-sm  bg-[#f6f6f6] ">
      <InfoUs />
      <div className=" shadow-2xl bg-white lg:w-[80%] sm:max-h-full  m-3 md:max-w-screen-lg rounded-lg relative ">
        <div className="bg-primary-100 py-2.5 p-2 rounded-sm mb-5 ">
          <span className="flex  gap-x-2 items-center  relative">
            <div className="bg-primary-800 mt-1 mb-1 w-14 h-14 absolute rounded-sm ">
              <BsEnvelopeArrowUp
                className="w-12 h-12 absolute mr-1 mt-1  "
                color="white"
              />
            </div>
            <h3 className="mr-20 text-sm font-semibold text-primary-0 ">
              فرم تماس با ما
            </h3>
          </span>
        </div>
        <div className=" flex flex-col lg:gap-y-1   lg:max-h-full  ">
          <form
            className="  lg:content-center  "
            onSubmit={formik.handleSubmit}
          >
            <div className=" lg:grid lg:grid-cols-2 lg:h-full  lg:gap-1 p-2">
              {/* <p className="sm:col-span-2 text-sm sm:text-md">میتوانید مشاوره رایگان تلفنی دریافت کنید.</p> */}
              <p className=" lg:col-span-2  text-sm lg:text-md">
                {" "}
                هم اکنون درخواست مشاوره دهید تا کارشناسان ما با شما تماس بگیرند.
              </p>
              {/*------ --------------Information Of Form----------- */}
              
              <TextFiled
             
                // refValue={refValue}
                label="نام"
                placeholder=" نام "
                name="name"
                id="name"
                formik={formik}
                // value={formik.values.name}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />

              <TextFiled
              // refValue={refValue}
                label="نام خانوادگی"
                placeholder="  نام خانوادگی"
                name="family"
                type="text"
                id="text"
                formik={formik}
              />

              <TextFiled
           
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
              />
              {/* ---------------------Message Data-------------------- */}

              <ExtraTextFiled
              
                formik={formik}
                placeholder="   متن درخواست شما ..."
                label=" درخواست "
                name="message"
              />

              {/*  ---------------------Captcha Code------------------- */}
              {/* <div className="col-span-2  ">
              <span className="grid grid-cols-2  p-2 ">
               <span className="flex">
               <label className="text-[0.75rem] ml-1 mr-2 "> کد امنیتی </label>
                {formik.errors.captcha ? (
                  <p className="text-[0.65rem] text-red-600 ">(*)</p>
                ) : (
                  <p className="text-[0.65rem] text-gray-500 ">(*)</p>
                )}
               </span>
               <span className="mr-1 text-left ml-4 ">
                  {formik.errors.captcha && formik.touched.captcha } 
                  <div className="text-[0.65rem]  sm:mb-0 sm:text-[0.75rem] text-red-600">
                    {formik.errors.captcha}
                  </div>
                
                </span>

              </span>
            
             
            </div> */}
            </div>

            {/*-----------------Submit Button---------------- */}
            <div className="col-span-2  sm:p-2 sm:col-span-2 sm:grid sm:place-items-center sm:w-full  sm:absolute sm:bottom-0   bg-primary-100   w-full ">
              {/* <p> {!formik.isValid === true ? "True" : "False"} </p> */}
              <button
                type="submit"
                className="btn mb-0   w-full sm:w-1/3  hover:bg-third-900 
                 hover:transition-all hover:shadow-lg shadow-primary-300 
                 cursor-pointer 
                   hover:flex-grow-0
                "
                disabled={!formik.isValid}
              >
                ارسال درخواست
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
