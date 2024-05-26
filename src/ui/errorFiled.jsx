

function ErrorFiled({ErorrProperty,TouchFiled}) {
    return ( 
        <div className="">
            {ErorrProperty && TouchFiled && (
              <div className="text-[0.65rem] mb-1 sm:mb-0 sm:text-[0.75rem] text-red-600 mr-4">
                {ErorrProperty}
              </div>
            )}
        </div>
     );
}

export default ErrorFiled;