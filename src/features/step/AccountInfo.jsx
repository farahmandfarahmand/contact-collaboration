import TextFiled from "../../ui/textFiled";

function AccountInfo({formik}) {
    return ( 
        <div className="sm:mt-10">
      
        <div
          className=" flex flex-wrap gap-4 sm:grid sm:grid-cols-2  sm:gap-4 "
     
        >
          
       
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
   
       
  
          
        </div>
      </div>
     );
}

export default AccountInfo;