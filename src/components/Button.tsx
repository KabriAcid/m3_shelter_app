import React from 'react';
import { motion, MotionProps } from 'framer-motion';

type MotionButtonProps = React.ComponentProps<typeof motion.button>;

interface ButtonProps extends Omit<MotionButtonProps, 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-[#053DA6] hover:bg-[#042f85] text-white focus:ring-[#053DA6]',
    secondary: 'bg-[#FB7F00] hover:bg-[#e6720a] text-white focus:ring-[#FB7F00]',
    outline: 'border-2 border-[#053DA6] text-[#053DA6] hover:bg-[#053DA6] hover:text-white focus:ring-[#053DA6]'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </motion.button>
  );
};