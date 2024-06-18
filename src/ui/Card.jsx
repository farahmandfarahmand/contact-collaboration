import { MdSupportAgent } from "react-icons/md";
import { FcMultipleDevices } from "react-icons/fc";
import { VscExtensions } from "react-icons/vsc";
import { LiaToolsSolid } from "react-icons/lia";
// import { IoCodeSlashOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";

const data = [
  {
    id: "1",
    title: " طراحی وب سایت",
    descrip:
      "   تیم ما سعی میکند تا یک وب سایت جذاب، کامل و کاربرپسند را برای مشتریان عزیز خود تدارک ببیند.  ",
    icon: <LuMonitor color="white" />,
    dataAos: "fade-left",
    // dataAnchor:"center-bottom"
  },
  {
    id: "2",
    title: "طراحی سایت ریسپانسیو",
    descrip:
      "نمایش مناسب صفحات وب در تمامی دستگاهای مختلف مانند دسکتاپ، تبلت، موبایل و مرورگرهای مختلف می باشد.",
    icon: <FcMultipleDevices color="white" />,
    dataAos: "zoom-in-up",
    // dataAnchor:"top-center"
  },
  {
    id: "3",
    title: " قابلیت توسعه پذیری",
    descrip:
      "امکان توسعه سایت در آینده و ایجاد هر گونه تغییر در ساختار کد یا حتی ظاهر طراحی، گسترش تعداد صفحات وب و ... از جمله چالش هایی است که تیم ما در نظر گرفته است. ",
    icon: <VscExtensions color="white" />,
    // <IoCodeSlashOutline />
    dataAos: "fade-right",
    // dataAnchor:"top-center"
  },
  {
    id: "4",
    title: " تعهد و پشتیبانی ",
    descrip:
      "ما متعهد به ارائه‌ی بهترین و باکیفیت‌ترین خدمات به مشتریان خود هستیم. در جهت پاسخگویی موثر به نیازهای شما کارشناسان پشتیبانی در خدمتتان هستند",
    icon: <MdSupportAgent color="white" />,
    // <MdSupportAgent />
    dataAos: "zoom-out-left",
    // dataAnchor:"top-center"
  },
  {
    id: "5",
    title: "    طراحی رابط کاربری  ",
    descrip:
      "طراحی گرافیکی زیبا از وب یک سایت است گه کاربر آن را مشاهده می کند  و اینکه ظاهر هر بخش به چه صورتی باشد تا جلوه ی مناسبی به وب سایت بدهد را طراح این بخش مشخص می کند.",
    icon: "UI",
    dataAos: "zoom-in-up",
    // dataAnchor:"top-center"
  },
  {
    id: "6",
    title: " طراحی تجربه کاربری  ",
    descrip:
      "    وب‌سایت  طوری طراحی شده باشد که هر بخش به راحتی در دسترس کاربران قرار بگیرد  مثلا باکس جستجو در کجای صفحه قرار گیرد که به آسانی در دسترس کاربر  باشد یا اینکه چگونه کاربران را به صفحه دلخواه خود هدایت کنیم که یکی از مسائل مهم UX  می‌باشد.",
    icon: "UX",
    dataAos: "zoom-out-right",
    // dataAnchor:"top-center"
  },
];
function Card() {
  return (
    <div className="sm:m-2  relative">
      <div className="absolute z-0 top-0 right-20 left-20 -bottom-10 rounded-lg  sm:border-2 sm:border-primary-100"></div>
     <div className="z-[2]">
        <div className="w-full flex  justify-center   sm:col-span-2 mt-8 md:col-span-3 ">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="1000"
            className="mb-3 p-4 flex text-[0.85rem] font-bold rounded-sm sm:col-span-2 mt-8 md:col-span-3 "
          >
            <LiaToolsSolid
              color="orange"
              className="sm:h-6 sm:w-6 w-8 h-8 ml-4 animate-pulse"
            />
            <h1 className="text-[1rem] "> ابزارهای مناسب طراحی سایت</h1>
          </span>
        </div>

        <div className="flex sm:z-50 flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-2 md:gap-4 md:grid md:grid-cols-3">
          {data.map((item) => (
            <div
              key={data.id}
              data-aos={item.dataAos}
              // data-aos-anchor={item.dataAnchor}
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-duration="1000"
              className="bg-white overflow-hidden sm:z-[100] h-50 sm:h-44 flex flex-col items-center rounded-lg shadow-xl hover:border-1 hover:border-primary-900 "
            >
              <div className=" pt-0 h-full flex flex-col gap-2 p-2 items-center w-full ">
                <div className="bg-primary-800 h-10 rounded-b-xl w-[95%] sm:w-[96%] md:[100%] flex items-center justify-center md:justify-items-start  p-3">
                  <div className="w-5 h-5 text-white ">{item.icon}</div>
                  <p className="text-[0.75rem] sm:text-[0.85rem]  font-bold mr-2 text-white">
                    {item.title}
                  </p>
                </div>
                <p className="text-[0.75rem] sm:text-[0.85rem] w-full h-full text-gray-600 text-justify ">
                  {item.descrip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default Card;
