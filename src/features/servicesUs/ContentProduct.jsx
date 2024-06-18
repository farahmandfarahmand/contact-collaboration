function ContentProduct() {
    return ( 
        <section  className="bg-yellow-100  aspect-w-3 aspect-h-2 flex flex-col  sm:flex sm:flex-row ">
        <div id="contentItem" className="">
          <div className="mb-0 ">
            <img className="object-cover" src="/images/content6.jpg" alt="" />
          </div>
          <div className="bg-pink-100 sm:order-2">
            <h2 className="text-[2rem]  text-blue-700 font-semibold p-2 mt-2">
              تولید محتوا چیست؟
            </h2>
            <div className="p-4">
              <p className="text-md text-justify ">
                تولید محتوا به معنای ایجاد و ساخت محتوایی است که ممکن است شامل
                متن، تصویر، ویدئو، صوت و سایر عناصر چندرسانه‌ای باشد. این
                محتواها می‌توانند برای اهداف مختلفی مانند افزایش بازدید و ترافیک
                وب سایت، ارتباط با مشتریان، تبلیغات، آموزش و غیره به کار گرفته
                شوند.
              </p>
            </div>
          </div>
        </div>
      </section>
     );
}

export default ContentProduct;