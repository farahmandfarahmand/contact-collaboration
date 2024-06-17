import { MdSupportAgent } from "react-icons/md";
import { FcMultipleDevices } from "react-icons/fc";
import { VscExtensions } from "react-icons/vsc";

// import { IoCodeSlashOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";

const data = [
  {
    id: "1",
    title: " طراحی وب سایت",
    descrip:
      "   تیم ما سعی میکند تا یک وب سایت جذاب، کامل و کاربرپسند را برای مشتریان عزیز خود تدارک ببیند.  ",
    icon: <LuMonitor />,
    dataAos: "fade-left",
    // dataAnchor:"center-bottom"
  },
  {
    id: "2",
    title: "طراحی سایت ریسپانسیو",
    descrip:
      "نمایش مناسب صفحات وب در تمامی دستگاهای مختلف مانند دسکتاپ، تبلت، موبایل و مرورگرهای مختلف می باشد.",
    icon: <FcMultipleDevices />    ,
    dataAos: "zoom-in-up",
    // dataAnchor:"top-center"
  },
  {
    id: "3",
    title: " قابلیت توسعه پذیری",
    descrip:
   "امکان توسعه سایت در آینده و ایجاد هر گونه تغییر در ساختار کد یا حتی ظاهر طراحی، گسترش تعداد صفحات وب و ... از جمله چالش هایی است که تیم ما در نظر گرفته است. ",
    icon: <VscExtensions />,
    // <IoCodeSlashOutline />
    dataAos: "fade-right",
    // dataAnchor:"top-center"
  },
  {
    id: "4",
    title: " تعهد و پشتیبانی ",
    descrip:
      "ما متعهد به ارائه‌ی بهترین و باکیفیت‌ترین خدمات به مشتریان خود هستیم. در جهت پاسخگویی موثر به نیازهای شما کارشناسان پشتیبانی در خدمتتان هستند",
    icon:<MdSupportAgent/> ,
    // <MdSupportAgent />
    dataAos: "zoom-out-left",
    // dataAnchor:"top-center"
  },
  {
    id: "5",
    title: "    طراحی رابط کاربری  ",
    descrip:
      "طراحی گرافیکی زیبا از وب سایت است گه کاربر آن را مشاهده می کند  و اینکه ظاهر هر بخش به چه صورتی باشد تا جلوه ی مناسبی به وب سایت بدهد را طراح این بخش مشخص می کند.",
    icon: "UI",
    dataAos: "zoom-in-up",
    // dataAnchor:"top-center"
  },
  {
    id: "6",
    title: " طراحی تجربه کاربری  ",
    descrip:
      "    وب‌سایت ما طوری طراحی شده باشد که هر بخش به راحتی در دسترس کاربران قرار بگیرد  مثلا باکس جستجو در کجای صفحه قرار گیرد که به آسانی در دسترس کاربر  باشد یا اینکه چگونه کاربران را به صفحه دلخواه خود هدایت کنیم که یکی از مسائل مهم UX  می باشد.",
    icon: "UX",
    dataAos: "zoom-out-right",
    // dataAnchor:"top-center"
  },
];
function Card() {
  return (
    <>
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
          className="overflow-hidden h-50 flex flex-col items-center rounded-lg shadow-xl hover:border-1 hover:border-orange-100 "
        >
          <div className="bg-white h-10 border-b border-orange-400 flex gap-4 p-2 items-center w-full ">
            <div className="w-5 h-5 ">{item.icon}</div>
            <p className="text-[0.75rem] font-bold   ">{item.title}</p>
          </div>
          <div className="bg-white h-full  p-2 text-justify">
            <p className="text-[0.65rem] text-gray-600 text-wrap  ">{item.descrip}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
