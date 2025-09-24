'use client';
import { usePathname } from "next/navigation";
import { usePageTransitionContext } from "../context/PageTransitionContext";

export default function NavBar() {
  const navItems = [
    { name: 'home', href:'/', active: true },
    { name: 'about', href:'/about', active: false },
    { name: 'projects', href:'/projects', active: false },
    { name: 'contact', href:'/contact', active: false },
    { name: 'resume', href:'/ZaidAbdulameerResume.pdf', active: false, newtab: true },
    { name: 'games', href:'https://pugchamp.itch.io/', active: false, newtab: true },
  ];
  const path = usePathname();
  const { navigateWithTransition, isTransitioning } = usePageTransitionContext();

  const handleClick = (e, item) => {
    e.preventDefault();
    
    // Don't navigate if we're already transitioning or if it's the current page
    if (isTransitioning || path === item.href) {
      return;
    }

    navigateWithTransition(item.href, { 
      target: item.newtab ? '_blank' : '_self',
      newTab: item.newtab 
    });
  };

  return (
    <nav className="z-50">
      <div className="flex items-center justify-center px-8 py-4">
        {/* Left side - Navigation items */}
        <div className="flex space-x-18">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item)}
              className={`text-3xl font-medium transition-colors duration-200 cursor-pointer ${path == item.href
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-400 hover:text-white'
                } ${isTransitioning ? 'pointer-events-none opacity-75' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}