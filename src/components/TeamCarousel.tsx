'use client'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../components/ui/carousel'

const TeamCarousel = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	)
	const teamMembers = [
		{
			name: 'Ali Khaydarov',
			role: 'Frontend Developer',
			imgSrc: 'https://uptuz.vercel.app/assets/20240209_152948-Fm14QjzX.jpg',
			github: 'https://github.com/Alikhaydarov',
			telegram: 'https://t.me/khaydarov_coder',
			instagram: 'https://www.instagram.com/khaydarov_coder/',
		},
		{
			name: "Ulug'bek Ismoilov",
			role: 'Backend Developer',
			imgSrc:
				'https://uptuz.vercel.app/assets/photo_3_2024-01-12_23-18-57-14G6P4QJ.jpg',
			github: 'https://github.com/UPTUZOVER',
			telegram: 'https://t.me/uptuz-owner',
			instagram: 'https://www.instagram.com/samur0770/',
		},
		{
			name: 'Name',
			role: 'Full Stack Developer',
			imgSrc:
				'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010',
			github: '#',
			telegram: '#',
			instagram: '#',
		},
		{
			name: 'Name',
			role: 'UI/UX Designer',
			imgSrc:
				'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010',
			github: '#',
			telegram: '#',
			instagram: '#',
		},
		{
			name: 'Name',
			role: 'DevOps Engineer',
			imgSrc:
				'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010',
			github: '#',
			telegram: '#',
			instagram: '#',
		},
		{
			name: 'Name',
			role: 'DevOps Engineer',
			imgSrc:
				'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010',
			github: '#',
			telegram: '#',
			instagram: '#',
		},
		{
			name: 'Nurbek Eshmurodov',
			role: 'Adminstrator',
			imgSrc:
				'https://uptuz.vercel.app/assets/photo_2_2024-01-13_00-31-52-PHUDMcra.jpg',
			github: '#',
			telegram: '#',
			instagram: 'https://www.instagram.com/nurbek07.me',
		},
	]

	return (
		<div className='container px-10 lg:pr-8'>
	<h1 className='text-4xl font-bold text-center mb-8'>Our Team</h1>
			<Carousel
				plugins={[plugin.current]}
				className='relative border-0 shadow-none'
			>
				<CarouselPrevious className='bg-white dark:bg-slate-900 w-12 h-12 absolute left-[-0.3rem] top-1/2 transform -translate-y-1/2 z-10 p-2 shadow-lg' />
				<CarouselNext className='bg-white dark:bg-slate-900 w-12 h-12 absolute right-[-0.2rem] top-1/2 transform -translate-y-1/2 z-10 p-2 shadow-lg' />
				<CarouselContent className='flex border-transparent shadow-none'>
					{teamMembers.map((member, index) => (
						<CarouselItem
							key={index}
							className='lg:basis-1/5 max-sm:basis-full md:basis-1/3 h-100 border-transparent p-2'
						>
							<Card
								className='border-transparent w-full max-sm:w-full'
								style={{ boxShadow: 'none', border: 'none' }}
							>
								<CardHeader>
									<div className='relative group'>
										<img
											src={member.imgSrc}
											alt={member.name}
											className='transition-opacity duration-300 rounded-xl object-cover lg:h-[260px] lg:w-[400px] max-sm:h-[350px] max-sm:w-[500px]'
											style={{ boxShadow: 'none', border: 'none' }}
										/>
										<div className='absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<div className='flex space-x-6'>
												<a
													href={member.telegram}
													target='_blank'
													rel='noopener noreferrer'
													className='text-white text-2xl hover:text-blue-400'
												>
													<FaTelegram />
												</a>
												<a
													href={member.github}
													target='_blank'
													rel='noopener noreferrer'
													className='text-white text-2xl hover:text-black'
												>
													<FaGithub className='' />
												</a>
												<a
													href={member.instagram}
													target='_blank'
													rel='noopener noreferrer'
													className='text-white text-2xl hover:text-red-600'
												>
													<FaInstagram />
												</a>
											</div>
										</div>
									</div>
									<CardTitle className='text-start pt-5 text-lg'>
										{member.name}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className='relative text-start max-sm:top-[-1em] pt-[-2rem] text-sm'>
										{member.role}
									</CardDescription>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default TeamCarousel
