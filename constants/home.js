import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaTiktok, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export const navLinks = [
	{
		title: 'About Me',
		cName: 'nav_item',
		url: '/about',
	},
	{
		title: 'Skills',
		cName: 'nav_item',
		url: '/skills',
	},
	{
		title: 'Projects',
		cName: 'nav_item',
		url: '/projects',
	},
	{
		title: 'Contact',
		cName: 'nav_item',
		url: '/contact',
	},
	{
		title: 'CV',
		url: 'https://drive.google.com/drive/folders/1nwD0892yZEUiuvwe-vbItaGm-Xkd-3y_?usp=sharing',
		cName: 'cta_resume',
	},
];

export const emailLink =
	'https://mail.google.com/mail/u/0/?to=triaprilia1@gmail.com&su=&body=&fs=1&tf=cm';

	export const footerSocials = [
		{
			name: 'instagram',
			logo: <AiFillInstagram size={22} />,
			url: 'https://www.instagram.com/traprilliarr/',
		},
		{
			name: 'linkedin',
			logo: <FaLinkedinIn size={22} />,
			url: 'https://www.linkedin.com/in/retno-tri-aprillia',
		},
		{
			name: 'github',
			logo: <FaGithub size={22} />,
			url: 'https://github.com/traprilliarr',
		},
	];

export const heroData = {
	name: 'Retno Tri Aprillia',
	subheading: 'Frontend Developer',
	description:
		'A frontend developer who wishes to also pursue a career as a Data Enthusiast.',
};

export const aboutData = {
	heading: [
			'Hi, I am Retno Tri Aprillia a Frontend Developer with a keen interest in Data Enhusiasm.',
			'I have around 3 years of experience in the web development field, starting from 2020.',
			'I specialize in building websites with a background in blockchain projects and have worked on several projects related to website information systems. Additionally, I have been delving into Data Science since 2021. I am actively seeking opportunities in both Frontend Web Development and the field of data.',
		],
		education: {
			course: 'Bachelor of Informatics Engineering',
			school: 'Sriwijaya University',
		},
		certification: {
			title: 'GPA : 3.86/4.0;',
		},
	};

	export const skills = [
		{
			name: 'HTML',
			logo: 'html5.svg',
		},
		{
			name: 'CSS',
			logo: 'css.svg',
		},
		{
			name: 'Javascript',
			logo: 'js.svg',
		},
		{
			name: 'Tailwind',
			logo: 'tailwind.svg',
		},
		{
			name: 'Laravel',
			logo: 'Laravel.svg',
		},
		{
			name: 'Codeigniter',
			logo: 'codeigniter.svg',
		},
		{
			name: 'React',
			logo: 'react.svg',
		},
		{
			name: 'Node',
			logo: 'node.svg'
		},
		{
			name: 'Vite',
			logo: 'vite.svg',
		},
		{
			name: 'Next',
			logo: 'nextjs.svg',
		},
		{
			name: 'PostgreSQL',
			logo: 'postgre.svg',
		},
		{
			name: 'SQL',
			logo: 'sql.svg',
		},
	];
		
export const projects = [
	{
		title: 'Portfolio Website',
		description: 'Created with a simple, elegant, and organized concept for easier visibility',
		techsUsed: ['Next', 'React', 'Tailwind', 'Motion'],
		image: 'porto.png',
		liveUrl: 'https://traprilliarr.vercel.app/',
	},
	{
		title: 'Archive Data PLN',
		description:
			'This website was created as the final project of an internship at PT PLN, which contains storage for outgoing and incoming letters',
		techsUsed: ['HTML', 'CSS' ,'SQL Server','PHP', 'Codeigniter', 'Laravel'],
		image: 'pln.jpg',
		githubUrl: 'https://github.com/traprilliarr',
	},
	{
		title: 'Cloudtx',
		description:
			'A launchpad website that connects a payment gateway to Uniswap/Pancakeswap using the Web3 model',
		techsUsed: ['Next', 'Tailwind', 'Google Font API', 'Uniswap Payment', 'Pancakeswap Payment'],
		image: 'cloudtx.png',
		liveUrl: 'https://cloudtx.finance',
	},
	{
		title: 'Clocked',
		description:
			'A launchpad website with a simple model and a few added shapes to make it look more dynamic',
		techsUsed: ['HTML', 'CSS' ,'Javascript'],
		image: 'clocked.png',
		githubUrl: 'https://github.com/traprilliarr',
	},
	{
		title: 'TokoJJ',
		description:
			'A simple accounting website project was created to make it easily understandable and utilizes basic PHP CRUD operations with a touch of JavaScript animation to enhance interactivity',
		techsUsed: ['HTML', 'CSS', 'Javascript', 'Tailwind','Java','Fetch'],
		image: 'tokojj.png',
		liveUrl: 'https://websitetokojj.github.io/tokojj.github.io/',
	},
	{
		title: 'Brother Saitama',
		description:
			'A Bookmark Landing Page challenge from the Frontend Mentor website.',
		techsUsed: ['HTML', 'CSS', 'Javascript', 'Tailwind'],
		image: 'bs.png',
		liveUrl: '#',
		githubUrl: '#',
	},
	{
		title: 'Unsri UAS Project',
		description:
			'A Fylo Landing Page challenge from the Frontend Mentor website.',
			techsUsed: ['HTML', 'CSS', 'Javascript', 'Bootsrap'],
			image: 'unsri.png',
			liveUrl: '#',
			githubUrl: '#',
	},
	{
		title: 'Palembang Tourism',
		description:
			'A website containing information about tourist attractions in Palembang was created in 2020',
		techsUsed: ['HTML', 'CSS', 'Javascript', 'Codeigniter', 'SQL Server', 'PHP'],
		image: 'plg.png',
		liveUrl: '#',
		githubUrl: '#',
	},
];
