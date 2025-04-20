import React from 'react';

interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white';
  className?: string;
  fullScreen?: boolean;
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = '',
  fullScreen = false,
  text = ''
}) => {
  // Size variants
  const sizeClasses: Record<string, string> = {
    xs: 'w-4 h-4 border-2',
    sm: 'w-6 h-6 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
    xl: 'w-16 h-16 border-4'
  };

  // Color variants
  const colorClasses: Record<string, string> = {
    primary: 'border-blue-600 border-t-transparent',
    secondary: 'border-gray-600 border-t-transparent',
    success: 'border-green-600 border-t-transparent',
    danger: 'border-red-600 border-t-transparent',
    warning: 'border-yellow-600 border-t-transparent',
    info: 'border-cyan-600 border-t-transparent',
    light: 'border-gray-300 border-t-transparent',
    dark: 'border-gray-800 border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  // Spinner base classes
  const spinnerClasses = `inline-block rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`;

  // Full screen spinner overlay
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="flex flex-col items-center">
          <div className={spinnerClasses}></div>
          {text && <p className="mt-4 text-white font-medium">{text}</p>}
        </div>
      </div>
    );
  }

  // Regular spinner
  return (
    <div className="flex items-center justify-center">
      <div className={spinnerClasses}></div>
      {text && <p className="ml-3 text-sm font-medium">{text}</p>}
    </div>
  );
};

export default Spinner;