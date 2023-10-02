import { useTranslation } from "react-i18next";
import "./ContactUs.css";
 import axios from "axios";
import { useState } from "react";
import Footer from "../HomePage/Footer/Footer";
import Email from "../HomePage/EmailSubscription/Email";
// import Email from "../HomePage/EmailSubscription/Email";
export default function ContactUsForm() {

  const [recipient_email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessages] = useState('');
  const [name, setName] = useState('');
  const [phone_number, setPhone] = useState('');
  const {t} = useTranslation();

function sendEmail(){

  
  if(recipient_email && subject && message && name && phone_number){
    axios.post("http://localhost:3001/send_email",{
      recipient_email,
      subject,
      name,
      message,
      phone_number
    }).then(()=> alert("Message Send successfuly"))
      .catch(()=> alert("Ops something went wrong."));
      return;
  }else{
    return alert("Fill in the fields requireds");
  }

}
  return (
    <div >
 {/* <!-- ====== Contact Section Start --> */}
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap lg:justify-between">
      <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
        <div className="mb-12 max-w-[570px] lg:mb-0">
          <span className="text-terciary-yellowish mb-4 block text-base font-semibold">
            {t("1_contacts_span")}
          </span>
          <h2
            className="text-dark mb-6 text-[32px] font-extrabold sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            {t("contacts_h2")}
          </h2>
          <p className="text-body-color mb-9 text-base leading-relaxed">
            {t("1_contacts_p")}
          </p>
          <div className="mb-8 flex w-full max-w-[370px]">
            <div
              className="bg-secondary-greenStrong text-terciary-yellowish mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"
                />
              </svg>
            </div>
            <div className="w-full">
              <h4 className="text-dark mb-1 text-xl font-bold">{t("1_contacts_h4")}</h4>
              <p className="text-body-color text-base">
              green.ajuda@gmail.com              </p>
            </div>
          </div>
          <div className="mb-8 flex w-full max-w-[370px]">
            <div
              className="bg-secondary-greenStrong text-terciary-yellowish mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="28"
                height="19"
                viewBox="0 0 28 19"
                className="fill-current"
              >
                <path
                  d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
                />
              </svg>
            </div>
            <div className="w-full">
              <h4 className="text-dark mb-1 text-xl font-bold">{t("3_contacts_h4")}</h4>
              <p className="text-body-color text-base">green.ajuda.bussiness@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
          <form  onSubmit={sendEmail}>
            <div className="mb-6">
              <input
                type="text"
                id="name"
                placeholder={t("placeholder_name")}
                onChange={(e) => setName(e.target.value)}
                required={true}
                className="text-body-color border-[f0f0f0] focus:border-secondary-greenStrong w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t("placeholder_subject")}
                required={true}
                className="text-body-color border-[f0f0f0] focus:border-secondary-greenStrong w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("placeholder_email")}
                required={true}
                className="text-body-color border-[f0f0f0] focus:border-secondary-greenStrong w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("placeholder_phone")}
                required={false}
                className="text-body-color border-[305041] focus:border-secondary-greenStrong w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="6"
                onChange={(e) => setMessages(e.target.value)}
                placeholder={t("placeholder_message")}
                required={true}
                className="text-body-color border-[f0f0f0] focus:border-secondary-greenStrong w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-secondary-greenStrong text-white border-secondary-greenStrong w-full rounded border p-3 transition hover:bg-opacity-90"
              >
                  {t("contacts_button_send")}           
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
  <section >
    <div className="pt-20 pb-5 lg:pt-[120px] lg:pb-[90px]">
    <Email/>

    </div>
  </section>
{/* <!-- ====== Contact Section End --> */}
<div className="pt-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
   <Footer/>
</div>
  </div>
  )
}
