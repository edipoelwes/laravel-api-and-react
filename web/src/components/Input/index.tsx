import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({name, placeholder, label, ...rest}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} className="form-control" placeholder={placeholder} {...rest}/>
    </div>
  );
};

export default Input;