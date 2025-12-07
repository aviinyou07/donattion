import React from 'react';

// --- Types ---
type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title?: string;
  links: FooterLink[];
};

 

 

const legalLinks: FooterLink[] = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy Notice', href: '#' },
  { label: 'Legal', href: '#' },
  { label: 'Accessibility Statement', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

// --- Sub-components for cleaner structure ---

const LinkColumn: React.FC<FooterSection> = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    {title && <h3 className="font-bold text-base text-black">{title}</h3>}
    <ul className="flex flex-col gap-3 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:underline">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Component ---

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-[#2e2e2e] font-sans pt-12 pb-8 px-3 ">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP GRID SECTION --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-8">
           
          
          {/* The 4th column has no title but extra top padding on desktop to align */}
           
        </div>

        {/* --- MORE RESOURCES DROPDOWN --- */}
        <div className="mb-12">
          <button className="flex items-center gap-2 text-sm text-[#2e2e2e] hover:underline bg-transparent border-none cursor-pointer">
            More resources
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* --- DIVIDER --- */}
        <hr className="border-gray-200 mb-8" />

        {/* --- BOTTOM SECTION: LANGUAGE & SOCIALS --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          
          {/* Language Selector */}
          <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm hover:bg-gray-50 transition bg-white">
             {/* US Flag SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="10">
                <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                <clipPath id="t"><path d="M0,0 v30 h60 v-30 zM0,0 v30 h60 v-30 z"/></clipPath>
                <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 v4 h60 v4 h-60 v4 h60 v4 h-60 v4 h60 v4 h-60 v4 h60 v2 h-60 z" fill="#fff"/>
                    <path d="M0,4 v4 h60 v4 h-60 v4 h60 v4 h-60 v4 h60 v4 h-60 v-28 z" fill="#bf0a30"/>
                    <path d="M0,0 v16 h32 v-16 z" fill="#3c3b6e"/> 
                </g>
            </svg>
            <span className="font-medium">United States</span>
            <span className="text-gray-400">·</span>
            <span>English</span>
          </button>

          {/* Social Icons */}
          <div className="flex gap-6 text-black">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 6.42v11.16a2.78 2.78 0 0 0 1.94 2C3.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2V6.42zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path>
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* --- FOOTER LEGAL & APP BADGES --- */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6">
          
          {/* Copyright & Legal Links */}
          <div className="flex flex-col gap-4">
             <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-[#2e2e2e]">
                <span>© 2010-2025 GoFundMe</span>
                {legalLinks.map((link, i) => (
                    <a key={i} href={link.href} className="hover:underline">{link.label}</a>
                ))}
             </div>
             
             <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-[#2e2e2e]">
                <button className="hover:underline bg-transparent border-none cursor-pointer p-0">Manage Cookie Preferences</button>
                <button className="flex items-center gap-1 hover:underline bg-transparent border-none cursor-pointer p-0">
                    Your Privacy Choices
                    <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 30 14">
                        <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" fillRule="evenodd"></path>
                        <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" fillRule="evenodd"></path>
                        <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2 2.2-2.2c.2-.2.6-.2.8 0z"></path>
                    </svg>
                </button>
             </div>
          </div>

          {/* App Store Badges */}
          <div className="flex gap-2">
            <a href="#" className="bg-black text-white rounded-md px-2 py-1 flex items-center gap-2 border border-gray-600 w-32 h-10 justify-center no-underline">
               <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.17,10.87C20.69,11.15 20.69,11.85 20.17,12.12L17.53,13.65L15.27,11.38L17.53,9.11L20.17,10.87M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" /></svg>
               <div className="flex flex-col items-start leading-none">
                 <span className="text-[0.5rem] uppercase">Get it on</span>
                 <span className="text-sm font-semibold">Google Play</span>
               </div>
            </a>

            <a href="#" className="bg-black text-white rounded-md px-2 py-1 flex items-center gap-2 border border-gray-600 w-32 h-10 justify-center no-underline">
               <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current flex-shrink-0"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" /></svg>
               <div className="flex flex-col items-start leading-none">
                 <span className="text-[0.5rem]">Download on the</span>
                 <span className="text-sm font-semibold">App Store</span>
               </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;