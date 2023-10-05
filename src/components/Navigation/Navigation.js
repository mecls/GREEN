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
      <nav className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="md:flex lg:flex-1 mb-6 md:mb-0 mt-3 h-[50px] w-[50px] items-center photos:svg justify-center rounded-2xl">
          <Link to={"/"} className="-m-1.5 p-0">
            <span className="sr-only">Green</span>
            <svg width="250" height="86" viewBox="0 0 200 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_530_36)">
<path d="M1.89 35V13.73H7.26V35H1.89ZM14.91 35V13.73H20.28V35H14.91ZM4.95 26.36V21.86H16.86V26.36H4.95ZM24.0677 35V13.73H29.4377V35H24.0677ZM28.3277 35V30.47H39.8477V35H28.3277ZM28.3277 26.36V21.95H38.7677V26.36H28.3277ZM28.3277 18.26V13.73H39.6677V18.26H28.3277ZM47.1363 26.39V22.55H51.1863C52.0663 22.55 52.7363 22.34 53.1963 21.92C53.6763 21.48 53.9163 20.89 53.9163 20.15C53.9163 19.43 53.6763 18.85 53.1963 18.41C52.7363 17.95 52.0663 17.72 51.1863 17.72H47.1363V13.73H51.9363C53.3763 13.73 54.6363 14 55.7163 14.54C56.8163 15.08 57.6763 15.82 58.2963 16.76C58.9163 17.7 59.2263 18.8 59.2263 20.06C59.2263 21.32 58.9063 22.43 58.2663 23.39C57.6463 24.33 56.7763 25.07 55.6563 25.61C54.5363 26.13 53.2263 26.39 51.7263 26.39H47.1363ZM42.8763 35V13.73H48.2463V35H42.8763ZM54.3963 35L48.2163 25.88L53.0463 24.71L60.6063 35H54.3963ZM66.6188 35V31.01H71.0588C71.8988 31.01 72.5588 30.78 73.0388 30.32C73.5388 29.84 73.7888 29.22 73.7888 28.46C73.7888 27.96 73.6788 27.52 73.4588 27.14C73.2388 26.74 72.9188 26.44 72.4988 26.24C72.0988 26.02 71.6188 25.91 71.0588 25.91H66.6188V22.04H70.7288C71.4288 22.04 71.9988 21.87 72.4388 21.53C72.8988 21.17 73.1288 20.62 73.1288 19.88C73.1288 19.14 72.8988 18.6 72.4388 18.26C71.9988 17.9 71.4288 17.72 70.7288 17.72H66.6188V13.73H72.0188C73.3388 13.73 74.4788 13.98 75.4388 14.48C76.4188 14.98 77.1688 15.65 77.6888 16.49C78.2088 17.33 78.4688 18.28 78.4688 19.34C78.4688 20.76 77.9788 21.94 76.9987 22.88C76.0388 23.8 74.6388 24.37 72.7988 24.59V22.79C74.8388 23.03 76.3988 23.69 77.4788 24.77C78.5588 25.83 79.0988 27.17 79.0988 28.79C79.0988 29.99 78.7988 31.06 78.1988 32C77.5988 32.92 76.7488 33.65 75.6488 34.19C74.5688 34.73 73.2888 35 71.8088 35H66.6188ZM62.3588 35V13.73H67.6388V35H62.3588ZM92.1605 35.33C90.5405 35.33 89.0405 35.06 87.6605 34.52C86.3005 33.96 85.1005 33.18 84.0605 32.18C83.0405 31.18 82.2405 30.02 81.6605 28.7C81.1005 27.36 80.8205 25.91 80.8205 24.35C80.8205 22.77 81.1105 21.32 81.6905 20C82.2905 18.66 83.1205 17.5 84.1805 16.52C85.2405 15.52 86.4705 14.75 87.8705 14.21C89.2905 13.65 90.8005 13.37 92.4005 13.37C94.3005 13.37 96.0205 13.71 97.5605 14.39C99.1005 15.05 100.35 15.97 101.31 17.15L97.7105 20.75C96.9905 19.89 96.2005 19.25 95.3405 18.83C94.4805 18.39 93.4805 18.17 92.3405 18.17C91.1805 18.17 90.1405 18.43 89.2205 18.95C88.3205 19.45 87.6005 20.16 87.0605 21.08C86.5205 22 86.2505 23.08 86.2505 24.32C86.2505 25.56 86.5005 26.65 87.0005 27.59C87.5205 28.53 88.2205 29.26 89.1005 29.78C90.0005 30.3 91.0305 30.56 92.1905 30.56C93.3505 30.56 94.3305 30.34 95.1305 29.9C95.9505 29.46 96.5705 28.82 96.9905 27.98C97.4305 27.14 97.6505 26.14 97.6505 24.98L101.28 27.32L91.5905 27.08V22.7H103.05V23.51C103.05 26.05 102.59 28.2 101.67 29.96C100.75 31.72 99.4705 33.06 97.8305 33.98C96.2105 34.88 94.3205 35.33 92.1605 35.33ZM103.162 35L111.412 13.73H116.602L124.762 35H119.152L113.002 17.12H114.952L108.652 35H103.162ZM108.172 31.28V27.02H119.902V31.28H108.172ZM126.753 35V13.73H132.123V35H126.753ZM135.894 35V13.73H139.644L141.264 18.08V35H135.894ZM150.564 35L138.144 19.22L139.644 13.73L152.094 29.51L150.564 35ZM150.564 35L149.184 30.53V13.73H154.554V35H150.564ZM164.585 35.33C162.805 35.33 161.255 35.06 159.935 34.52C158.635 33.98 157.445 33.13 156.365 31.97L159.755 28.55C160.495 29.33 161.285 29.93 162.125 30.35C162.965 30.75 163.915 30.95 164.975 30.95C165.875 30.95 166.565 30.8 167.045 30.5C167.545 30.18 167.795 29.75 167.795 29.21C167.795 28.71 167.615 28.3 167.255 27.98C166.895 27.64 166.415 27.35 165.815 27.11C165.235 26.85 164.585 26.61 163.865 26.39C163.165 26.15 162.455 25.87 161.735 25.55C161.035 25.21 160.385 24.8 159.785 24.32C159.205 23.84 158.735 23.24 158.375 22.52C158.015 21.8 157.835 20.91 157.835 19.85C157.835 18.49 158.155 17.33 158.795 16.37C159.455 15.41 160.365 14.67 161.525 14.15C162.685 13.63 164.035 13.37 165.575 13.37C167.115 13.37 168.535 13.63 169.835 14.15C171.135 14.67 172.205 15.39 173.045 16.31L169.625 19.7C168.985 19.06 168.335 18.58 167.675 18.26C167.015 17.94 166.295 17.78 165.515 17.78C164.775 17.78 164.195 17.91 163.775 18.17C163.355 18.43 163.145 18.8 163.145 19.28C163.145 19.76 163.325 20.15 163.685 20.45C164.045 20.75 164.515 21.02 165.095 21.26C165.695 21.48 166.345 21.71 167.045 21.95C167.765 22.19 168.475 22.47 169.175 22.79C169.875 23.11 170.515 23.52 171.095 24.02C171.695 24.52 172.175 25.15 172.535 25.91C172.895 26.67 173.075 27.59 173.075 28.67C173.075 30.79 172.325 32.43 170.825 33.59C169.345 34.75 167.265 35.33 164.585 35.33Z" fill="#F4924B"/>
<path d="M1.89 33V11.73H7.26V33H1.89ZM14.91 33V11.73H20.28V33H14.91ZM4.95 24.36V19.86H16.86V24.36H4.95ZM24.0677 33V11.73H29.4377V33H24.0677ZM28.3277 33V28.47H39.8477V33H28.3277ZM28.3277 24.36V19.95H38.7677V24.36H28.3277ZM28.3277 16.26V11.73H39.6677V16.26H28.3277ZM47.1363 24.39V20.55H51.1863C52.0663 20.55 52.7363 20.34 53.1963 19.92C53.6763 19.48 53.9163 18.89 53.9163 18.15C53.9163 17.43 53.6763 16.85 53.1963 16.41C52.7363 15.95 52.0663 15.72 51.1863 15.72H47.1363V11.73H51.9363C53.3763 11.73 54.6363 12 55.7163 12.54C56.8163 13.08 57.6763 13.82 58.2963 14.76C58.9163 15.7 59.2263 16.8 59.2263 18.06C59.2263 19.32 58.9063 20.43 58.2663 21.39C57.6463 22.33 56.7763 23.07 55.6563 23.61C54.5363 24.13 53.2263 24.39 51.7263 24.39H47.1363ZM42.8763 33V11.73H48.2463V33H42.8763ZM54.3963 33L48.2163 23.88L53.0463 22.71L60.6063 33H54.3963ZM66.6188 33V29.01H71.0588C71.8988 29.01 72.5588 28.78 73.0388 28.32C73.5388 27.84 73.7888 27.22 73.7888 26.46C73.7888 25.96 73.6788 25.52 73.4588 25.14C73.2388 24.74 72.9188 24.44 72.4988 24.24C72.0988 24.02 71.6188 23.91 71.0588 23.91H66.6188V20.04H70.7288C71.4288 20.04 71.9988 19.87 72.4388 19.53C72.8988 19.17 73.1288 18.62 73.1288 17.88C73.1288 17.14 72.8988 16.6 72.4388 16.26C71.9988 15.9 71.4288 15.72 70.7288 15.72H66.6188V11.73H72.0188C73.3388 11.73 74.4788 11.98 75.4388 12.48C76.4188 12.98 77.1688 13.65 77.6888 14.49C78.2088 15.33 78.4688 16.28 78.4688 17.34C78.4688 18.76 77.9788 19.94 76.9987 20.88C76.0388 21.8 74.6388 22.37 72.7988 22.59V20.79C74.8388 21.03 76.3988 21.69 77.4788 22.77C78.5588 23.83 79.0988 25.17 79.0988 26.79C79.0988 27.99 78.7988 29.06 78.1988 30C77.5988 30.92 76.7488 31.65 75.6488 32.19C74.5688 32.73 73.2888 33 71.8088 33H66.6188ZM62.3588 33V11.73H67.6388V33H62.3588ZM92.1605 33.33C90.5405 33.33 89.0405 33.06 87.6605 32.52C86.3005 31.96 85.1005 31.18 84.0605 30.18C83.0405 29.18 82.2405 28.02 81.6605 26.7C81.1005 25.36 80.8205 23.91 80.8205 22.35C80.8205 20.77 81.1105 19.32 81.6905 18C82.2905 16.66 83.1205 15.5 84.1805 14.52C85.2405 13.52 86.4705 12.75 87.8705 12.21C89.2905 11.65 90.8005 11.37 92.4005 11.37C94.3005 11.37 96.0205 11.71 97.5605 12.39C99.1005 13.05 100.35 13.97 101.31 15.15L97.7105 18.75C96.9905 17.89 96.2005 17.25 95.3405 16.83C94.4805 16.39 93.4805 16.17 92.3405 16.17C91.1805 16.17 90.1405 16.43 89.2205 16.95C88.3205 17.45 87.6005 18.16 87.0605 19.08C86.5205 20 86.2505 21.08 86.2505 22.32C86.2505 23.56 86.5005 24.65 87.0005 25.59C87.5205 26.53 88.2205 27.26 89.1005 27.78C90.0005 28.3 91.0305 28.56 92.1905 28.56C93.3505 28.56 94.3305 28.34 95.1305 27.9C95.9505 27.46 96.5705 26.82 96.9905 25.98C97.4305 25.14 97.6505 24.14 97.6505 22.98L101.28 25.32L91.5905 25.08V20.7H103.05V21.51C103.05 24.05 102.59 26.2 101.67 27.96C100.75 29.72 99.4705 31.06 97.8305 31.98C96.2105 32.88 94.3205 33.33 92.1605 33.33ZM103.162 33L111.412 11.73H116.602L124.762 33H119.152L113.002 15.12H114.952L108.652 33H103.162ZM108.172 29.28V25.02H119.902V29.28H108.172ZM126.753 33V11.73H132.123V33H126.753ZM135.894 33V11.73H139.644L141.264 16.08V33H135.894ZM150.564 33L138.144 17.22L139.644 11.73L152.094 27.51L150.564 33ZM150.564 33L149.184 28.53V11.73H154.554V33H150.564ZM164.585 33.33C162.805 33.33 161.255 33.06 159.935 32.52C158.635 31.98 157.445 31.13 156.365 29.97L159.755 26.55C160.495 27.33 161.285 27.93 162.125 28.35C162.965 28.75 163.915 28.95 164.975 28.95C165.875 28.95 166.565 28.8 167.045 28.5C167.545 28.18 167.795 27.75 167.795 27.21C167.795 26.71 167.615 26.3 167.255 25.98C166.895 25.64 166.415 25.35 165.815 25.11C165.235 24.85 164.585 24.61 163.865 24.39C163.165 24.15 162.455 23.87 161.735 23.55C161.035 23.21 160.385 22.8 159.785 22.32C159.205 21.84 158.735 21.24 158.375 20.52C158.015 19.8 157.835 18.91 157.835 17.85C157.835 16.49 158.155 15.33 158.795 14.37C159.455 13.41 160.365 12.67 161.525 12.15C162.685 11.63 164.035 11.37 165.575 11.37C167.115 11.37 168.535 11.63 169.835 12.15C171.135 12.67 172.205 13.39 173.045 14.31L169.625 17.7C168.985 17.06 168.335 16.58 167.675 16.26C167.015 15.94 166.295 15.78 165.515 15.78C164.775 15.78 164.195 15.91 163.775 16.17C163.355 16.43 163.145 16.8 163.145 17.28C163.145 17.76 163.325 18.15 163.685 18.45C164.045 18.75 164.515 19.02 165.095 19.26C165.695 19.48 166.345 19.71 167.045 19.95C167.765 20.19 168.475 20.47 169.175 20.79C169.875 21.11 170.515 21.52 171.095 22.02C171.695 22.52 172.175 23.15 172.535 23.91C172.895 24.67 173.075 25.59 173.075 26.67C173.075 28.79 172.325 30.43 170.825 31.59C169.345 32.75 167.265 33.33 164.585 33.33Z" fill="#52856C"/>
<path d="M1.89 30V8.73H7.26V30H1.89ZM14.91 30V8.73H20.28V30H14.91ZM4.95 21.36V16.86H16.86V21.36H4.95ZM24.0677 30V8.73H29.4377V30H24.0677ZM28.3277 30V25.47H39.8477V30H28.3277ZM28.3277 21.36V16.95H38.7677V21.36H28.3277ZM28.3277 13.26V8.73H39.6677V13.26H28.3277ZM47.1363 21.39V17.55H51.1863C52.0663 17.55 52.7363 17.34 53.1963 16.92C53.6763 16.48 53.9163 15.89 53.9163 15.15C53.9163 14.43 53.6763 13.85 53.1963 13.41C52.7363 12.95 52.0663 12.72 51.1863 12.72H47.1363V8.73H51.9363C53.3763 8.73 54.6363 9 55.7163 9.54C56.8163 10.08 57.6763 10.82 58.2963 11.76C58.9163 12.7 59.2263 13.8 59.2263 15.06C59.2263 16.32 58.9063 17.43 58.2663 18.39C57.6463 19.33 56.7763 20.07 55.6563 20.61C54.5363 21.13 53.2263 21.39 51.7263 21.39H47.1363ZM42.8763 30V8.73H48.2463V30H42.8763ZM54.3963 30L48.2163 20.88L53.0463 19.71L60.6063 30H54.3963ZM66.6188 30V26.01H71.0588C71.8988 26.01 72.5588 25.78 73.0388 25.32C73.5388 24.84 73.7888 24.22 73.7888 23.46C73.7888 22.96 73.6788 22.52 73.4588 22.14C73.2388 21.74 72.9188 21.44 72.4988 21.24C72.0988 21.02 71.6188 20.91 71.0588 20.91H66.6188V17.04H70.7288C71.4288 17.04 71.9988 16.87 72.4388 16.53C72.8988 16.17 73.1288 15.62 73.1288 14.88C73.1288 14.14 72.8988 13.6 72.4388 13.26C71.9988 12.9 71.4288 12.72 70.7288 12.72H66.6188V8.73H72.0188C73.3388 8.73 74.4788 8.98 75.4388 9.48C76.4188 9.98 77.1688 10.65 77.6888 11.49C78.2088 12.33 78.4688 13.28 78.4688 14.34C78.4688 15.76 77.9788 16.94 76.9987 17.88C76.0388 18.8 74.6388 19.37 72.7988 19.59V17.79C74.8388 18.03 76.3988 18.69 77.4788 19.77C78.5588 20.83 79.0988 22.17 79.0988 23.79C79.0988 24.99 78.7988 26.06 78.1988 27C77.5988 27.92 76.7488 28.65 75.6488 29.19C74.5688 29.73 73.2888 30 71.8088 30H66.6188ZM62.3588 30V8.73H67.6388V30H62.3588ZM92.1605 30.33C90.5405 30.33 89.0405 30.06 87.6605 29.52C86.3005 28.96 85.1005 28.18 84.0605 27.18C83.0405 26.18 82.2405 25.02 81.6605 23.7C81.1005 22.36 80.8205 20.91 80.8205 19.35C80.8205 17.77 81.1105 16.32 81.6905 15C82.2905 13.66 83.1205 12.5 84.1805 11.52C85.2405 10.52 86.4705 9.75 87.8705 9.21C89.2905 8.65 90.8005 8.37 92.4005 8.37C94.3005 8.37 96.0205 8.71 97.5605 9.39C99.1005 10.05 100.35 10.97 101.31 12.15L97.7105 15.75C96.9905 14.89 96.2005 14.25 95.3405 13.83C94.4805 13.39 93.4805 13.17 92.3405 13.17C91.1805 13.17 90.1405 13.43 89.2205 13.95C88.3205 14.45 87.6005 15.16 87.0605 16.08C86.5205 17 86.2505 18.08 86.2505 19.32C86.2505 20.56 86.5005 21.65 87.0005 22.59C87.5205 23.53 88.2205 24.26 89.1005 24.78C90.0005 25.3 91.0305 25.56 92.1905 25.56C93.3505 25.56 94.3305 25.34 95.1305 24.9C95.9505 24.46 96.5705 23.82 96.9905 22.98C97.4305 22.14 97.6505 21.14 97.6505 19.98L101.28 22.32L91.5905 22.08V17.7H103.05V18.51C103.05 21.05 102.59 23.2 101.67 24.96C100.75 26.72 99.4705 28.06 97.8305 28.98C96.2105 29.88 94.3205 30.33 92.1605 30.33ZM103.162 30L111.412 8.73H116.602L124.762 30H119.152L113.002 12.12H114.952L108.652 30H103.162ZM108.172 26.28V22.02H119.902V26.28H108.172ZM126.753 30V8.73H132.123V30H126.753ZM135.894 30V8.73H139.644L141.264 13.08V30H135.894ZM150.564 30L138.144 14.22L139.644 8.73L152.094 24.51L150.564 30ZM150.564 30L149.184 25.53V8.73H154.554V30H150.564ZM164.585 30.33C162.805 30.33 161.255 30.06 159.935 29.52C158.635 28.98 157.445 28.13 156.365 26.97L159.755 23.55C160.495 24.33 161.285 24.93 162.125 25.35C162.965 25.75 163.915 25.95 164.975 25.95C165.875 25.95 166.565 25.8 167.045 25.5C167.545 25.18 167.795 24.75 167.795 24.21C167.795 23.71 167.615 23.3 167.255 22.98C166.895 22.64 166.415 22.35 165.815 22.11C165.235 21.85 164.585 21.61 163.865 21.39C163.165 21.15 162.455 20.87 161.735 20.55C161.035 20.21 160.385 19.8 159.785 19.32C159.205 18.84 158.735 18.24 158.375 17.52C158.015 16.8 157.835 15.91 157.835 14.85C157.835 13.49 158.155 12.33 158.795 11.37C159.455 10.41 160.365 9.67 161.525 9.15C162.685 8.63 164.035 8.37 165.575 8.37C167.115 8.37 168.535 8.63 169.835 9.15C171.135 9.67 172.205 10.39 173.045 11.31L169.625 14.7C168.985 14.06 168.335 13.58 167.675 13.26C167.015 12.94 166.295 12.78 165.515 12.78C164.775 12.78 164.195 12.91 163.775 13.17C163.355 13.43 163.145 13.8 163.145 14.28C163.145 14.76 163.325 15.15 163.685 15.45C164.045 15.75 164.515 16.02 165.095 16.26C165.695 16.48 166.345 16.71 167.045 16.95C167.765 17.19 168.475 17.47 169.175 17.79C169.875 18.11 170.515 18.52 171.095 19.02C171.695 19.52 172.175 20.15 172.535 20.91C172.895 21.67 173.075 22.59 173.075 23.67C173.075 25.79 172.325 27.43 170.825 28.59C169.345 29.75 167.265 30.33 164.585 30.33Z" fill="#2C462B"/>
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
              {t("nav_whygreen")}
            </NavLink>
            <NavLink to={"faq_u"} className="text-sm font-semibold leading-6 text-gray-900 pointer">
            FAQ
            </NavLink>
            <Link to={"contactus"} className="text-sm font-semibold leading-6 text-gray-900 pointer" >
            {t("nav_contact")} 
            </Link>
            <Popover className="relative ml-12">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
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
                <NavLink
                 to={"whygreen"}
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
