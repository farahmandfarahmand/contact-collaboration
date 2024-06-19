import { BsStars } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Card from "../../ui/Card";

import SeoSite from "./SeoSite";
import ServiceItems from "./ServiceItems";
import ContentProduct from "./ContentProduct";
import BackToTopButton from "../../ui/BackToTopButton";
import DomainHost from "./DomainHost";

// ..
AOS.init();
function ServicesUsList() {
  return (
    <div className="  items-center  ">
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
          <div className="relative ml-8 sm:ml-0 sm:-mr-24 sm:z-0 sm:aspect-w-3 sm:aspect-h-2  border-white  flex  items-center justify-center ">
            <img
              className="sm:object-cover rounded-tl-md  sm:rounded-none "
              src="/images/service5.jpg"
              alt=""
            />
            {/* <div className="absolute bottom-10 bg-blend-multiply  opacity-40 left-[5.5rem]  ">

            <img src="/public/images/flower2.PNG" alt=""  className="animate-pulse w-[2.2rem] h-[3rem] object-contain "/>
            </div> */}
          </div>
        </div>
      </div>
      <div className="  ">
        <ServiceItems />

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
      <ContentProduct />
      <DomainHost/>
      <BackToTopButton/>
    </div>
  );
}

export default ServicesUsList;
