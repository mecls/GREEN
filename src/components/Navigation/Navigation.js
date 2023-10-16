// import React from 'react';
import Logo from './Logo/Logo.js';
import './Navigation.css';
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, NavLink, Outlet } from 'react-router-dom';
import i18n from '../../i18n.js';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';



const languages =[
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    country_code: 'pt'
  }
]

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const currentLanguageCode = cookies.get('i18n') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  const products = [
    { name: t("nav_seller_1"), description: t("nav_seller_1.1"),  icon: ChartPieIcon },
    { name: t("nav_seller_2"), description: t("nav_seller_2.1"), icon: CursorArrowRaysIcon },
    { name: t("nav_seller_3"), description: t("nav_seller_3.1"), icon: FingerPrintIcon },
    { name: t("nav_seller_4"), description: t("nav_seller_4.1"), icon: SquaresPlusIcon },
    { name: t("nav_seller_5"), description: t("nav_seller_5.1"), icon: ArrowPathIcon },
  ]

  const callsToAction = [
    { name: t("nav_seller_calltoaction"),icon: PlayCircleIcon },
  ]
  

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <header className="bg-white">
      <nav className=" mx-auto 2xl:max-w-screen-xl flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="md:flex lg:flex-1 mb-6 md:mb-0 mt-5 h-[50px] w-[100px] items-center  justify-start ">
          <Link to={"/"} className="-m-1.5 p-0">
            <span className="sr-only">Vileaf</span>
            <svg width="174" height="90" viewBox="0 0 174 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_530_36)">
 <path d="M18.51 45L6.495 13.095H15.09L24.09 38.88H20.4L29.535 13.095H37.95L25.8 45H18.51ZM40.7256 45V22.995H48.6006V45H40.7256ZM44.6406 20.43C43.4706 20.43 42.4956 20.04 41.7156 19.26C40.9356 18.45 40.5456 17.445 40.5456 16.245C40.5456 15.075 40.9356 14.085 41.7156 13.275C42.4956 12.465 43.4706 12.06 44.6406 12.06C45.8706 12.06 46.8606 12.465 47.6106 13.275C48.3906 14.085 48.7806 15.075 48.7806 16.245C48.7806 17.445 48.3906 18.45 47.6106 19.26C46.8606 20.04 45.8706 20.43 44.6406 20.43ZM53.1632 45V12.195H60.9932V45H53.1632ZM76.7147 45.495C74.2547 45.495 72.0797 45.015 70.1897 44.055C68.2997 43.065 66.8147 41.7 65.7347 39.96C64.6547 38.22 64.1147 36.225 64.1147 33.975C64.1147 31.755 64.6397 29.79 65.6897 28.08C66.7397 26.34 68.1647 24.975 69.9647 23.985C71.7947 22.965 73.8497 22.455 76.1297 22.455C78.3497 22.455 80.3147 22.935 82.0247 23.895C83.7647 24.825 85.1147 26.13 86.0747 27.81C87.0647 29.46 87.5597 31.35 87.5597 33.48C87.5597 33.93 87.5297 34.395 87.4697 34.875C87.4397 35.325 87.3497 35.85 87.1997 36.45L67.8047 36.54V31.5L84.0947 31.365L80.5847 33.57C80.5547 32.34 80.3747 31.335 80.0447 30.555C79.7147 29.745 79.2347 29.13 78.6047 28.71C77.9747 28.29 77.1797 28.08 76.2197 28.08C75.2297 28.08 74.3747 28.32 73.6547 28.8C72.9347 29.28 72.3797 29.955 71.9897 30.825C71.5997 31.695 71.4047 32.745 71.4047 33.975C71.4047 35.235 71.6147 36.315 72.0347 37.215C72.4547 38.085 73.0547 38.745 73.8347 39.195C74.6147 39.645 75.5747 39.87 76.7147 39.87C77.7947 39.87 78.7397 39.69 79.5497 39.33C80.3897 38.97 81.1397 38.415 81.7997 37.665L85.8947 41.76C84.8147 42.99 83.4947 43.92 81.9347 44.55C80.4047 45.18 78.6647 45.495 76.7147 45.495ZM99.6967 45.45C97.6567 45.45 95.8417 44.955 94.2517 43.965C92.6617 42.975 91.4167 41.625 90.5167 39.915C89.6167 38.175 89.1667 36.21 89.1667 34.02C89.1667 31.8 89.6167 29.82 90.5167 28.08C91.4167 26.34 92.6617 24.99 94.2517 24.03C95.8417 23.04 97.6567 22.545 99.6967 22.545C101.077 22.545 102.337 22.8 103.477 23.31C104.617 23.79 105.547 24.48 106.267 25.38C107.017 26.28 107.467 27.3 107.617 28.44V39.51C107.467 40.68 107.017 41.715 106.267 42.615C105.547 43.485 104.617 44.175 103.477 44.685C102.337 45.195 101.077 45.45 99.6967 45.45ZM101.362 38.475C102.652 38.475 103.687 38.055 104.467 37.215C105.277 36.375 105.682 35.295 105.682 33.975C105.682 33.105 105.502 32.34 105.142 31.68C104.782 31.02 104.272 30.495 103.612 30.105C102.982 29.715 102.247 29.52 101.407 29.52C100.567 29.52 99.8167 29.715 99.1567 30.105C98.5267 30.495 98.0167 31.035 97.6267 31.725C97.2667 32.385 97.0867 33.135 97.0867 33.975C97.0867 34.845 97.2667 35.625 97.6267 36.315C97.9867 36.975 98.4967 37.5 99.1567 37.89C99.8167 38.28 100.552 38.475 101.362 38.475ZM105.367 45V39.105L106.492 33.705L105.367 28.395V22.995H113.062V45H105.367ZM120.331 45V21.6C120.331 19.74 120.736 18.075 121.546 16.605C122.356 15.105 123.511 13.905 125.011 13.005C126.541 12.105 128.371 11.655 130.501 11.655C132.091 11.655 133.486 11.925 134.686 12.465C135.886 12.975 136.921 13.665 137.791 14.535L132.886 19.44C132.646 19.17 132.346 18.975 131.986 18.855C131.656 18.705 131.266 18.63 130.816 18.63C130.006 18.63 129.361 18.87 128.881 19.35C128.401 19.83 128.161 20.475 128.161 21.285V45H120.331ZM115.651 29.52V22.995H134.371V29.52H115.651Z" fill="#F4924B"/>
