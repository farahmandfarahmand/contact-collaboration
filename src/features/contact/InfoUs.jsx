import { FaPhoneFlip } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
// import { ImFacebook2 } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function InfoUs() {
    return ( 
        <div className="bg-blue-100 order-1  flex  flex-col  sm:justify-between sm:w-[60%] m-1  rounded-lg border-solid ">
        <img src="/images/4861725-1.svg" alt="" />
        <h3 className="p-2 mb-5 text-center font-bold">
          اطلاعات تماس با ای کد
        </h3>
        <span className="flex p-2 gap-x-3 justify-around items-center">
          <FaPhoneFlip color="blue" />

          <p className="text-sm text-[#415a6c] font-semibold mr-2">
            09211111111
          </p>
        </span>
        <span className="flex p-2 gap-x-3 justify-around items-center">
          <MdMarkEmailRead color="blue" className="w-5 h-5" />

          <p className="text-sm text-[#415a6c] font-semibold">aaaa@gmail.com</p>
        </span>
        <span className="flex p-2 gap-x-3 justify-around items-center">
          <ImLocation2 color="blue" className="w-5 h-5 ml-4" />
          <p className="text-sm text-[#415a6c] font-semibold ">Iran - Tehran</p>
        </span>
        <span className="flex p-2 pt-6 gap-x-4 mb-2 justify-center items-center">
          {/* <ImFacebook2 className=" w-5 h-5" /> */}
          <IoLogoWhatsapp className=" w-5 h-5" />
          <FaTelegram className=" w-5 h-5" style={{ fill: "#e31963" }} />
          <FaGithub className=" w-5 h-5" />
          <FaLinkedin className=" w-5 h-5" />
        </span>
      </div>
     );
}

export default InfoUs;