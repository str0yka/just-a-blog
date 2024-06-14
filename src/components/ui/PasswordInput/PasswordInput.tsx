'use client';

import { forwardRef, useState } from 'react';

import { IconButton } from '../IconButton/IconButton';
import { EyeIcon, EyeSlashedIcon } from '../icons';
import { Input } from '../Input/Input';

type PasswordInputProps = Omit<React.ComponentProps<typeof Input>, 'endAdornment' | 'type'>;

export const PasswordInput = forwardRef<React.ComponentRef<typeof Input>, PasswordInputProps>(
  (props, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <Input
        {...props}
        ref={ref}
        type={visible ? 'text' : 'password'}
        endAdornment={
          <IconButton onClick={() => setVisible((prevVisible) => !prevVisible)}>
            {visible && <EyeSlashedIcon />}
            {!visible && <EyeIcon />}
          </IconButton>
        }
      />
    );
  },
);
