interface ContainerProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export default function Container({ className = '', children }: ContainerProps) {
    return (
      <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    )
  }