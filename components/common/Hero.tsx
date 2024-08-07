import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="dark:bg-dark flex items-center justify-center bg-gradient-to-r from-[#FFFFFF] to-[#D2DCFF] pb-[110px] pt-[120px] lg:pt-[150px]">
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="text-dark mb-5 text-4xl font-bold !leading-[1.208] sm:text-[42px] lg:text-[40px] xl:text-5xl dark:text-white">
                Kickstart Startup Website with TailGrids
              </h1>
              <p className="text-body-color dark:text-dark-6 mb-8 max-w-[480px] text-base">
                With TailGrids, business and students thrive together. Business
                can perfectly match their staffing to changing demand throughout
                the dayed.
              </p>
              <SearchBar />
              <ul className="flex flex-wrap items-center gap-x-4">
                <li>
                  <a
                    href="/#"
                    className="bg-primary hover:bg-blue-dark inline-flex items-center justify-center rounded-md border-none bg-[#3c4aac] px-6 py-3 text-center text-base font-medium text-white hover:border-none hover:bg-slate-400 hover:text-white hover:transition hover:delay-75 hover:ease-out lg:px-7"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="hover:text-primary inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] dark:text-white"
                  >
                    <span className="mr-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                        <rect
                          x="7.99893"
                          y="14.979"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="11.2717"
                          y="7.61523"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Download App
                  </a>
                </li>
              </ul>
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