<path d="M25.7366 45L13.7216 13.095H22.3166L31.3166 38.88H27.6266L36.7616 13.095H45.1766L33.0266 45H25.7366ZM47.9521 45V22.995H55.8271V45H47.9521ZM51.8671 20.43C50.6971 20.43 49.7221 20.04 48.9421 19.26C48.1621 18.45 47.7721 17.445 47.7721 16.245C47.7721 15.075 48.1621 14.085 48.9421 13.275C49.7221 12.465 50.6971 12.06 51.8671 12.06C53.0971 12.06 54.0871 12.465 54.8371 13.275C55.6171 14.085 56.0071 15.075 56.0071 16.245C56.0071 17.445 55.6171 18.45 54.8371 19.26C54.0871 20.04 53.0971 20.43 51.8671 20.43ZM60.3897 45V12.195H68.2197V45H60.3897ZM83.9413 45.495C81.4813 45.495 79.3063 45.015 77.4163 44.055C75.5263 43.065 74.0413 41.7 72.9613 39.96C71.8813 38.22 71.3413 36.225 71.3413 33.975C71.3413 31.755 71.8663 29.79 72.9163 28.08C73.9663 26.34 75.3913 24.975 77.1913 23.985C79.0213 22.965 81.0763 22.455 83.3563 22.455C85.5763 22.455 87.5413 22.935 89.2513 23.895C90.9913 24.825 92.3413 26.13 93.3013 27.81C94.2913 29.46 94.7863 31.35 94.7863 33.48C94.7863 33.93 94.7563 34.395 94.6963 34.875C94.6663 35.325 94.5763 35.85 94.4263 36.45L75.0313 36.54V31.5L91.3213 31.365L87.8113 33.57C87.7813 32.34 87.6013 31.335 87.2713 30.555C86.9413 29.745 86.4613 29.13 85.8313 28.71C85.2013 28.29 84.4063 28.08 83.4463 28.08C82.4563 28.08 81.6013 28.32 80.8813 28.8C80.1613 29.28 79.6063 29.955 79.2163 30.825C78.8263 31.695 78.6313 32.745 78.6313 33.975C78.6313 35.235 78.8413 36.315 79.2613 37.215C79.6813 38.085 80.2813 38.745 81.0613 39.195C81.8413 39.645 82.8013 39.87 83.9413 39.87C85.0213 39.87 85.9663 39.69 86.7763 39.33C87.6163 38.97 88.3663 38.415 89.0263 37.665L93.1213 41.76C92.0413 42.99 90.7213 43.92 89.1613 44.55C87.6313 45.18 85.8913 45.495 83.9413 45.495ZM106.923 45.45C104.883 45.45 103.068 44.955 101.478 43.965C99.8882 42.975 98.6432 41.625 97.7432 39.915C96.8432 38.175 96.3932 36.21 96.3932 34.02C96.3932 31.8 96.8432 29.82 97.7432 28.08C98.6432 26.34 99.8882 24.99 101.478 24.03C103.068 23.04 104.883 22.545 106.923 22.545C108.303 22.545 109.563 22.8 110.703 23.31C111.843 23.79 112.773 24.48 113.493 25.38C114.243 26.28 114.693 27.3 114.843 28.44V39.51C114.693 40.68 114.243 41.715 113.493 42.615C112.773 43.485 111.843 44.175 110.703 44.685C109.563 45.195 108.303 45.45 106.923 45.45ZM108.588 38.475C109.878 38.475 110.913 38.055 111.693 37.215C112.503 36.375 112.908 35.295 112.908 33.975C112.908 33.105 112.728 32.34 112.368 31.68C112.008 31.02 111.498 30.495 110.838 30.105C110.208 29.715 109.473 29.52 108.633 29.52C107.793 29.52 107.043 29.715 106.383 30.105C105.753 30.495 105.243 31.035 104.853 31.725C104.493 32.385 104.313 33.135 104.313 33.975C104.313 34.845 104.493 35.625 104.853 36.315C105.213 36.975 105.723 37.5 106.383 37.89C107.043 38.28 107.778 38.475 108.588 38.475ZM112.593 45V39.105L113.718 33.705L112.593 28.395V22.995H120.288V45H112.593ZM127.558 45V21.6C127.558 19.74 127.963 18.075 128.773 16.605C129.583 15.105 130.738 13.905 132.238 13.005C133.768 12.105 135.598 11.655 137.728 11.655C139.318 11.655 140.713 11.925 141.913 12.465C143.113 12.975 144.148 13.665 145.018 14.535L140.113 19.44C139.873 19.17 139.573 18.975 139.213 18.855C138.883 18.705 138.493 18.63 138.043 18.63C137.233 18.63 136.588 18.87 136.108 19.35C135.628 19.83 135.388 20.475 135.388 21.285V45H127.558ZM122.878 29.52V22.995H141.598V29.52H122.878Z" fill="#52856C"/>
<path d="M32.9621 45L20.9471 13.095H29.5421L38.5421 38.88H34.8521L43.9871 13.095H52.4022L40.2521 45H32.9621ZM55.1777 45V22.995H63.0527V45H55.1777ZM59.0927 20.43C57.9227 20.43 56.9477 20.04 56.1677 19.26C55.3877 18.45 54.9977 17.445 54.9977 16.245C54.9977 15.075 55.3877 14.085 56.1677 13.275C56.9477 12.465 57.9227 12.06 59.0927 12.06C60.3227 12.06 61.3127 12.465 62.0627 13.275C62.8427 14.085 63.2327 15.075 63.2327 16.245C63.2327 17.445 62.8427 18.45 62.0627 19.26C61.3127 20.04 60.3227 20.43 59.0927 20.43ZM67.6153 45V12.195H75.4453V45H67.6153ZM91.1668 45.495C88.7068 45.495 86.5318 45.015 84.6418 44.055C82.7518 43.065 81.2668 41.7 80.1868 39.96C79.1068 38.22 78.5668 36.225 78.5668 33.975C78.5668 31.755 79.0918 29.79 80.1418 28.08C81.1918 26.34 82.6168 24.975 84.4168 23.985C86.2468 22.965 88.3018 22.455 90.5818 22.455C92.8018 22.455 94.7668 22.935 96.4768 23.895C98.2168 24.825 99.5668 26.13 100.527 27.81C101.517 29.46 102.012 31.35 102.012 33.48C102.012 33.93 101.982 34.395 101.922 34.875C101.892 35.325 101.802 35.85 101.652 36.45L82.2568 36.54V31.5L98.5468 31.365L95.0368 33.57C95.0068 32.34 94.8268 31.335 94.4968 30.555C94.1668 29.745 93.6868 29.13 93.0568 28.71C92.4268 28.29 91.6318 28.08 90.6718 28.08C89.6818 28.08 88.8268 28.32 88.1068 28.8C87.3868 29.28 86.8318 29.955 86.4418 30.825C86.0518 31.695 85.8568 32.745 85.8568 33.975C85.8568 35.235 86.0668 36.315 86.4868 37.215C86.9068 38.085 87.5068 38.745 88.2868 39.195C89.0668 39.645 90.0268 39.87 91.1668 39.87C92.2468 39.87 93.1918 39.69 94.0018 39.33C94.8418 38.97 95.5918 38.415 96.2518 37.665L100.347 41.76C99.2668 42.99 97.9468 43.92 96.3868 44.55C94.8568 45.18 93.1168 45.495 91.1668 45.495ZM114.149 45.45C112.109 45.45 110.294 44.955 108.704 43.965C107.114 42.975 105.869 41.625 104.969 39.915C104.069 38.175 103.619 36.21 103.619 34.02C103.619 31.8 104.069 29.82 104.969 28.08C105.869 26.34 107.114 24.99 108.704 24.03C110.294 23.04 112.109 22.545 114.149 22.545C115.529 22.545 116.789 22.8 117.929 23.31C119.069 23.79 119.999 24.48 120.719 25.38C121.469 26.28 121.919 27.3 122.069 28.44V39.51C121.919 40.68 121.469 41.715 120.719 42.615C119.999 43.485 119.069 44.175 117.929 44.685C116.789 45.195 115.529 45.45 114.149 45.45ZM115.814 38.475C117.104 38.475 118.139 38.055 118.919 37.215C119.729 36.375 120.134 35.295 120.134 33.975C120.134 33.105 119.954 32.34 119.594 31.68C119.234 31.02 118.724 30.495 118.064 30.105C117.434 29.715 116.699 29.52 115.859 29.52C115.019 29.52 114.269 29.715 113.609 30.105C112.979 30.495 112.469 31.035 112.079 31.725C111.719 32.385 111.539 33.135 111.539 33.975C111.539 34.845 111.719 35.625 112.079 36.315C112.439 36.975 112.949 37.5 113.609 37.89C114.269 38.28 115.004 38.475 115.814 38.475ZM119.819 45V39.105L120.944 33.705L119.819 28.395V22.995H127.514V45H119.819ZM134.783 45V21.6C134.783 19.74 135.188 18.075 135.998 16.605C136.808 15.105 137.963 13.905 139.463 13.005C140.993 12.105 142.823 11.655 144.953 11.655C146.543 11.655 147.938 11.925 149.138 12.465C150.338 12.975 151.373 13.665 152.243 14.535L147.338 19.44C147.098 19.17 146.798 18.975 146.438 18.855C146.108 18.705 145.718 18.63 145.268 18.63C144.458 18.63 143.813 18.87 143.333 19.35C142.853 19.83 142.613 20.475 142.613 21.285V45H134.783ZM130.103 29.52V22.995H148.823V29.52H130.103Z" fill="#2C462B"/>
<rect x="126" y="25" width="49" height="47" fill="url(#pattern0)"/>
</g>
<defs>

