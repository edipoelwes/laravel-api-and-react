import React, {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  value?: string;
}

const Button: React.FC<ButtonProps> = ({className, value, ...rest}) => (
  <button className={className} {...rest}>{value}</button>
)

export default Button;