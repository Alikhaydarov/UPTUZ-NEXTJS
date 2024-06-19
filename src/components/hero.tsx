"use client"
import { useTranslations } from "next-intl"
import { Fade } from "react-awesome-reveal";
export default function Hero() {
    const t = useTranslations('Hero')
  return (

<div className="relative overflow-hidden">
{/* <>
    <div class="container h-screen relative flex justify-center items-center">
      <div
        class="bg-sky-200 absolute h-96 w-1/4 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-[-200px] translate-y-[-100px]"
      ></div>
      <div
        class="bg-sky-400 absolute h-96 w-1/4 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      ></div>
      <div
        class="bg-sky-200 absolute h-96 w-1/4 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-[200px] translate-y-[100px]"
      ></div></div></> */}
<Fade cascade={true} direction="left" triggerOnce={true} duration={600}>
    <div className="pt-16 pb-10 sm:pt-24 sm:pb-40 lg:pt-60 lg:pb-48 w-full top-0">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg w-full">
          <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-5xl sm:leading-tight w-full max-sm:mt-10">{t('title1')}</h1>
          
          <p className="mt-4 text-xl text-gray-500">{t('title2')}</p>
          <br />
          <a href="#" className="inline-block rounded-lg border border-transparent bg-violet-800 py-3 px-8 text-center font-medium text-white hover:bg-violet-800">{t('title3')}</a>
        </div>
        <div>
          <div className="mt-20 xl:flex-col">
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl max-sm:hidden ">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 max-sm:h-full">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
    
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://static.vecteezy.com/system/resources/previews/024/114/189/original/programmer-working-on-computer-coders-or-programmers-writing-program-landing-page-for-web-it-courses-with-html-and-php-vector.jpg" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    {/* <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/what-does-a-coder-do-2022-career-guide-1.jpg" alt="" className="h-full w-full object-cover object-center"/>
                    </div> */}
                    <div className="h-64 w-44 overflow-hidden rounded-lg ">
                      <img src="https://static.vecteezy.com/system/resources/previews/016/915/123/non_2x/man-programmer-is-working-on-his-laptop-coding-and-programming-vector.jpg" alt="" className="h-full w-full object-cover object-center "/>
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/007/814/266/small/programmer-and-engineering-development-coding-web-development-website-design-developer-flat-vector.jpg" alt="" className="h-full w-full object-cover object-center"/>
                    </div>
       
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="min sm:hidden grid min-[]: min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
  <div className="grid grid-cols-2 gap-2">
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src="https://static.vecteezy.com/system/resources/previews/024/114/189/original/programmer-working-on-computer-coders-or-programmers-writing-program-landing-page-for-web-it-courses-with-html-and-php-vector.jpg"
        alt="" />
    </div>
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src="https://static.vecteezy.com/system/resources/previews/016/915/123/non_2x/man-programmer-is-working-on-his-laptop-coding-and-programming-vector.jpg"
        alt="" />
    </div>
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src="https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
        alt="" />
    </div>
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src="https://static.vecteezy.com/system/resources/thumbnails/007/814/266/small/programmer-and-engineering-development-coding-web-development-website-design-developer-flat-vector.jpg"
        alt="" />
    </div>
  </div>
</div>
            {/* <a href="#" className="inline-block rounded-lg border border-transparent bg-violet-800 py-3 px-8 text-center font-medium text-white hover:bg-violet-800">{t('title3')}</a> */}
          </div>
        </div>
      </div>
    </div>
    </Fade>
  </div>
  )
}
