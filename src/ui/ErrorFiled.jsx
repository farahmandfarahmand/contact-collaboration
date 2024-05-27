function ErrorFiled({formik,name}) {
    return ( 
        <span className="p-1 text-end pt-2 w-full h-full mr-1 sm:row-span-2 sm:ml-4 ml-5 sm:mb-5 sm:mt-1">
        {formik.errors[name] && formik.touched[name] &&(
              <div className="text-[0.75rem]  sm:mb-0 sm:text-[0.85rem] text-red-600">
              {formik.errors[name]}
            </div>
            )} 
        </span>  
     );
}

export default ErrorFiled;