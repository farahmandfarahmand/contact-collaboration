function ErrorFiled({formik,name}) {
    return ( 
        <span className={`${formik.errors[name] && formik.touched[name]? "block":"hidden"}`}>
        {formik.errors[name] && formik.touched[name] &&(
              <div className="text-[0.75rem] sm:text-[0.85rem] text-red-600">
              {formik.errors[name]}
            </div>
            )} 
        </span>  
     );
}

export default ErrorFiled;