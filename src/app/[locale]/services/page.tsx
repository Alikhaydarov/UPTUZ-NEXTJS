'use client'
import { Fade } from 'react-awesome-reveal'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'

const services = [
	{
		title: 'Web Development',
		description:
			'We develop websites with high quality, from corporate websites to web applications.',
	},
	{
		title: 'Mobile Apps',
		description:
			'Development and technical support of mobile applications of any complexity.',
	},
	{
		title: 'UI & UX',
		description:
			'Developing a project MindMap and designing it with the optimal solution based on its architecture.',
	},
	{
		title: 'Media Production',
		description:
			'Professional preparation of 2D/3D animation, project presentation, advertising, video, and other media resources.',
	},
	{
		title: 'CRM Systems',
		description:
			'Automation of business processes and development of electronic management systems that reduce paper-work by 100%.',
	},
	{
		title: 'Branding',
		description:
			'Developing a creative and unique logo for your project and creating its branding guidelines.',
	},
	{
		title: 'Production of Games',
		description:
			'Development of games of any subject and complexity, corresponding to the international level.',
	},
	{
		title: 'Artificial Intelligence',
		description:
			'Development of intelligent computer systems with the capabilities of human intelligence.',
	},
	{
		title: 'Cybersecurity',
		description:
			'Find and fix vulnerabilities in networks, devices, code, and data.',
	},
]

export default function Services() {
	return (
		<>
		<h1 className='text-4xl font-bold text-center mb-8'>Our Services</h1>
			<div className='grid md:grid-cols-2 max-w-screen-xl max-sm:p-4 mx-auto gap-10 mt-16 mb-7 px-1'>
				{services.map((service, index) => (
					<Fade
						key={index}
						cascade={true}
						direction='left'
						triggerOnce={true}
						duration={600 + index * 100}
					>
						<div className='flex gap-4 items-start max-sm:p-4 bg-slate-200 dark:bg-gray-800 flex-col p-6 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-none dark:rounded-xl rounded-xl transition-shadow duration-300 hover:shadow-lg hover:shadow-violet-500/20 dark:hover:shadow-black/50'>
							<span
								className={`text-violet-600 bg-violet-500/10 p-3 ml-3 rounded-full`}
							>
								<IoCheckmarkDoneCircle className='text-lg' />
							</span>
							<div>
								<h3 className='font-semibold text-xl px-4'>{service.title}</h3>
								<p className='mt-3 text-gray-500 px-4'>{service.description}</p>
							</div>
						</div>
					</Fade>
				))}
			</div>
		</>
	)
}
