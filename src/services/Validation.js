import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string()
      .required(" لطفا نام  خود را وارد کنید.")
      .min(4, "طول نام نباید کمتر از 6 کاراکتر باشد"),
    family: Yup.string().required("  لطفا نام خانوادگی خود را وارد کنید."),
    birthdate: Yup.date()
      .required("لطفا تاریخ تولد خود را انتخاب کنید.")
  
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
    soldier: Yup.string().required("لطفا وضعیت نظام وظیفه خود را مشخص کنید."),
  });
  
  export default validationSchema;