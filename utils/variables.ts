import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsGoogle, BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { FaFigma, FaTerminal } from 'react-icons/fa';
import { 
  SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, 
  SiBootstrap, SiBun, SiBuymeacoffee, SiCss3, SiDeviantart, SiDiscord, 
  SiExpress, SiFirebase, SiGatsby, SiGit, SiGlitch, SiInstagram, 
  SiJavascript, SiLua, SiMongodb, SiPatreon, SiPnpm, SiReact, 
  SiReplit, SiRoblox, SiTailwindcss, SiTypescript
} from 'react-icons/si'; // SiWindowsterminal kaldırıldı
import { TbBrandBootstrap, TbBrandCSharp, TbBrandDiscord, TbBrandHtml5, TbBrandNextjs, TbBrandNodejs } from 'react-icons/tb';

export const githubUsername = "parsherr";
export const discordId = "689447667465453599";

export const works: { name: string; description: string; iconURL: string; link: string; view: string;}[] = [
  {
    name: 'Aki-Hub',
    description: 'Modern and user-friendly platform that supports development with open source projects.',
    link: 'https://akihub-frontend-demo.vercel.app/',
    view: '/resimler/proje-referans-tasarım.png',
    iconURL: '/resimler/logo-tasarım-2.png',
  },
  {
    name: 'Wraiths Code',
    description: 'Free discord code share server.',
    link: 'https://discord.gg/vsc',
    view: 'https://i.ibb.co/1XGr4gQ/Ekran-g-r-nt-s-2024-05-16-212332.png',
    iconURL: 'https://cdn.discordapp.com/icons/1085293868976709652/a_fc0875596ba95c84f0b8356570fc7472.gif',
  },
];


// iconURL için kendiniz libraryden tanımlarına bakıp kendi iconURL'nizi ekleyebilirsiniz. (kaynak : react-icons /bs)
export const socialMediaAccounts: { name: string; link: string; iconURL: IconType; username: string}[] = [
  {
    name: 'Github',
    username: '@akiracik',
    link: 'https://github.com/' + process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    username: '@akiracik',
    link: 'https://discord.gg/vsc',
    iconURL: BsDiscord,
  },
  {
    name: 'Youtube',
    username: '@akiracik',
    link: 'https://www.youtube.com/@parsher_',
    iconURL: BsYoutube,
  },
];

// iconURL için kendiniz libraryden tanımlarına bakıp kendi iconURL'nizi ekleyebilirsiniz.
export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'JavaScript',
    iconURL: SiJavascript,
  },
  {
    name: 'HTML5',
    iconURL: TbBrandHtml5,
  },
  {
    name: 'CSS',
    iconURL: SiCss3,
  },
  {
    name: 'Node.js',
    iconURL: TbBrandNodejs,
  },
  {
    name: 'Bootstrap',
    iconURL: TbBrandBootstrap,
  },
  {
    name: 'Discord.js',
    iconURL: SiDiscord,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express.js',
    iconURL: SiExpress,
  },
  {
    name: 'Lua',
    iconURL: SiLua,
  },
  {
    name: 'Terminal',
    iconURL: FaTerminal,
  },
  {
    name: 'TypeScript',
    iconURL: SiTypescript,
  },
  {
    name: 'Photoshop',
    iconURL: SiAdobephotoshop,
  },
  {
    name: 'Bun',
    iconURL: SiBun,
  },
  {
    name: 'pnpm',
    iconURL: SiPnpm,
  },
  {
    name: 'Git',
    iconURL: SiGit,
  },
  {
    name: 'Premiere Pro',
    iconURL: SiAdobepremierepro,
  },
];
