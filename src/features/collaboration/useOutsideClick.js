import { useEffect } from "react";

function useOutsideClick(ref, exceptionId, cb) {
  useEffect(() => {
    function handelOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exceptionId
      ) {
        // console.log("inline click");
        cb();
      }
    }
    document.addEventListener("mousedown", handelOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handelOutsideClick);
    };
  }, [ref, cb, exceptionId]);
}

export default useOutsideClick;
