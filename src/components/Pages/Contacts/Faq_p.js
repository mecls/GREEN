import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import Footer from "../HomePage/Footer/Footer";

export default function Faq() {
    const {t} = useTranslation();
  return (
    <div>
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("faq_h2_p")}</h2>
      <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                     {t("faq_h3_1_p")}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_p_1")}</p>
              </div>
              <div class="mb-10">                        
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  {t("faq_h3_2_p")}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_p_2")}</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    {t("faq_h3_3_p")}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_p_3")}</p>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_p_4.1")}<Link to={"/contactus"} class="font-medium underline text-terciary-yellowish dark:text-terciary-yellowish hover:no-underline" rel="">{t("faq_p_4.2")}</Link> {t("faq_p_4.3")}</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                     {t("faq_h3_4_p")}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_p_5")}</p>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_p_6.1")}<a href='https://vileaf-newsletter.beehiiv.com/subscribe' target="_blank" class="font-medium underline text-terciary-yellowish dark:text-terciary-yellowis hover:no-underline">{t("faq_p_6.2")}</a></p>
              </div>
          </div>
          <div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                   {t("faq_b_3_h3")}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_b_p_3.1")}</p>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_b_p_4")} <a href='https://vileaf-newsletter.beehiiv.com/subscribe' target="_blank" class="font-medium underline text-terciary-yellowish dark:text-terciary-yellowish hover:no-underline">{t("faq_b_p_5")}</a></p>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_b_p_7")}<Link to={"/contactus"} class="font-medium underline text-terciary-yellowish dark:text-terciary-yellowish hover:no-underline" rel="">{t("faq_b_p_8")} </Link></p>

              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    {t("faq_b_5_h3")}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_b_p_11")}</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    {t("faq_b_6_h3")}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">{t("faq_b_p_13")}</p>
                  <p class="text-gray-500 dark:text-gray-400"> {t("faq_b_p_14")}</p>
              </div>
          </div>
      </div>
  </div>
</section>
<div  className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
    <Footer/>
</div>
    </div>
  )
}
