import { BiSolidBookContent } from "react-icons/bi";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaTrafficLight } from "react-icons/fa";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdOutlinePublic } from "react-icons/md";
import { SiCodefactor } from "react-icons/si";

const dataSeoItem = [
  {
    id: "1",
    title: "محتوای با کیفیت",

    icon: <BiSolidBookContent className="w-8 h-8 sm:w-6 sm:h-6" color="orange" />,

    // dataAnchor:"center-bottom"
  },
  {
    id: "2",
    title: " لینک های خارجی و داخلی ",

    icon: <LuArrowLeftRight className="w-8 h-8 sm:w-6 sm:h-6" color="orange" />,

    // dataAnchor:"center-bottom"
  },
  {
    id: "3",
    title: " بهبود ترافیک و سرعت سایت ",

    icon: <FaTrafficLight className="w-8 h-8 sm:w-6 sm:h-6" color="orange" />,

    // dataAnchor:"center-bottom"
  },
  {
    id: "4",
    title: "کدنویسی استاندارد صفحات",

    icon: <IoCodeWorkingSharp className="w-8 h-8 sm:w-6 sm:h-6" color="orange" />,

    // dataAnchor:"center-bottom"
  },
  {
    id: "5",
    title: " فعالیت در شبکه های اجتماعی",
    icon: <MdOutlinePublic className="w-8 h-8 sm:w-6 sm:h-6" color="orange" />,

    // dataAnchor:"center-bottom"
  },
  {
    id: "6",
    title: " عناوین، تگ‌ها و ساختار آدرس‌‌ها ",

    icon: <SiCodefactor className="w-8 h-8 sm:w-6 sm:h-6 " color="orange" />,

    // dataAnchor:"center-bottom"
  },
];
// !-------------------------------------------------------
function SeoSite() {
  return (
    <section id="seoItem"
      className="sm:bg-white sm:w-[90%]  items-center  mt-20 gap-4  md:relative
       rounded-xl  mb-20  flex flex-col  md:grid   md:grid-cols-3 md:gap-x-10"
    >
      <div className="  md:col-span-3 ">
      <div
       data-aos="fade-right"
       data-aos-delay="200"
       data-aos-mirror="true"
       data-aos-once="false"
       data-aos-duration="1000"
      className="  w-[18rem] h-[17rem] flex  md:absolute -bottom-10  top-0 -left-20 ">
        <div
        
          className="animationImg w-[16rem] h-[13rem] rotate-0 hover:rotate-2
           duration-500 hover:-translate-z-1 -mr-52   mt-8   translate-x-16
             aspect-w-2 aspect-h-1 order-2  [clip-path:polygon(20%_0%,_97%_0%,_83%_100%,_0%_100%)] "
        
        >
          <img
            className=" object-cover  "
            src="/public/images/seo1.png"
            alt=""
          />
        </div>
        <div className="w-full h-full  bg-blue-700  transition-all duration-500 [clip-path:polygon(20%_0%,_97%_0%,_80%_100%,_0%_100%)] "></div>
      </div>

      <div className=" rounded-lg md:w-[55%] md:col-span-2">
        <h1 
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-duration="1000"
        className="text-[2rem] text-blue-700 text-justify font-semibold p-2 mt-2">
          سئو سایت
        </h1>
        <p className="text-md p-2 text-justify indent-4 w-full ">
          سئو مخفف Search Engine Optimization به معنی بهینه سازی وب سایت برای
          موتورهای جستجو می‌باشد. مجموعه‌ای از فعالیت‌هایی است که در طراحی و
          کدنویسی سایت، تدوین استراتژی محتوایی، تولید محتوا و لینک‌سازی خارجی
          انجام می‌دهیم تا جایگاه بهتری در نتایج جستجوی گوگل کسب کرده و
          بازدیدکننده بیشتری برای سایت جذب کنیم. درنتیجه گوگل متوجه این حضور
          پررنگ و طولانی مدت کاربر در سایت شده و برداشت می‌کند که این سایت،
          خدمات خوبی به کاربر ارائه می‌کند. پس به آن سایت رتبه بهتری اعطا می‌کند
          که روی سئوی سایت تاثیر بسزایی خواهد داشت.
        </p>
      </div>
      </div>
      <div className="col-span-3 ">
        <h3 className="p-2 font-semibold text-gray-600 text-[0.95rem]">عوامل موثر در سئو سایت</h3>
        <div className="flex flex-wrap gap-2 items-center group text-center  cursor-pointer font-semibold text-[0.75rem] ">
          {dataSeoItem.map((item) => (
            <div
              key={item.id}
              className="sm:w-28 sm:h-28 w-44 h-44 sm:group-hover:m-[0.15rem]  flex flex-col  sm:-ml-6 mb-2 items-center justify-center rounded-lg
               bg-gray-50 border-4 border-white shadow-lg sm:mb-2 "
            >
              <span className="w-6 h-6 mb-5" color="orange">
                {item.icon}{" "}
              </span>
              <p className="text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeoSite;
