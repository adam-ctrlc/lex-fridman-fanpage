import { socialLinks } from '../data/socials';

export function SocialLinks({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors text-2xl"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
