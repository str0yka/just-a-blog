import { forwardRef } from 'react';
import clsx from 'clsx';

import s from './IconButton.module.scss';

type IconButtonProps = React.ComponentProps<'button'>;

export const IconButton = forwardRef<React.ComponentRef<'button'>, IconButtonProps>(
  ({ className, type = 'button', ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      type={type}
      className={clsx(s.button, className)}
    />
  ),
);
