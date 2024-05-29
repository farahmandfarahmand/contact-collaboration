import { useState } from "react";
import LabelFiled from "./LabelFiled";
import ErrorFiled from "./ErrorFiled";


function UploadFile({formik,label,name}) {

    const [asset, setAsset] = useState("");

    const handleAsset = (e) => {
      setAsset(e.target.files[0].name);
    };

  return (
    <div className="w-full flex flex-wrap  mx-auto  rounded-sm">
       <span className=" flex  w-full sm:mr-1 justify-between  p-2 ">
        <LabelFiled formik={formik} name={name} label={label} />
        <ErrorFiled formik={formik} name={name} />
      </span>
  
    <div className="flex w-full items-center py-1 bg-gray-50 rounded-md m-2 justify-between p-2">
    
      <h3 className="text-gray-400 text-[0.65rem] overflow-hidden  sm:text-[0.75rem]">{asset ? asset : "لطفا فایل خود را انتخاب کنید"}</h3>
      <label htmlFor="file" className="cursor-pointer ">
        <div className="bg-[#dbe2ff] text-sm gap-1.6 px-2 flex rounded-md items-center p-1 ">
         <span className="text-[0.85rem] min-w-20 py-2 text-center  sm:text-[1rem]">انتخاب فایل</span>
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

