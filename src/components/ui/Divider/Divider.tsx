import { forwardRef } from 'react';
import clsx from 'clsx';

import s from './Divider.module.scss';

type DividerVariants = 'extra-light' | 'light' | 'medium';

interface DividerProps extends React.ComponentProps<'div'> {
  variant?: DividerVariants;
}

export const Divider = forwardRef<React.ComponentRef<'div'>, DividerProps>(
  ({ variant = 'light', className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(s.divider, s[variant], className)}
      {...props}
    />
  ),
);
