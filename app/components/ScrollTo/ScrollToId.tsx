'use client';

import type { PropsWithChildren } from 'react';
import { Link as ScrollTo } from 'react-scroll';

type Props = {
  to: string;
  smooth?: boolean | string;
  duration?: number;
  offset?: number;
};
const ScrollToId = ({
  children,
  to,
  smooth,
  duration,
  offset,
}: PropsWithChildren<Props>) => {
  return (
    <ScrollTo to={to} smooth={smooth} duration={duration} offset={offset}>
      {children}
    </ScrollTo>
  );
};

export default ScrollToId;
