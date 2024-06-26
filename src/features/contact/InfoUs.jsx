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
      <h3 className="p-2 text-center font-bold">اطلاعات تماس با ای کد</h3>
      <span className="p-2 text-sm">
        کارشناسان فنی گروه ای کد، آماده پاسخگویی به سوالات شما کاربران گرامی
        می‌باشند.
      </span>
      <span className=" p-2 text-sm">
        برای دریافت استعلام قیمت خدمات   می‌توانید از طریق راه‌های
        ارتباطی ذکر شده با کارشناسان ما تماس حاصل فرمائید.
      </span>
      <span className="flex p-2 gap-x-1 justify-around cursor-pointer items-center">
        <FaPhoneFlip color="blue" />

        <p className="text-sm flex flex-col items-center  text-[#415a6c] font-semibold mr-2">
          <a href="" className="ml-2 ">09211111111</a>
          <span className="text-[0.6rem]">(9 صبح تا 7 شب)</span>
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
        <a 
        
        href="https://api.whatsapp.com/send/?phone=989380535845&text&type=phone_number&app_absent=0">
          <IoLogoWhatsapp className="hover:animate-bounce w-6 h-6 cursor-pointer " />
        </a>
        <a href="https://t.me/telegram">
          <FaTelegram
            className="hover:animate-bounce w-5 h-5 cursor-pointer"
            style={{ fill: "#e31963" }}
          />
        </a>
        <a href="https://github.com/login">
          <FaGithub className="hover:animate-bounce w-5 h-5 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/login">
          <FaLinkedin className="hover:animate-bounce w-5 h-5 cursor-pointer" />
        </a>
      </span>
    </div>
  );
}

export default InfoUs;
