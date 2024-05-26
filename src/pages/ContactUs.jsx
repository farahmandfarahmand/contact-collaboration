import ContactInfo from "../features/contact/ContactInfo";

function ContactUs() {
  return (
    <div className="flex justify-center pt-10 ">
      <div className="w-full  ">
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactUs;

// 2 steps exist this component
// 1. sendOtp
// 2. checkOtp
