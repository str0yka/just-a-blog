import { forwardRef } from 'react';
import clsx from 'clsx';

import s from './Button.module.scss';

type ButtonProps = React.ComponentProps<'button'>;

export const Button = forwardRef<React.ComponentRef<'button'>, ButtonProps>(
  ({ className, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={clsx(s.button, className)}
      {...props}
    />
  ),
);
