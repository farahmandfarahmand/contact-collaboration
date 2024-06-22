function DomainHost() {
  return (
    <div id="domainItem" className="relative mb-20 flex flex-col items-center bg-white sm:bg-gray-50">
      <h1 
       data-aos="zoom-out"
       data-aos-delay="200"
       data-aos-easing="linear"
       data-aos-mirror="true"
       data-aos-once="false"
       data-aos-duration="1000"
       className=" ml-20 p-4 text-[2rem]   font-semibold">دامنه و هاست</h1>

      <div className="sm:grid sm:items-center sm:grid-cols-2 sm: sm:h-[60%] ">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-easing="linear"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-duration="1000"
          className="absolute z-0 top-0 left-0 w-40 h-24 aspect-w-5 aspect-h-2 sm:hidden "
        >
          <img
            className="object-cover"
            src="/images/domain2.png"
            alt=""
          />
        </div>
        {/* ---------------- domain section------------------ */}
        <div
          className="bg-primary-700 mix-blend-multiply mt-8 z-10 text-white rounded-t-3xl sm:rounded-l-3xl [clip-path:polygon(0%_15%,_100%_0%,_100%_100%,_0%_100%)] 
        sm:[clip-path:polygon(0%_0%,_100%_10%,_100%_87%,_0%_100%)] sm:h-[21rem]   "
        >
          <h2 className=" text-[1.2rem] p-4 font-bold sm:text-end sm:mt-5 ">
            دامنه یا آدرس اینترنتی
          </h2>

          <p className="p-2  text-[0.9rem]">
            نامی است که برای مشخص کردن آدرس وب سایت های اینترنتی استفاده می‌شود.
            آدرس دامنه تا حد امکان باید ساده، کوتاه و ترجیحا بین 5 تا 12 کاراکتر
            باشد.
          </p>
          <ol className="p-4 text-[0.8rem]  list-decimal">
            <p className="mb-2">سه نوع پسوند دامنه وجود دارد:</p>
            <li className="mr-5">پسوندهای عمومی نظیر: com, net, org </li>
            <li className="mr-5">پسوندهای اختصاصی نظیر: edu, gov, travel</li>
            <li className="mr-5"> پسوندهای بین المللی نظیر: ir</li>
          </ol>
        </div>
        {/* ----------------host section--------------------- */}
        <div className="bg-primary-200  opacity-75 sm:absolute sm:top-[8.5rem]  sm:h-[18rem] md:right-[23rem] sm:right-[19rem] sm:z-30 lg:w-[31rem] lg:right-[31rem]">
          <div className="hidden w-full md:w-[20rem] aspect-w-2 aspect-h-1 sm:block bg-no-repeat bg-cover bg-[url('/public/images/domain2-removebg.png')] h-full   opacity-15 -z-10 left-0 bottom-0 absolute"></div>
          <h2 className=" text-[1.2rem] pr-4 pt-2 font-bold  ">هاست</h2>
          <p className="p-4 text-[0.8rem] ">
            برای داشتن یک وب سایت روی بستر اینترنت بعد از ثبت دامنه باید سراغ
            تهیه هاست بروید. برای این منظور شما می توانید از شرکت های ارایه
            دهنده خدمات هاستینگ، هاست مناسب خود را تهیه نمایید. این شرکت ها
            سرورهایی برای اینگونه خدمات ارائه می‌دهند هاست ها می توانند بر روی
            این سرورها قرار بگیرند.
          </p>
          <p className="mb-2 text-[0.8rem] pr-4">
            فضایی که وب سایت شما بر روی آن بارگذاری می‌شود باید از لحاظ موارد
            زیر مطلوب باشد:
          </p>
          <ul className="p-2 flex lg:block text-[0.8rem]  list-outside list-disc">
            <li className="mr-5">پایداری</li>
            <li className="mr-5">کیفیت</li>
            <li className="mr-5">سرعت </li>
            <li className="mr-5">امنیت </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DomainHost;
