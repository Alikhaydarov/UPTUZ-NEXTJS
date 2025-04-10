"use client";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import CircleText from "./circl";

export default function Hero() {
  const t = useTranslations("Hero");

  const imageSources = [
    "https://static.vecteezy.com/system/resources/previews/024/114/189/original/programmer-working-on-computer-coders-or-programmers-writing-program-landing-page-for-web-it-courses-with-html-and-php-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/915/123/non_2x/man-programmer-is-working-on-his-laptop-coding-and-programming-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/007/814/266/small/programmer-and-engineering-development-coding-web-development-website-design-developer-flat-vector.jpg"
  ];

  return (
    <div className="relative overflow-hidden">
      <Fade cascade direction="left" triggerOnce duration={600}>
        <div className="pt-16 pb-10 sm:pt-24 sm:pb-40 lg:pt-64 lg:pb-48 w-full">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Text section */}
            <div className="sm:max-w-lg w-full">
              <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-5xl sm:leading-tight max-sm:mt-10">
                {t("title1")}
              </h1>
              <p className="mt-4 text-xl text-gray-500">{t("title2")}</p>
              <br />
              <a
                href="#"
                className="inline-block rounded-lg border border-transparent bg-violet-800 py-3 px-8 text-center font-medium text-white hover:bg-violet-700"
              >
                {t("title3")}
              </a>
            </div>

            <div className=" xl:flex-col sm:pt-36">
                {/* Desktop view */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl max-sm:hidden"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 max-sm:h-full">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-80 w-56 overflow-hidden rounded-lg">
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/024/114/189/original/programmer-working-on-computer-coders-or-programmers-writing-program-landing-page-for-web-it-courses-with-html-and-php-vector.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-80 w-56 overflow-hidden rounded-lg">
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/016/915/123/non_2x/man-programmer-is-working-on-his-laptop-coding-and-programming-vector.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-80 w-56 overflow-hidden rounded-lg">
                          <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-80 w-56 overflow-hidden rounded-lg">
                          <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/007/814/266/small/programmer-and-engineering-development-coding-web-development-website-design-developer-flat-vector.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>

            {/* Mobile grid 2x2 */}
            <div className="sm:hidden mt-10 grid grid-cols-2 gap-4 px-4">
              {imageSources.map((src, i) => (
                <div
                  key={i}
                  className="w-full aspect-square overflow-hidden rounded-xl shadow-md bg-white"
                >
                  <img
                    src={src}
                    alt={`img-${i}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Circle text component for desktop */}
        <div className="hidden sm:flex justify-center -mt-24 z-10 relative">
          <CircleText />
        </div>
      </Fade>
    </div>
  );
}