<filter id="filter0_d_530_36" x="-1" y="0" width="183" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_530_36"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_530_36" result="shape"/>
</filter>
</defs>
</svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              {t("nav_seller")}
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-terciary-yellowish" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <p href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </p>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                     to={"signin"}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <NavLink to={"whyvileaf"} className="text-lg font-semibold leading-6 text-gray-900 pointer">
              {t("nav_whygreen")}
            </NavLink>
            <NavLink to={"faq_u"} className="text-lg font-semibold leading-6 text-gray-900 pointer">
            FAQ
            </NavLink>
            <Link to={"contactus"} className="text-lg font-semibold leading-6 text-gray-900 pointer" >
            {t("nav_contact")} 
            </Link>
            <Popover className="relative ml-12">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
            {t("nav_languages")}
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {languages.map((item) => (
                    <div
                      key={item.country_code}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === item.code,
                    })}
                    onClick={() => {
                      i18n.changeLanguage(item.code)
                    }}>
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
           
              </Popover.Panel>
            </Transition>
          </Popover>

        </Popover.Group>

       
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <NavLink to={"/login"} className="text-lg font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#00" className="-m-1.5 p-1.5">
              <span className="sr-only">Green</span>
           <Logo/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                 to={"whyvileaf"}
                 onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                   {t("nav_whygreen")}
                </NavLink>
                <NavLink
                  to={"faq_u"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQ
                </NavLink>
                <NavLink
                  to={"contactus"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                   {t("nav_contact")}
                </NavLink>
                <Disclosure as="div" 
                 className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {t("nav_languages")}
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {languages.map((item) => (
                          <Disclosure.Button
                            key={item.country_code}
                            as="a"
                            onClick={() => {
                              i18n.changeLanguage(item.code)
                              setMobileMenuOpen(false)
                            }}

                            className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              <div className="py-6">
              <NavLink
                  to={"login"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Outlet/>
    </header>
  )
}
