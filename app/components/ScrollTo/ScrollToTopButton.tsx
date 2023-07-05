'use client';

import Image from 'next/image';
import ScrollToTop from 'react-scroll-up';
import arrowUpIcon from '~/public/icons/up-arrow.svg';

const ScrollToTopButton = () => {
  return (
    <ScrollToTop showUnder={811} easing="easeInOutQuad" duration={1000}>
      <Image
        alt="UP arrow"
        src={arrowUpIcon}
        className="fixed bottom-5 right-5 h-9 w-9 rounded-full bg-secondary p-2 transition duration-500 hover:bg-tertiary"
      />
    </ScrollToTop>
  );
};

export default ScrollToTopButton;
