import { RiSeoLine } from "react-icons/ri";
import { FaDigitalTachograph } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";

// import ScrollToItme from "./ScrollToItem";
import { Link } from "react-scroll";
import { CgWebsite } from "react-icons/cg";
// ?-------------------Data Base--------------------
const dataServiceItem = [
  {
    id: "1",
    title: "   سئو سایت  ",

    icon: <RiSeoLine color="#E87A00" className=" w-12 h-12" />,
    toScrollLink:"seoItem",
    // dataAnchor:"top-center"
  },
  {
    id: "2",
    title: "    تولید محتوا  ",

    icon: <RiProductHuntLine color="#E87A00" className="  w-12 h-12 " />,
    toScrollLink: "contentItem",
    // dataAnchor:"top-center"
  },
  {
    id: "3",
    title: "   دامنه و سرور   ",
    icon: <RiGlobalLine color="#E87A00" className="  w-12 h-12 " />,
    toScrollLink: "domainItem",
    // dataAnchor:"top-center"
  },
  {
    id: "4",
    title: "   دیجیتال مارکتینگ ",
    icon: <FaDigitalTachograph color="#E87A00" className="   w-12 h-12 " />,
    toScrollLink: "digitalItem",
    // dataAnchor:"top-center"
  },
  {
    id: "5",
    title: "   مراحل طراحی سایت  ",
    icon: <CgWebsite color="#E87A00" className="   w-12 h-12 " />,
    toScrollLink: "designItem",
    // dataAnchor:"top-center"
  },
];

// ?-------------------------------------------------

// !-----------------------Function-------------------------
function ServiceItems() {
  return (
    <div className="col-span-3 mb-20">
      <div className="gap-y-3">
        <h1 className="col-span-2 p-2 text-[#145DA0] text-[1.2rem] font-bold">
          طراحی سایت با ای کد سایت
        </h1>
        <p className="col-span-3 p-4 text-justify text-gray-600 mb-4 ">
          در این سایت اولویت با کیفیت و ارائه جدید ترین روشهای طراحی سایت بوده
          که به دلیل داشتن افراد متخصص در زمینه طراحی وب سایت، سئو، سایت، تولید
          محتوا ، دیجیتال مارکتینگ برنامه نویسی انتخاب خوبی برای داشتن همراهی
          مطمئن برای شروع کسب و کار در بستر اینترنت را فراهم می‌کند و با توجه به
          نیاز کسب و کار و بودجه مالی شما، بهترین پیشنهاد را با مشاوره رایگان
          ارائه می‌دهند؛ همین الان با تیم طراحان ما تماس بگیرید.
        </p>
      </div>
      {/* <ScrollToItme /> */}
      <div className="flex flex-wrap gap-5 justify-center sm:justify-between">
        {dataServiceItem.map((item) => (
          <Link
            spy={true}
            smooth={true}
            //   offset={50}
            duration={500}
            to={item.toScrollLink}
            key={item.id}
            className="shadow group  items-center hover:scale-125   text-[0.85rem] hover:text-[0.75rem]  bg-white flex flex-col rounded-xl w-32 h-32 "
          >
            <div className=" m-3 group-hover:-scale-x-95 group-hover:duration-700">
              {item.icon}
            </div>
            <div className="text-gray-500 font-semibold">{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServiceItems;
