import { useEffect, useState } from "react";

function ContentProduct() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = (e) => {
  //     const { scrollTop, scrollHeight, clientHeight } = e.target;
  //     const position = Math.ceil(
  //         (scrollTop / (scrollHeight - clientHeight)) * 100
  //     );
  //     setScrollPosition(position);
  // };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <section className="bg-yellow-100 mb-20 flex flex-col  md:grid md:grid-cols-2 ">
      <div className="bg-blue-100 items-center md:w-3/4">
        <img
          className={`bg-gray-300  inline-block aspect-w-2 aspect-h-0 object-cover ${
            scrollY ? "-translate-x-20" : "translate-x-0"
          }` }
          src="/images/content8.png"
          alt=""
        />
      </div>

      <div id="contentItem" className="bg-pink-100  ">
        <h2 className="text-[2rem]  text-[#145DA0] font-semibold p-2 mt-2">
          تولید محتوا 
        </h2>
        <div className="p-4">
          <p className="text-md text-justify ">
            تولید محتوا به معنای ایجاد و ساخت محتوایی است که ممکن است شامل متن،
            تصویر، ویدئو، صوت و سایر عناصر چندرسانه‌ای باشد. این محتواها
            می‌توانند برای اهداف مختلفی مانند افزایش بازدید و ترافیک وب سایت،
            ارتباط با مشتریان، تبلیغات، آموزش و غیره به کار گرفته شوند.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContentProduct;
