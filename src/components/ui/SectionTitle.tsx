import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div 
        className={`h-1 w-20 bg-primary-400 mt-4 rounded-full ${
          center ? 'mx-auto' : ''
        }`} 
      />
    </div>
  );
};

export default SectionTitle;