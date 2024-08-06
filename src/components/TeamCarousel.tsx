'use client'
import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay"

const TeamCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const teamMembers = [
    { name: "Ali Khaydarov", role: "Frontend Developer", imgSrc: "https://uptuz.vercel.app/assets/20240209_152948-Fm14QjzX.jpg", github: "#", linkedin: "#", instagram: "#" },
    { name: "Ulug'bek Ismoilov", role: "Backend Developer", imgSrc: "https://uptuz.vercel.app/assets/photo_3_2024-01-12_23-18-57-14G6P4QJ.jpg", github: "#", linkedin: "#", instagram: "#" },
    { name: "Rustam", role: "Full Stack Developer", imgSrc: "https://uptuz.vercel.app/assets/photo_2024-01-17_19-12-49-qrgV3VDU.jpg", github: "#", linkedin: "#", instagram: "#" },
    { name: "Shirin", role: "UI/UX Designer", imgSrc: "https://uptuz.vercel.app/assets/20240209_152948-Fm14QjzX.jpg", github: "#", linkedin: "#", instagram: "#" },
    { name: "Javohir", role: "DevOps Engineer", imgSrc: "https://uptuz.vercel.app/assets/20240209_152948-Fm14QjzX.jpg", github: "#", linkedin: "#", instagram: "#" },
    { name: "Javohir", role: "DevOps Engineer", imgSrc: "https://uptuz.vercel.app/assets/20240209_152948-Fm14QjzX.jpg", github: "#", linkedin: "#", instagram: "#" },
  ];

  return (
    <div className="container px-10 pr-20">
      <h1 className="text-2xl font-semibold text-center title-font text-gray-900 dark:text-white">OUR TEAM</h1>
      <Carousel plugins={[plugin.current]} className="relative border-0 shadow-none">
        <CarouselPrevious className="bg-white dark:bg-slate-900 w-12 h-12 absolute left-[-0.3rem] top-1/2 transform -translate-y-1/2 z-10 p-2 shadow-lg" />
        <CarouselNext className="bg-white dark:bg-slate-900 w-12 h-12 absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 z-10 p-2 shadow-lg" />
        <CarouselContent className="flex border-transparent shadow-none">
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="lg:basis-1/5 max-sm:basis-1/2 md:basis-1/3 h-100 border-transparent p-2">
              <Card className='border-transparent w-[280px]' style={{ boxShadow: 'none', border: 'none' }}>
                <CardHeader>
                  <div className="relative group">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="transition-opacity duration-300 rounded-xl object-cover h-[280px] w-[400px] max-sm:h-[200px] max-sm:w-[300px]"
                      style={{ boxShadow: 'none', border: 'none' }}
                    />
                    <div className="absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-6">
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white">
                          <FaGithub className='' />
                        </a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white">
                          <FaLinkedin />
                        </a>
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white">
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-start pt-5 text-lg">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-start pt-[-2rem] text-sm">{member.role}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-around">
                  {/* Additional information or buttons */}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TeamCarousel;
