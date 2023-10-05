import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Email from "./Pages/HomePage/EmailSubscription/Email";
export default function NotFound() {
  const {t} = useTranslation();

  return (
    <div>
        <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <p class="mb-4 text-7xl tracking-tight font-extrabold lg:text-7xl text-secondary-greenStrong dark:text-primary-500">{t("404_h1")}</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{t("404_p2")} </p>
            <div>
      <Email/>
    </div>
            <Link  to="/" class="inline-flex text-white bg-secondary-greenStrong hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">{t("404_link")}</Link>
        </div>   
    </div>
    
</section>
  
    </div>
  )
}
