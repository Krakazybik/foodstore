import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IButtonProps extends IButton {
  invert?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  invert = false,
  children,
  ...props
}) => {
  return (
    <>
      <button
        className={cn(styles.button, invert && styles.button__invert)}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
