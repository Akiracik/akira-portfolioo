import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const SocialIcons = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/akira', label: 'GitHub' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com/akira', label: 'Twitter' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/akira', label: 'LinkedIn' },
    { icon: <FiInstagram size={20} />, url: 'https://instagram.com/akira', label: 'Instagram' },
    { icon: <FiYoutube size={20} />, url: 'https://youtube.com/akira', label: 'YouTube' },
  ];

  return (
    <div className="flex space-x-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;