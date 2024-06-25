import { CgWebsite } from "react-icons/cg";
import { TbHandClick } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiVideoLight } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbNetwork } from "react-icons/tb";


const dataDigitalApproch = [
  {
    id: "1",
    title: "  بنری یا نمایشی ",

    icon: <CgWebsite className="w-8 h-8 sm:w-6 sm:h-6" />,
    description:
      "این روش   مانند تبلیغات چاپی قدیمی در مجله‌ها عمل می‌کند، با این تفاوت که بنرهای تبلیغاتی در فضای آنلاین منتشر می‌شوند",
    // dataAnchor:"center-bottom"
  },
  {
    id: "2",
    title: "   کلیکی  ",

    icon: <TbHandClick className="w-8 h-8 sm:w-6 sm:h-6" />,
    description:
      "به‌ازای هر کلیک هزینه تبلیغات به پلتفرم‌های منتشرکننده تبلیغ پرداخت می‌شود که کاربران روی تبلیغات کلیک کنند.",
    // dataAnchor:"center-bottom"
  },
  {
    id: "3",
    title: "  محتوایی   ",

    icon: <IoDocumentTextOutline className="w-8 h-8 sm:w-6 sm:h-6" />,
    description:
      "باید محتوایی تولید کنید که  مورد علاقه مخاطب است. شما می‌توانید از طریق نوشتن در وبلاگ‌ها، انتشار کتاب‌های الکترونیکی و محتوای صوتی به نیاز مخاطب رسیدگی کنید.",
    // dataAnchor:"center-bottom"
  },
  {
    id: "4",
    title: "  ویدئویی",
    icon: <PiVideoLight className="w-8 h-8 sm:w-6 sm:h-6" />,
    description:
      "این شکل از بازاریابی در پلتفرم‌های میزبان محتوای ویدیویی مانند یوتیوب یا تلویزیون‌های اینترنتی به‌کار گرفته می‌شود .از محبوب‌ترین شکل‌های محتوا برای کاربران اینترنت است",
  },
  {
    id: "5",
    title: "     ایمیلی و پیامکی",
    icon: <HiOutlineMailOpen className="w-8 h-8 sm:w-6 sm:h-6" />,
    description: "یکی از روش‌های سریع و مستقیم برای ارتباط با مخاطب است",

    // dataAnchor:"center-bottom"
  },
  {
    id: "6",
    title: "  شبکه‌های اجتماعی  ",
    icon: <TbNetwork className="w-8 h-8 sm:w-6 sm:h-6 " />,
    description:
      "شبکه‌های اجتماعی در دنیای مدرن محبوبیت بیشتری میان کاربران پیدا کرده‌اند. برای دسترسی به کاربران در شبکه‌های اجتماعی مختلف می‌توان از اینستاگرام، فیسبوک، لینکدین و... به استفاده کرد.",
    // dataAnchor:"center-bottom"
  },
];

