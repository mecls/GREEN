import { Link } from "react-router-dom";
import Email from "../HomePage/EmailSubscription/Email";
import Footer from "../HomePage/Footer/Footer";
import { useTranslation } from "react-i18next";

export default function WhyGreen() {
  const {t} = useTranslation();
  return (
    <div>
      {/* <!-- ====== About Section Start --> */}
      <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <span className="text-terciary-yellowish mb-2 block text-lg font-semibold">
            {t("whygreen_span")}
          </span>
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white"> {t("whygreen_h2")}</h2>
            <p className="mb-4 text-xl"> {t("1_whygreen_p")}</p>
            <p  className="mb-4 text-xl"> {t("2_whygreen_p")}</p>
            
            <Link to={"/signin"} 
            className="bg-secondary-greenStrong inline-flex items-center justify-center rounded-lg py-4 px-15 text-center text-xl font-bold text-white hover:bg-opacity-90 sm:px-8 lg:px-8 xl:px-10">
           {t("whygreen_link")}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>

{/* <!-- ====== About Section End --> */}
{/* <!-- ====== Services Section Start --> */}
<section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <span className="text-terciary-yellowish mb-2 block text-lg font-semibold">
          {t("whygreen_services_span")}
          </span>
          <h2
            className="text-dark mb-4 text-5xl font-bold sm:text-4xl md:text-[40px]"
          >
            {t("whygreen_services_h2")}
          </h2>
          <p className="text-body-color text-lg">
          {t("1_whygreen_services_p")}
          </p>
        </div>
      </div>
    </div>
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className="bg-secondary-greenStrong  mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z"
                fill="white" 
              />
            </svg>
          </div>
          <h4 className="text-dark mb-3 text-2xl font-semibold">
            {t("1_whygreen_services_h4")}
          </h4>
          <p className="text-body-color text-lg">
           {t("2_whygreen_services_p")}
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
           <div
            className="bg-secondary-greenStrong mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.04684 15.5859C4.2109 15.5859 4.37497 15.5859 4.48434 15.5313L10.5547 13.3984C11.0468 13.2344 11.3203 12.6875 11.1562 12.1953C10.9922 11.7031 10.4453 11.4297 9.95309 11.5938L6.28903 12.9063C8.09372 7.92969 12.8515 4.53906 18.375 4.53906C24.2265 4.53906 29.3672 8.42188 30.789 14.0547C30.8984 14.5469 31.4453 14.875 31.9375 14.7656C32.4297 14.6563 32.7578 14.1094 32.6484 13.6172C31.0078 7.16406 25.1015 2.67969 18.375 2.67969C11.8125 2.67969 6.12497 6.89063 4.26559 13.0156L2.57028 8.25781C2.40622 7.76563 1.85934 7.49219 1.36715 7.65625C0.874967 7.82031 0.60153 8.36719 0.765592 8.85938L2.84372 14.8203C3.00778 15.2578 3.55465 15.5859 4.04684 15.5859Z"
                fill="white"
              />
              <path
                d="M34.2343 27.2891L31.9922 21.3828C31.8828 21.0547 31.6093 20.7812 31.2812 20.6719C30.9531 20.5625 30.625 20.5078 30.2968 20.6719L24.2812 22.9687C23.789 23.1328 23.5156 23.7344 23.7343 24.2266C23.8984 24.7187 24.5 24.9922 24.9922 24.7734L28.7109 23.3516C26.6328 27.6719 22.2031 30.5156 17.1718 30.5156C11.6484 30.5156 6.78122 27.0703 5.0859 21.9297C4.86715 21.4375 4.32028 21.1641 3.82809 21.3281C3.3359 21.4922 3.06247 22.0391 3.22653 22.5312C5.19528 28.4375 10.7734 32.4297 17.1172 32.4297C23.1328 32.4297 28.4922 28.875 30.6797 23.4609L32.4297 28C32.5937 28.3828 32.9218 28.6016 33.3047 28.6016C33.414 28.6016 33.5234 28.6016 33.6328 28.5469C34.1797 28.3281 34.4531 27.7813 34.2343 27.2891Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 className="text-dark mb-3 text-2xl font-semibold">
            {t("3_whygreen_services_h4")}
          </h4>
          <p className="text-body-color text-lg">
          {t("4_whygreen_services_p")}
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            className="bg-secondary-greenStrong mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z"
                fill="white"
              />
              <path
                d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z"
                fill="white"
              />
              <path
                d="M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z"
                fill="white"
              />
              <path
                d="M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 className="text-dark mb-3 text-2xl font-semibold">{t("4_whygreen_services_h4")}</h4>
          <p className="text-body-color text-lg">
           {t("5_whygreen_services_p")}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="pt-0 pb-5 lg:pt-[120px] lg:pb-[90px]">
<Email/>
</div>
{/* <!-- ====== Services Section End --> */}
<Footer/>
    </div>
  )
}
