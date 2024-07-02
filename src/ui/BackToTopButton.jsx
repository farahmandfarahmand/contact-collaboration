import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" fixed z-99 p-4 bottom-[20px] right-[20px]">
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className="flex items-center justify-center cursor-pointer shadow-xl rounded-full hover:bg-[#808d99]  bg-[#145DA0] font-bold w-[45px] h-[45px]"
        >
          <FaArrowUp className="w-6 h-6" color="white" />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
