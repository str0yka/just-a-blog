import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import { Typography } from '../Typography/Typography';

import s from './Input.module.scss';

export interface InputProps extends React.ComponentProps<'input'> {
  error?: boolean;
  helperText?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const Input = forwardRef<React.ComponentRef<'input'>, InputProps>(
  (
    {
      startAdornment,
      endAdornment,
      error = false,
      helperText,
      className,
      id: externalId,
      ...props
    },
    ref,
  ) => {
    const internalId = useId();

    const id = externalId ?? internalId;

    return (
      <div>
        <label
          htmlFor={id}
          className={clsx(s['input-container'], {
            [s.error]: error,
          })}
        >
          {startAdornment && <div className={s.adornment}>{startAdornment}</div>}
          <input
            ref={ref}
            id={id}
            className={clsx(s.input, className)}
            {...props}
          />
          {endAdornment && <div className={s.adornment}>{endAdornment}</div>}
        </label>
        {helperText && <Typography color={error ? 'error' : 'primary'}>{helperText}</Typography>}
      </div>
    );
  },
);
