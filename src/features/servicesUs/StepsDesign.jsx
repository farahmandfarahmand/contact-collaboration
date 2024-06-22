const dataStepsDesign = [
  {
    id: "1",
    title: "   طراحی وایرفریم  ",

    pic: "/public/images/stepDesign1.gif",
    description:
      "با در نظر گرفتن نیازها و خواسته‌های شما، یک نقشه کلی از صفحات وب سایت طراحی خواهد شد   که ساختار صفحات و چیدمان آنها را مشخص می‌کند. ",
    // dataAnchor:"center-bottom"
  },
  {
    id: "2",
    title: "  طراحی گرافیکی   ",

    pic: "/public/images/stepDesign2.gif",
    description:
      "پس از تائید شما، طراحان ما بر اساس نقشه‌های اولیه،  وب سایت شما را به صورت گرافیکی طراحی  کرده و جزئیات طرح شما را مشخص خواهند کرد.",
    // dataAnchor:"center-bottom"
  },
  {
    id: "3",
    title: "  پیاده سازی کدها  ",

    pic: "/public/images/stepDesign3.gif",
    description:
      "در نهایت برنامه‌نویسای ما طرح گرافیکی مورد تایید شما را به یک وب سایت واقعی تبدیل خواهند کرد. کار کدنویسی به بهینه ترین شکل ممکن انجام می‌شود.  ",
  },
];
// !-----------------------------------------
function StepsDesign() {
  return (
    <div id="designItem" className=" flex flex-col  ">
      <div className=" mb-6">
        <h1 className="text-[1.2rem] p-1 font-bold text-center ">
          مراحل طراحی سایت
        </h1>
        <p className="text-[1rem] text-center text-gray-500">
          طراحی وب سایت شما را در 3 مرحله انجام خواهیم داد
        </p>
      </div>
      <div className=" flex bg-blue-300  flex-wrap justify-center  items-center  sm:justify-around   ">
        {dataStepsDesign.map((item) => (
          <div
            key={item.id}
            className=" w-4/5 bg-green-200 sm:w-2/5 md:w-1/5 flex flex-col items-center"
          >
            <img className=" bg-red-200  " src={item.pic} alt="" />
            <h1 className=" text-center text-[1rem] font-bold">{item.title}</h1>
            <p className="text-center p-2 leading-6 text-[0.75rem] text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepsDesign;
