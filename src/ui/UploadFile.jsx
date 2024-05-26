import { useState } from "react";


function UploadFile({formik}) {

    const [asset, setAsset] = useState("");

    const handleAsset = (e) => {
      setAsset(e.target.files[0].name);
    };

  return (
    <div className="w-full    col-span-2 mx-auto  text-white rounded-sm">
    {formik.errors.attachFile && formik.touched.attachFile}
          <div className="text-[0.65rem] ml-4  text-left sm:mb-0 sm:text-[0.75rem] text-red-600">
            {formik.errors.attachFile}
          </div>
    <div className="flex items-center py-1 bg-gray-50 rounded-md m-2 justify-between p-2">
    
      <h3 className="text-gray-400 text-[0.65rem] overflow-hidden  sm:text-[0.75rem]">{asset ? asset : "لطفا فایل خود را انتخاب کنید"}</h3>
      <label htmlFor="file" className="cursor-pointer ">
        <div className="bg-third-900  text-sm gap-1.6 px-2 flex rounded-md items-center p-1 ">
         <span className="text-[0.65rem] min-w-16 text-center  sm:text-[0.75rem]">انتخاب فایل</span>
        </div>
        <input
          id="file"
          type="file"
          className="hidden  "
          onChange={handleAsset}
          multiple
          // size={60}
    
        />
     
      </label>
    </div>
    {/* {formik.errors.attachFile ? (
            <p className="text-[0.65rem] text-red-600 inline-block ">{formik.errors.attachFile}</p>
          ) : (
            <p className="text-[0.65rem] text-gray-500 inline-block ">{formik.errors.attachFile}</p>
          )} */}
         
        
       
  </div>
  );
}

export default UploadFile;
// $("#files").change(function() {
//     filename = this.files[0].name;
//     console.log(filename);
//   });

