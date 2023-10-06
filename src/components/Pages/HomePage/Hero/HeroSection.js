import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import women from './8159103_shout_announcement_megaphone_woman_girl_icon.png';
export default function HeroSection() {
    const {t}= useTranslation();
  return (
    <div>
        <section className=" dark:bg-gray-900">
    <div  className="grid max-w-screen-xl xl:max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 font-extrabold text-4xl tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white">{t("hero_section_h1")}</h1>
            <h2 className="max-w-2xl mb-6 font-light text-xl text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">{t("hero_section_p1")} </h2>
            <NavLink to={"login"} className="inline-flex items-center justify-center px-10 py-4 mr-4 text-lg font-bold text-center text-white rounded-lg bg-secondary-greenStrong hover:bg-green-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               {t("navlink_1")}
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </NavLink>
            <NavLink to={"contactus"} className="inline-flex items-center justify-center px-10 py-4 mr-4 text-lg font-bold text-center text-white border border-orange bg-terciary-yellowish rounded-lg hover:bg-orange-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               {t("navlink_2")}
            </NavLink> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={women} alt="Bio and natural goods consumer"/>
        </div>    
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      </div>            
    </div>
        </section>
    </div>
  )
}
