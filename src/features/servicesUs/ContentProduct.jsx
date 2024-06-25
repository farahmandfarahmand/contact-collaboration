import { useEffect, useState } from "react";

function ContentProduct() {
  const [scrollY, setScrollY] = useState(0);
  let ctr = "translate(-" + (scrollY - 1300) / 7 + "px)";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log((scrollY - 1200) / 3);
  return (
    <section className=" mb-20 flex flex-col  md:grid md:grid-cols-2 ">
      <div className=" items-center md:w-3/4">
        <img
        style={{transform:ctr}}
          className="inline-block aspect-w-2 aspect-h-0 object-cover "
          src="/public/images/content8.png"
          alt="laptop"
        />
      </div>

      <div id="contentItem" className="  ">
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
