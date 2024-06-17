import { BsStars } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Card from "../../ui/Card";
import { LiaToolsSolid } from "react-icons/lia";
import SeoSite from "./SeoSite";

// ..
AOS.init();
function ServicesUsList() {
  return (
    <div className=" m-24 items-center  ">
      <div className="bg-blue-50 w-full h-full pb-3">
        <div className=" bg-blue-700  border-b-1 border-blue-200 sm:bg-white sm:grid sm:grid-cols-2">
          <div className="bg-blue-700  sm:pr-2 sm:z-10 sm:[clip-path:polygon(20%_0%,_100%_0%,_100%_100%,_0%_100%)]  flex  flex-col  justify-center ">
            <div className="flex items-center p-1">
              <BsStars color="white" className="w-5 h-5" />
              <h2 className=" text-xl sm:ml-5 text-white font-semibold p-2 mt-2 mb-1 ">
                طراحی ایده های شما
              </h2>
            </div>
            <p className="text-white text-justify p-2 text-sm sm:text-md sm:ml-5 md:ml-8 ">
              گروه مهندسی ای کد، دیدگاه شما را با خلاقیت و تخصص فنی، به واقعیت
              تبدیل می کند.
            </p>
            <p className="text-white p-2 text-md sm:text-lg"> </p>
          </div>
          <div className="ml-8 sm:ml-0 sm:-mr-24 sm:z-0 sm:aspect-w-3 sm:aspect-h-2  border-white  flex  items-center justify-center ">
            <img
              className="sm:object-cover  rounded-tl-md  sm:rounded-none "
              src="/images/service5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-y-4 sm:grid sm:grid-cols-2 md:grid-cols-3  sm:m-2 sm:gap-4  ">
        <span
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-duration="1000"
          className="  p-4 flex text-[0.85rem] font-bold rounded-sm sm:col-span-2 mt-8 md:col-span-3 "
        >
          <LiaToolsSolid
            color="orange"
            className="sm:h-6 sm:w-6 w-8 h-8 ml-4 animate-pulse"
          />
          تیم ما معتقد است از ابزارهای مناسب برای طراحی یک سایت خوب استفاده
          می‌کند.
        </span>

        {/* <p>

          
          تیم طراحی سایت  ای کد، سایت شما را به صورت کاملا اختصاصی طراحی
          کرده و هر آنچه که در ذهن شما باشد را خلق می‌کند. طراحی سایت شما به
          صورت کاملا بهینه و ریسپانسیو انجام می‌شود{" "}
        </p> */}
        <Card />
      </div>
      <div></div>
      <div className="flex bg-white gap-4 items-center mt-10 p-4">
        <BsStars
          color="orange"
          className="sm:w-10 sm:h-20 w-20 h-16 mr-2 animate-pulse"
        />
        <h2 className="text-[1.1rem]  text-blue-700 text-justify font-semibold p-2 mt-2">
          الویت تیم ما رضایت مشتریان و رعایت اصول استاندارد در طراحی است
        </h2>
        <div className="flex items-center  ">
          <div className="w-20 h-20  flex  -ml-8  items-center justify-center rounded-full cursor-pointer bg-red-400 border-2 border-white"></div>
          <div className="w-20 h-20   flex   -ml-8   items-center justify-center rounded-full cursor-pointer bg-red-400 border-2 border-white"></div>
          <div className="w-20 h-20   flex     items-center justify-center rounded-full cursor-pointer bg-red-400 border-2 border-white"></div>
        </div>
      </div>

      <SeoSite />
      <section className="bg-yellow-100 flex flex-col  sm:grid sm:grid-cols-2">
        <div className="mb-0 ">
          <img className="mr-10 " src="/images/i-mac-1.png" alt="" />
        </div>
        <div className="sm:order-2">
          <h2 className="text-lg font-semibold p-2 mt-2">
            خرید کد اعتبار تپسی
          </h2>
          <p className="text-md p-2 text-justify indent-4">
            کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد
            نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا
            مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند.
            این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را
            دارند.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ServicesUsList;