function DigitalMarketing() {

  return (
    <div id="digitalItem" className="bg-yellow-100 mb-20  items-center">
      <div className="rounded-2xl  bg-[url('/public/images/digital5.png')]  max-w-full overflow-y-scroll bg-content bg-fixed bg-center bg-no-repeat shadow-lg">
        <div className="right-[10%] md:mr-16 ">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-easing="linear"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="1000"
            className="text-[1.5rem] mr-5 mt-16 text-[#0C2D48] font-bold"
          >
            {" "}
            دیجیتال مارکتینگ
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-easing="linear"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="1000"
            className="text-[2rem] mr-5 font-semibold mt-10 text-[#0C2D48]"
          >
            بازاریابی و تبلیغات اینترنتی
          </h1>
        </div>
        <div className="mt-40">
          <div className="bg-[#145DA0] text-[1rem] p-4">
            <div className="font-inter  text-white  ">
              دیجیتال مارکتینگ به گونه‌­ای از بازاریابی محصولات و خدمات
              می­‌گویند که از طریق دستگاه‌­های الکترونیکی در حوزه اینترنت انجام
              می‌­شود.
            </div>

            <p className="mt-4 leading-7 text-white">
              سال‌های قبل تبلیغات شامل آگهی‌ها، تلویزیون، رادیویی، چاپی،
              روزنامه، روی بیلبورد، داخل بروشور و ... بود. هزینه‌های تبلیغاتی
              بسیار گران و گزاف بودند و از آنجاییکه نمی‌توان جامعه خاصی را هدف
              قرار داد و گاهی این هزینه‌ها هدر می‌رفتند. اندازه‌گیری نتایج در این
              نوع بازاریابی بسیار سخت و دشوار است.
            </p>
            <p className="mt-4 leading-7 text-white">
              اما امروزه دیجیتال مارکتینگ یک ابزار قدرتمند، سریع و به نسبت سایر
              روش ها کم هزینه است. به دلیل امکان هدف‌گیری مشخص مشتری، برندسازی
              بسیار کارآمد و سریع است. همچنین اندازه‌گیری بازاریابی دیجیتال با
              کمک ابزارهای تحلیلی آسان است.
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-20  pb-3">
      
          <div className=" w-full  jus mr-[3%] md:flex md:gap-4">
            <div className=" md:items-center text-gray-500  md:w-[40%] p-4 flex flex-col gap-2 md:justify-center">
              <h3 className="sm:text-[1rem] font-bold ">
                انواع روش‌های تبلیغاتی
              </h3>

              <p className="text-justify leading-7 text-[0.85rem] sm:text-[0.85rem]">
                انواع مختلفی از کانال‌های دیجیتال مارکتینگ وجود دارد. این
                کانال‌ها پلتفرم‌هایی هستند که می‌توانید از آن‌ها برای دستیابی به
                مخاطبان هدفی که متناسب با برند، محصول یا خدماتتان هستند، استفاده
                کنید و به اهداف بازاریابی خود نزدیک شوید. به خاطر داشته باشید که
                هیچکدام ذاتاً بهتر از دیگری نیست؛ بسته به شرایط و نیازهایتان
                باید بدانید که از کدام کانال بازاریابی دیجیتال استفاده کنید.
              </p>
            </div>
<div className="bg-pink-100  flex flex-col  gap-10 items-center  ">
<div className="bg-green-300 w-full  sm:flex sm:flex-wrap sm:gap-4 ">
<div className=" w-2/5  items-center text-gray-500 hover:scale-125 hover:bg-[#2E8BC0] hover:text-white hover:translate-4  rounded-md  bg-[#B1D4E0] text-center">ghhj</div>
<div className=" w-2/5 items-center text-gray-500 hover:scale-125 hover:bg-[#2E8BC0] hover:text-white hover:translate-4   rounded-md  bg-[#B1D4E0] text-center">ghhj</div>
<div className=" w-2/5 items-center text-gray-500 hover:scale-125 hover:bg-[#2E8BC0] hover:text-white hover:translate-4  rounded-md  bg-[#B1D4E0] text-center">ghhj</div>
<div className=" w-2/5 items-center text-gray-500 hover:scale-125 hover:bg-[#2E8BC0] hover:text-white hover:translate-4  rounded-md  bg-[#B1D4E0] text-center">ghhj</div>
<div className=" w-2/5 items-center text-gray-500 hover:scale-125 hover:bg-[#2E8BC0] hover:text-white hover:translate-4  rounded-md  bg-[#B1D4E0] text-center">ghhj</div>
<div className=" w-2/5 items-center text-gray-500 hover:scale-125 hover:bg-[#2E8BC0] hover:text-white hover:translate-4  rounded-md  bg-[#B1D4E0] text-center">ghhj</div>
</div>
</div>


            {/* <div className="bg-pink-100 flex flex-col sm:items-start sm:flex  sm:flex-wrap sm:justify-center items-center md:w-[60%] gap-4  md:grid md:grid-cols-5  md:grid-rows-2  ">
              {dataDigitalApproch.map((item) =>
                item.id == 2 || item.id == 5 ? (
                  <div
                    key={item.id}
                    className=" md:w-40 md:h-40  md:mr-[15%] sm:w-1/5  w-2/5 items-center text-gray-500  hover:scale-125 hover:bg-[#2E8BC0] hover:text-white hover:translate-4 flex flex-col gap-x-2 rounded-md  bg-[#B1D4E0] text-center "
                  >
                    <div className="  w-10 h-8 mt-5 ">{item.icon}</div>
                    <div className=" w-32 h-6 text-[0.85rem] font-semibold ">
                      {item.title}
                    </div>
                    <div className="text-[0.65rem] w-full p-2">
                      {item.description}
                    </div>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className="md:w-40 md:h-40 md:-mt-8 md:gap-x-2 md:mr-[15%]  w-2/5 items-center text-gray-500 hover:text-white hover:scale-125 hover:bg-[#2E8BC0]  hover:translate-4 flex flex-col gap-x-2 rounded-md  bg-[#B1D4E0] text-center "
                  >
                    <div className="  w-10 h-8 mt-5 ">{item.icon}</div>
                    <div className=" w-32 h-6 text-[0.85rem] font-semibold  ">
                      {item.title}
                    </div>
                    <div className="text-[0.65rem]   w-full p-2">
                      {item.description}
                    </div>
                  </div>
                )
              )}
            </div> */}
          </div>
       
      </div>
    </div>
  );
}

export default DigitalMarketing;
