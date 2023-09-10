import { useTranslation } from "react-i18next"

export default function Email() {
    const {t} = useTranslation();
  return (
    <div className="Email">
      <section className=" dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">{t("email_h2")}</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">{t("email_p1")}</p>
          <form action="post">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("email_label")}</label>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-900 focus:border-primary-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-900 dark:focus:border-primary-900" placeholder="Enter your email" type="email" id="email" required={true}/>
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-secondary-greenStrong border-primary-900 sm:rounded-none sm:rounded-r-lg hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">{t("email_underSubmmit1")}<a href="#0" className="font-medium text-terciary-yellowish dark:text-primary-500 hover:underline">{t("email_underSubmmit2")}</a>.</div>
          </form>
      </div>
  </div>
</section>
    </div>
  )
}



