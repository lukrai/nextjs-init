'use client';

import { Button } from 'react-aria-components';

interface NavItem {
  label: string;
  isLarge?: boolean;
}

const navItems: NavItem[] = [
  { label: 'In Play', isLarge: true },
  { label: 'Racing' },
  { label: 'Football' },
  { label: 'Dogs' },
  { label: 'Lotto' },
  { label: 'Fantasy' },
  { label: 'Tennis' },
  { label: 'Basketball' },
  { label: 'Baseball' },
];

const SportsNavBar = () => {
  return (
    <nav className="h-[50px] w-full bg-gradient-to-b from-[#013993] to-[#0253C5]">
      <div className="scrollbar-hide flex h-full items-center overflow-x-auto scroll-smooth px-4">
        <div className="flex gap-6">
          {navItems.map((item, index) => (
            <Button
              key={index}
              className={`font-inter shrink-0 text-white ${
                item.isLarge ? 'text-xs' : 'text-[11px]'
              } font-normal leading-4 hover:text-white/80`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SportsNavBar;
