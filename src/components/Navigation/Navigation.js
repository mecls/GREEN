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
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#00', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Get more clients with no effort', href: '#00', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your data will be safe and secure', href: '#00', icon: FingerPrintIcon },
  { name: 'Free', description: 'No costs to start - 10% fee on trasanctions', href: '#00', icon: SquaresPlusIcon },
  { name: 'Payments', description: 'Get payed througth paypal, mbway, credit/debit card and more without effort', href: '#00', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Sign Up',icon: PlayCircleIcon },
]

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

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <header className="bg-white">
      <nav className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="md:flex lg:flex-1 mb-6 md:mb-0 mt-3 h-[50px] w-[50px] items-center justify-center rounded-2xl">
          <Link to={"/"} className="-m-1.5 p-0">
            <span className="sr-only">Green</span>
           <svg width="178" height="86" viewBox="0 0 178 86" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_d_530_36)">
<path d="M17.616 36.396C15.672 36.396 13.872 36.072 12.216 35.424C10.584 34.752 9.144 33.816 7.896 32.616C6.672 31.416 5.712 30.024 5.016 28.44C4.344 26.832 4.008 25.092 4.008 23.22C4.008 21.324 4.356 19.584 5.052 18C5.772 16.392 6.768 15 8.04 13.824C9.312 12.624 10.788 11.7 12.468 11.052C14.172 10.38 15.984 10.044 17.904 10.044C20.184 10.044 22.248 10.452 24.096 11.268C25.944 12.06 27.444 13.164 28.596 14.58L24.276 18.9C23.412 17.868 22.464 17.1 21.432 16.596C20.4 16.068 19.2 15.804 17.832 15.804C16.44 15.804 15.192 16.116 14.088 16.74C13.008 17.34 12.144 18.192 11.496 19.296C10.848 20.4 10.524 21.696 10.524 23.184C10.524 24.672 10.824 25.98 11.424 27.108C12.048 28.236 12.888 29.112 13.944 29.736C15.024 30.36 16.26 30.672 17.652 30.672C19.044 30.672 20.22 30.408 21.18 29.88C22.164 29.352 22.908 28.584 23.412 27.576C23.94 26.568 24.204 25.368 24.204 23.976L28.56 26.784L16.932 26.496V21.24H30.684V22.212C30.684 25.26 30.132 27.84 29.028 29.952C27.924 32.064 26.388 33.672 24.42 34.776C22.476 35.856 20.208 36.396 17.616 36.396ZM38.8566 25.668V21.06H43.7166C44.7726 21.06 45.5766 20.808 46.1286 20.304C46.7046 19.776 46.9926 19.068 46.9926 18.18C46.9926 17.316 46.7046 16.62 46.1286 16.092C45.5766 15.54 44.7726 15.264 43.7166 15.264H38.8566V10.476H44.6166C46.3446 10.476 47.8566 10.8 49.1526 11.448C50.4726 12.096 51.5046 12.984 52.2486 14.112C52.9926 15.24 53.3646 16.56 53.3646 18.072C53.3646 19.584 52.9806 20.916 52.2126 22.068C51.4686 23.196 50.4246 24.084 49.0806 24.732C47.7366 25.356 46.1646 25.668 44.3646 25.668H38.8566ZM33.7446 36V10.476H40.1886V36H33.7446ZM47.5686 36L40.1526 25.056L45.9486 23.652L55.0206 36H47.5686ZM57.1235 36V10.476H63.5675V36H57.1235ZM62.2355 36V30.564H76.0595V36H62.2355ZM62.2355 25.632V20.34H74.7635V25.632H62.2355ZM62.2355 15.912V10.476H75.8435V15.912H62.2355ZM79.6938 36V10.476H86.1378V36H79.6938ZM84.8058 36V30.564H98.6298V36H84.8058ZM84.8058 25.632V20.34H97.3338V25.632H84.8058ZM84.8058 15.912V10.476H98.4138V15.912H84.8058ZM102.264 36V10.476H106.764L108.708 15.696V36H102.264ZM119.868 36L104.964 17.064L106.764 10.476L121.704 29.412L119.868 36ZM119.868 36L118.212 30.636V10.476H124.656V36H119.868Z" fill="#645537"/>
<path d="M17.616 41.396C15.672 41.396 13.872 41.072 12.216 40.424C10.584 39.752 9.144 38.816 7.896 37.616C6.672 36.416 5.712 35.024 5.016 33.44C4.344 31.832 4.008 30.092 4.008 28.22C4.008 26.324 4.356 24.584 5.052 23C5.772 21.392 6.768 20 8.04 18.824C9.312 17.624 10.788 16.7 12.468 16.052C14.172 15.38 15.984 15.044 17.904 15.044C20.184 15.044 22.248 15.452 24.096 16.268C25.944 17.06 27.444 18.164 28.596 19.58L24.276 23.9C23.412 22.868 22.464 22.1 21.432 21.596C20.4 21.068 19.2 20.804 17.832 20.804C16.44 20.804 15.192 21.116 14.088 21.74C13.008 22.34 12.144 23.192 11.496 24.296C10.848 25.4 10.524 26.696 10.524 28.184C10.524 29.672 10.824 30.98 11.424 32.108C12.048 33.236 12.888 34.112 13.944 34.736C15.024 35.36 16.26 35.672 17.652 35.672C19.044 35.672 20.22 35.408 21.18 34.88C22.164 34.352 22.908 33.584 23.412 32.576C23.94 31.568 24.204 30.368 24.204 28.976L28.56 31.784L16.932 31.496V26.24H30.684V27.212C30.684 30.26 30.132 32.84 29.028 34.952C27.924 37.064 26.388 38.672 24.42 39.776C22.476 40.856 20.208 41.396 17.616 41.396ZM38.8566 30.668V26.06H43.7166C44.7726 26.06 45.5766 25.808 46.1286 25.304C46.7046 24.776 46.9926 24.068 46.9926 23.18C46.9926 22.316 46.7046 21.62 46.1286 21.092C45.5766 20.54 44.7726 20.264 43.7166 20.264H38.8566V15.476H44.6166C46.3446 15.476 47.8566 15.8 49.1526 16.448C50.4726 17.096 51.5046 17.984 52.2486 19.112C52.9926 20.24 53.3646 21.56 53.3646 23.072C53.3646 24.584 52.9806 25.916 52.2126 27.068C51.4686 28.196 50.4246 29.084 49.0806 29.732C47.7366 30.356 46.1646 30.668 44.3646 30.668H38.8566ZM33.7446 41V15.476H40.1886V41H33.7446ZM47.5686 41L40.1526 30.056L45.9486 28.652L55.0206 41H47.5686ZM57.1235 41V15.476H63.5675V41H57.1235ZM62.2355 41V35.564H76.0595V41H62.2355ZM62.2355 30.632V25.34H74.7635V30.632H62.2355ZM62.2355 20.912V15.476H75.8435V20.912H62.2355ZM79.6938 41V15.476H86.1378V41H79.6938ZM84.8058 41V35.564H98.6298V41H84.8058ZM84.8058 30.632V25.34H97.3338V30.632H84.8058ZM84.8058 20.912V15.476H98.4138V20.912H84.8058ZM102.264 41V15.476H106.764L108.708 20.696V41H102.264ZM119.868 41L104.964 22.064L106.764 15.476L121.704 34.412L119.868 41ZM119.868 41L118.212 35.636V15.476H124.656V41H119.868Z" fill="#F4924B"/>
<path d="M17.616 46.396C15.672 46.396 13.872 46.072 12.216 45.424C10.584 44.752 9.144 43.816 7.896 42.616C6.672 41.416 5.712 40.024 5.016 38.44C4.344 36.832 4.008 35.092 4.008 33.22C4.008 31.324 4.356 29.584 5.052 28C5.772 26.392 6.768 25 8.04 23.824C9.312 22.624 10.788 21.7 12.468 21.052C14.172 20.38 15.984 20.044 17.904 20.044C20.184 20.044 22.248 20.452 24.096 21.268C25.944 22.06 27.444 23.164 28.596 24.58L24.276 28.9C23.412 27.868 22.464 27.1 21.432 26.596C20.4 26.068 19.2 25.804 17.832 25.804C16.44 25.804 15.192 26.116 14.088 26.74C13.008 27.34 12.144 28.192 11.496 29.296C10.848 30.4 10.524 31.696 10.524 33.184C10.524 34.672 10.824 35.98 11.424 37.108C12.048 38.236 12.888 39.112 13.944 39.736C15.024 40.36 16.26 40.672 17.652 40.672C19.044 40.672 20.22 40.408 21.18 39.88C22.164 39.352 22.908 38.584 23.412 37.576C23.94 36.568 24.204 35.368 24.204 33.976L28.56 36.784L16.932 36.496V31.24H30.684V32.212C30.684 35.26 30.132 37.84 29.028 39.952C27.924 42.064 26.388 43.672 24.42 44.776C22.476 45.856 20.208 46.396 17.616 46.396ZM38.8566 35.668V31.06H43.7166C44.7726 31.06 45.5766 30.808 46.1286 30.304C46.7046 29.776 46.9926 29.068 46.9926 28.18C46.9926 27.316 46.7046 26.62 46.1286 26.092C45.5766 25.54 44.7726 25.264 43.7166 25.264H38.8566V20.476H44.6166C46.3446 20.476 47.8566 20.8 49.1526 21.448C50.4726 22.096 51.5046 22.984 52.2486 24.112C52.9926 25.24 53.3646 26.56 53.3646 28.072C53.3646 29.584 52.9806 30.916 52.2126 32.068C51.4686 33.196 50.4246 34.084 49.0806 34.732C47.7366 35.356 46.1646 35.668 44.3646 35.668H38.8566ZM33.7446 46V20.476H40.1886V46H33.7446ZM47.5686 46L40.1526 35.056L45.9486 33.652L55.0206 46H47.5686ZM57.1235 46V20.476H63.5675V46H57.1235ZM62.2355 46V40.564H76.0595V46H62.2355ZM62.2355 35.632V30.34H74.7635V35.632H62.2355ZM62.2355 25.912V20.476H75.8435V25.912H62.2355ZM79.6938 46V20.476H86.1378V46H79.6938ZM84.8058 46V40.564H98.6298V46H84.8058ZM84.8058 35.632V30.34H97.3338V35.632H84.8058ZM84.8058 25.912V20.476H98.4138V25.912H84.8058ZM102.264 46V20.476H106.764L108.708 25.696V46H102.264ZM119.868 46L104.964 27.064L106.764 20.476L121.704 39.412L119.868 46ZM119.868 46L118.212 40.636V20.476H124.656V46H119.868Z" fill="#52856C"/>
<path d="M17.616 51.396C15.672 51.396 13.872 51.072 12.216 50.424C10.584 49.752 9.144 48.816 7.896 47.616C6.672 46.416 5.712 45.024 5.016 43.44C4.344 41.832 4.008 40.092 4.008 38.22C4.008 36.324 4.356 34.584 5.052 33C5.772 31.392 6.768 30 8.04 28.824C9.312 27.624 10.788 26.7 12.468 26.052C14.172 25.38 15.984 25.044 17.904 25.044C20.184 25.044 22.248 25.452 24.096 26.268C25.944 27.06 27.444 28.164 28.596 29.58L24.276 33.9C23.412 32.868 22.464 32.1 21.432 31.596C20.4 31.068 19.2 30.804 17.832 30.804C16.44 30.804 15.192 31.116 14.088 31.74C13.008 32.34 12.144 33.192 11.496 34.296C10.848 35.4 10.524 36.696 10.524 38.184C10.524 39.672 10.824 40.98 11.424 42.108C12.048 43.236 12.888 44.112 13.944 44.736C15.024 45.36 16.26 45.672 17.652 45.672C19.044 45.672 20.22 45.408 21.18 44.88C22.164 44.352 22.908 43.584 23.412 42.576C23.94 41.568 24.204 40.368 24.204 38.976L28.56 41.784L16.932 41.496V36.24H30.684V37.212C30.684 40.26 30.132 42.84 29.028 44.952C27.924 47.064 26.388 48.672 24.42 49.776C22.476 50.856 20.208 51.396 17.616 51.396ZM38.8566 40.668V36.06H43.7166C44.7726 36.06 45.5766 35.808 46.1286 35.304C46.7046 34.776 46.9926 34.068 46.9926 33.18C46.9926 32.316 46.7046 31.62 46.1286 31.092C45.5766 30.54 44.7726 30.264 43.7166 30.264H38.8566V25.476H44.6166C46.3446 25.476 47.8566 25.8 49.1526 26.448C50.4726 27.096 51.5046 27.984 52.2486 29.112C52.9926 30.24 53.3646 31.56 53.3646 33.072C53.3646 34.584 52.9806 35.916 52.2126 37.068C51.4686 38.196 50.4246 39.084 49.0806 39.732C47.7366 40.356 46.1646 40.668 44.3646 40.668H38.8566ZM33.7446 51V25.476H40.1886V51H33.7446ZM47.5686 51L40.1526 40.056L45.9486 38.652L55.0206 51H47.5686ZM57.1235 51V25.476H63.5675V51H57.1235ZM62.2355 51V45.564H76.0595V51H62.2355ZM62.2355 40.632V35.34H74.7635V40.632H62.2355ZM62.2355 30.912V25.476H75.8435V30.912H62.2355ZM79.6938 51V25.476H86.1378V51H79.6938ZM84.8058 51V45.564H98.6298V51H84.8058ZM84.8058 40.632V35.34H97.3338V40.632H84.8058ZM84.8058 30.912V25.476H98.4138V30.912H84.8058ZM102.264 51V25.476H106.764L108.708 30.696V51H102.264ZM119.868 51L104.964 32.064L106.764 25.476L121.704 44.412L119.868 51ZM119.868 51L118.212 45.636V25.476H124.656V51H119.868Z" fill="#2C462B"/>
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
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Seller
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
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
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
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <NavLink to={"whygreen"} className="text-sm font-semibold leading-6 text-gray-900 pointer">
              Why Green?
            </NavLink>
            <NavLink to={"marketplace"} className="text-sm font-semibold leading-6 text-gray-900 pointer">
              Marketplace
            </NavLink>
            <Link to={"contactus"} className="text-sm font-semibold leading-6 text-gray-900 pointer" >
              Contact Us
            </Link>
            <Popover className="relative ml-12">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Languages
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
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
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
        <NavLink to={"signin"} className="text-sm font-semibold leading-6 text-gray-900">
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Seller
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <NavLink
                 to={"whygreen"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                   Why Green?
                </NavLink>
                <NavLink
                  to={"marketplace"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </NavLink>
                <NavLink
                  to={"contactus"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </NavLink>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Languages
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
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
              <a
                  href="#00"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Outlet/>
    </header>
  )
}
