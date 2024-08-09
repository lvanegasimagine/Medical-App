import React from 'react'
import SearchBar from './SearchBar'
import TransitionalText from './TransitionalText'
import { Pill } from 'lucide-react'

const TEXTS = [
  'Acupuncture',
  'Massage',
  'Chiropractor',
  'Dental',
  'Cosmetic',
  'Dietitian',
  'Speech Therapist',
  'Occupational',
  'Therapist',
  'Acupuncturist'
]

const Hero = () => {
  return (
    <div className="dark:bg-dark flex items-center justify-center bg-gradient-to-r from-[#FFFFFF] to-[#D2DCFF] pb-[110px] pt-[120px] lg:pt-[150px]">
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="text-dark mb-5 gap-y-4 text-4xl font-bold !leading-[1.208] dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                <span>Book your</span>
                <TransitionalText
                  TEXTS={TEXTS}
                  className="py-4 text-blue-700"
                />
                <span>Sessions now</span>
              </h1>
              <p className="text-body-color dark:text-dark-6 mb-8 max-w-[480px] text-base">
                Health shouldn't be a puzzle, we are cutting through the B.S to
                bring you simple, affordable, and transparent healthcare.
              </p>
              <SearchBar />
              <ul className="flex flex-wrap items-center gap-x-4">
                <li>
                  <a
                    href="/#"
                    className="hover:bg-blue-dark inline-flex items-center justify-center rounded-md border-none bg-[#3c4aac] bg-primary px-6 py-3 text-center text-base font-medium text-white hover:border-none hover:bg-slate-400 hover:text-white hover:transition hover:delay-75 hover:ease-out lg:px-7"
                  >
                    Need Doctor Urgently
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-[#001E80] hover:text-primary dark:text-white"
                  >
                    <span className="mr-2">
                      <Pill className="h-4 w-4 flex-shrink-0" />
                    </span>
                    Need a Refill
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 py-4 pt-8">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold text-blue-800 tracking-wider">600</span>
                  <div className="text-sm text-slate-700">Active Specialists</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold text-blue-800 tracking-wider">600</span>
                  <div className="text-sm text-slate-700">Active Specialists</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

// const SingleImage = ({ href, imgSrc }: { href: string, imgSrc: string }) => {
//   return (
//     <>
//       <a href={href} className="flex w-full items-center justify-center">
//         <img src={imgSrc} alt="brand image" className="h-10 w-full" />
//       </a>
//     </>
//   )
// }
