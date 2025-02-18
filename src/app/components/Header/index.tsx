'use client';

import { Button } from 'react-aria-components';
import SportsNavBar from './SportsNavBar';

const Header = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#012061] to-[#013993]">
      {/* Top status bar */}

      {/* Navigation bar */}
      <div className="flex items-center justify-between px-4">
        {/* Back button */}
        <div>
          <svg width="55" height="51" viewBox="0 0 55 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.4697 23.4697C14.1768 23.7626 14.1768 24.2374 14.4697 24.5303L19.2426 29.3033C19.5355 29.5962 20.0104 29.5962 20.3033 29.3033C20.5962 29.0104 20.5962 28.5355 20.3033 28.2426L16.0607 24L20.3033 19.7574C20.5962 19.4645 20.5962 18.9896 20.3033 18.6967C20.0104 18.4038 19.5355 18.4038 19.2426 18.6967L14.4697 23.4697ZM38 23.25L15 23.25L15 24.75L38 24.75L38 23.25Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <Button
            className="inline-flex h-[27px] w-[70px] items-center justify-center gap-1 rounded border-[0.5px] border-white p-2 hover:bg-white/10"
            onPress={() => {
              /* handle click */
            }}
          >
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                opacity="0.9"
                d="M5 4C6.12909 4 7.03727 3.104 7.03727 2C7.03727 0.896 6.12909 0 5 0C3.87091 0 2.95455 0.896 2.95455 2C2.95455 3.104 3.87091 4 5 4ZM5 5C3.50273 5 0.5 5.736 0.5 7.2V9H9.5V7.2C9.5 5.736 6.49727 5 5 5Z"
                fill="white"
              />
            </svg>
            <span className="text-center text-xs font-normal leading-4 text-white">€20.00</span>
          </Button>
        </div>
      </div>
      <SportsNavBar />
    </div>
  );
};

export default Header;
