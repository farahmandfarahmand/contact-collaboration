import TextFiled from "../../ui/textFiled";

function AccountInfo({formik}) {
    return ( 
        <div className="sm:mt-10">
      
        <form
          className=" flex flex-wrap gap-4 sm:grid sm:grid-cols-2  sm:gap-4 "
          onSubmit={formik.handleSubmit}
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
   
       
  
          
        </form>
      </div>
     );
}

export default AccountInfo;