"use client";

import { MdMenu, MdPodcasts, MdEmail, MdClose, MdHome } from "react-icons/md";
import { socialLinks } from "../data/socials"; // Import shared data
import { useState } from "react";
import Link from 'next/link';
import { Container } from './Container';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <MdHome className="text-xl" /> },
    {
      name: "Podcast",
      href: "/podcast",
      icon: <MdPodcasts className="text-xl" />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <MdEmail className="text-xl" />,
    },
  ];

  // Use the first 4 links for the navbar to match the original design
  const navbarSocials = socialLinks.slice(0, 4);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-neutral-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white hover:text-neutral-300 transition-colors"
          >
            Lex Fridman
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-neutral-700 mx-2" />
            <div className="flex items-center gap-4">
              {navbarSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#121212]">
          <Container className="py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 text-base font-medium text-neutral-300 hover:text-white py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-neutral-800 my-2" />
              <div className="flex items-center gap-6 py-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors text-xl"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
